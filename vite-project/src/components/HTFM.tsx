import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { RefreshCw, Undo2 } from "lucide-react";

/**
 * Hey, That's My Fish! — Minimal single-file React implementation
 * ---------------------------------------------------------------
 * - Hex grid using axial coordinates (q, r)
 * - Placement phase -> Playing phase -> Game over
 * - Move in straight lines along 6 hex directions
 * - When a penguin moves, you collect the START tile (it becomes a hole)
 * - Penguins that have no legal moves are removed; their owner claims the tile they stand on
 * - Player with the most fish wins
 *
 * Notes
 * - This is a light, self-contained demo meant for local state play.
 * - Board generation approximates the classic fish distribution.
 * - Supports 2–4 players; choose penguin count and placement rule.
 */

// ---------- Types ----------

type Tile = {
  id: string;
  q: number; // axial q
  r: number; // axial r
  fish: 0 | 1 | 2 | 3; // 0 means hole/removed
  hole: boolean;
  penguinId?: string;
};

type Penguin = {
  id: string;
  playerId: string;
  q: number;
  r: number;
};

type Player = {
  id: string;
  name: string;
  color: string;
  score: number;
  penguinsToPlace: number;
};

type Settings = {
  radius: number; // board radius (hexagon shape)
  players: number; // 2-4
  penguinsPerPlayer: number; // 2-4
  oneFishOnlyPlacement: boolean;
  seed: string;
};

// 6 axial directions
const DIRS: Array<[number, number]> = [
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, 0],
  [-1, 1],
  [0, 1],
];

// ---------- Utilities ----------

function key(q: number, r: number) {
  return `${q},${r}`;
}

function rand(seed: string) {
  // Simple xorshift-ish PRNG for deterministic boards
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  let x = h || 1;
  return () => {
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;
    return (x >>> 0) / 0xffffffff;
  };
}

function axialToPixel(q: number, r: number, size: number) {
  // pointy-topped axial layout
  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * (3 / 2) * r;
  return { x, y };
}

function withinRadius(q: number, r: number, radius: number) {
  const s = -q - r;
  return Math.max(Math.abs(q), Math.abs(r), Math.abs(s)) <= radius;
}

function makeDistribution(total: number) {
  // Roughly 1:2:3 fish distribution ~ (1x, 2x, 3x weights)
  // Classic game has 30x1, 20x2, 10x3 (for 60 tiles). We'll approximate per board size.
  const one = Math.max(1, Math.floor(total * 0.5));
  const two = Math.max(1, Math.floor(total * 0.33));
  let three = Math.max(1, total - one - two);
  if (one + two + three !== total) three = Math.max(1, total - one - two);
  const arr: Array<1 | 2 | 3> = [];
  arr.push(...Array(one).fill(1 as const));
  arr.push(...Array(two).fill(2 as const));
  arr.push(...Array(three).fill(3 as const));
  return arr;
}

// ---------- Game Component ----------

export default function HeyThatsMyFish() {
  const [settings, setSettings] = useState<Settings>({
    radius: 4,
    players: 2,
    penguinsPerPlayer: 3,
    oneFishOnlyPlacement: true,
    seed: "fishies",
  });

  const [tiles, setTiles] = useState<Map<string, Tile>>(new Map());
  const [players, setPlayers] = useState<Player[]>([]);
  const [penguins, setPenguins] = useState<Map<string, Penguin>>(new Map());
  const [phase, setPhase] = useState<"placing" | "playing" | "gameover">(
    "placing"
  );
  const [currentPlayer, setCurrentPlayer] = useState<string>("p1");
  const [selectedPenguin, setSelectedPenguin] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]); // simple undo

  // Init / Reset
  useEffect(() => {
    newGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function newGame(custom?: Partial<Settings>) {
    const s = { ...settings, ...(custom || {}) };
    setSettings(s);

    const t = generateBoard(s);
    setTiles(t);

    const plist: Player[] = makePlayers(s.players, s.penguinsPerPlayer);
    setPlayers(plist);

    setPenguins(new Map());
    setPhase("placing");
    setCurrentPlayer(plist[0].id);
    setSelectedPenguin(null);
    setHistory([]);
  }

  function generateBoard(s: Settings) {
    const g = rand(s.seed);
    const t = new Map<string, Tile>();
    const coords: Array<[number, number]> = [];

    for (let q = -s.radius; q <= s.radius; q++) {
      for (let r = -s.radius; r <= s.radius; r++) {
        if (withinRadius(q, r, s.radius)) coords.push([q, r]);
      }
    }

    const dist = makeDistribution(coords.length);
    // shuffle dist
    for (let i = dist.length - 1; i > 0; i--) {
      const j = Math.floor(g() * (i + 1));
      [dist[i], dist[j]] = [dist[j], dist[i]];
    }

    coords.forEach(([q, r], idx) => {
      const fish = dist[idx] as 1 | 2 | 3;
      const id = key(q, r);
      t.set(id, { id, q, r, fish, hole: false });
    });

    return t;
  }

  function makePlayers(count: number, pengs: number): Player[] {
    const palette = ["#ef4444", "#06b6d4", "#22c55e", "#a855f7"]; // red, cyan, green, violet
    return new Array(count).fill(0).map((_, i) => ({
      id: `p${i + 1}`,
      name: `Player ${i + 1}`,
      color: palette[i % palette.length],
      score: 0,
      penguinsToPlace: pengs,
    }));
  }

  // ---------- Game Logic ----------

  function getTile(q: number, r: number) {
    return tiles.get(key(q, r));
  }

  function isOccupied(t: Tile) {
    return Boolean(t.penguinId);
  }

  function lineClear(from: Tile, to: Tile) {
    // Ensure straight line and no holes/occupants in between
    const dq = to.q - from.q;
    const dr = to.r - from.r;
    const dirs = DIRS.find(([Q, R]) => {
      // vectors must be multiples of a dir
      const k = dq === 0 && Q === 0 ? (dr / R) : Q !== 0 ? dq / Q : dr / R;
      if (!isFinite(k)) return false;
      return from.q + Q * k === to.q && from.r + R * k === to.r;
    });
    if (!dirs) return false;

    const [Q, R] = dirs;
    let q = from.q + Q;
    let r = from.r + R;
    while (q !== to.q || r !== to.r) {
      const mid = getTile(q, r);
      if (!mid || mid.hole || mid.penguinId) return false;
      q += Q;
      r += R;
    }
    // destination must be empty & in-bounds & not a hole
    if (!to || to.hole || to.penguinId) return false;
    return true;
  }

  function legalMovesFor(p: Penguin): Tile[] {
    const t0 = getTile(p.q, p.r);
    if (!t0) return [];
    const out: Tile[] = [];
    for (const [Q, R] of DIRS) {
      let q = p.q + Q;
      let r = p.r + R;
      while (true) {
        const t = getTile(q, r);
        if (!t || t.hole || t.penguinId) break;
        out.push(t);
        q += Q;
        r += R;
      }
    }
    return out;
  }

  function playerById(id: string) {
    return players.find((p) => p.id === id)!;
  }

  function setPlayer(p: Player) {
    setPlayers((prev) => prev.map((x) => (x.id === p.id ? p : x)));
  }

  function placePenguin(t: Tile) {
    const p = playerById(currentPlayer);
    if (phase !== "placing" || p.penguinsToPlace <= 0) return;
    if (t.hole || t.penguinId) return;
    if (settings.oneFishOnlyPlacement && t.fish !== 1) return;

    const pid = `pg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const peng: Penguin = { id: pid, playerId: p.id, q: t.q, r: t.r };

    setHistory((h) => [...h, snapshot()]);

    setPenguins((map) => new Map(map.set(pid, peng)));
    setTiles((map) => new Map(map.set(t.id, { ...t, penguinId: pid })));

    const updated = { ...p, penguinsToPlace: p.penguinsToPlace - 1 };
    setPlayer(updated);

    // next player or transition to playing
    const next = nextPlayerId(p.id);
    const everyonePlaced = players.every(
      (pl) => (pl.id === p.id ? updated : pl).penguinsToPlace === 0
    );
    if (everyonePlaced) {
      setPhase("playing");
    }
    setCurrentPlayer(next);
  }

  function nextPlayerId(id: string) {
    const idx = players.findIndex((p) => p.id === id);
    return players[(idx + 1) % players.length].id;
  }

  function onTileClick(t: Tile) {
    if (phase === "placing") return placePenguin(t);

    // selecting a destination if penguin already selected
    if (phase === "playing" && selectedPenguin) {
      const peng = penguins.get(selectedPenguin);
      if (!peng) return setSelectedPenguin(null);
      const from = getTile(peng.q, peng.r)!;
      if (!lineClear(from, t)) return; // illegal
      movePenguin(peng, t);
      return;
    }
  }

  function onPenguinClick(peng: Penguin) {
    if (phase !== "playing") return;
    if (peng.playerId !== currentPlayer) return; // only move own penguins
    setSelectedPenguin((id) => (id === peng.id ? null : peng.id));
  }

  function movePenguin(peng: Penguin, dest: Tile) {
    const fromTile = getTile(peng.q, peng.r)!;
    if (!lineClear(fromTile, dest)) return;

    setHistory((h) => [...h, snapshot()]);

    // Collect fish from start tile; it becomes a hole
    const owner = playerById(peng.playerId);
    setPlayer({ ...owner, score: owner.score + fromTile.fish });

    // Update tiles: remove penguin from start (hole), place on dest
    setTiles((map) => {
      const m = new Map(map);
      m.set(fromTile.id, { ...fromTile, fish: 0, hole: true, penguinId: undefined });
      m.set(dest.id, { ...dest, penguinId: peng.id });
      return m;
    });

    // Update penguin coords
    setPenguins((map) => {
      const m = new Map(map);
      m.set(peng.id, { ...peng, q: dest.q, r: dest.r });
      return m;
    });

    // End of move: remove stuck penguins (claiming tile they stand on)
    sweepStuckPenguins();

    // Next turn or game over
    const next = nextPlayerId(currentPlayer);
    setSelectedPenguin(null);
    const cont = anyMovesLeft();
    if (!cont) {
      setPhase("gameover");
    } else {
      setCurrentPlayer(next);
    }
  }

  function sweepStuckPenguins() {
    setPenguins((map) => {
      const m = new Map(map);
      let changed = false;
      for (const peng of m.values()) {
        const moves = legalMovesFor(peng);
        if (moves.length === 0) {
          // Claim current tile and remove penguin
          const t = getTile(peng.q, peng.r);
          if (t && !t.hole) {
            const owner = playerById(peng.playerId);
            setPlayer({ ...owner, score: owner.score + t.fish });
            setTiles((tm) => new Map(tm.set(t.id, { ...t, fish: 0, hole: true, penguinId: undefined })));
          }
          m.delete(peng.id);
          changed = true;
        }
      }
      return changed ? m : map;
    });
  }

  function anyMovesLeft() {
    for (const p of penguins.values()) {
      if (legalMovesFor(p).length > 0) return true;
    }
    return false;
  }

  function snapshot() {
    return {
      tiles: Array.from(tiles.entries()),
      penguins: Array.from(penguins.entries()),
      players: JSON.parse(JSON.stringify(players)),
      phase,
      currentPlayer,
      selectedPenguin,
      settings: { ...settings },
    };
  }

  function undo() {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory((h) => h.slice(0, -1));
    setTiles(new Map(prev.tiles));
    setPenguins(new Map(prev.penguins));
    setPlayers(prev.players);
    setPhase(prev.phase);
    setCurrentPlayer(prev.currentPlayer);
    setSelectedPenguin(prev.selectedPenguin);
    setSettings(prev.settings);
  }

  // ---------- Rendering helpers ----------

  const size = 28; // px hex radius
  const coords = useMemo(() => Array.from(tiles.values()), [tiles]);
  const bounds = useMemo(() => {
    const pts = coords.map((t) => axialToPixel(t.q, t.r, size));
    const minX = Math.min(...pts.map((p) => p.x));
    const minY = Math.min(...pts.map((p) => p.y));
    const maxX = Math.max(...pts.map((p) => p.x));
    const maxY = Math.max(...pts.map((p) => p.y));
    return { minX, minY, maxX, maxY, w: maxX - minX + size * 2, h: maxY - minY + size * 2 };
  }, [coords]);

  function hexPoints(cx: number, cy: number, r: number) {
    const pts = [] as string[];
    for (let i = 0; i < 6; i++) {
      const angle = Math.PI / 180 * (60 * i - 30); // pointy top
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      pts.push(`${x},${y}`);
    }
    return pts.join(" ");
  }

  function tileFill(t: Tile) {
    if (t.hole) return "#0f172a"; // slate-900 holes
    // subtle fish-based tint
    return t.fish === 1 ? "#1e293b" : t.fish === 2 ? "#0b3b3b" : "#123524";
  }

  function tileStroke(t: Tile) {
    return t.hole ? "#0f172a" : "#0ea5e9";
  }

  function canPlaceHere(t: Tile) {
    if (phase !== "placing") return false;
    if (t.hole || t.penguinId) return false;
    if (settings.oneFishOnlyPlacement && t.fish !== 1) return false;
    return true;
  }

  const movableTargets = useMemo(() => {
    if (phase !== "playing" || !selectedPenguin) return new Set<string>();
    const p = penguins.get(selectedPenguin);
    if (!p) return new Set<string>();
    return new Set(legalMovesFor(p).map((t) => t.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, selectedPenguin, tiles, penguins]);

  // ---------- UI ----------

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 p-4 md:p-6 grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-4">
      <aside className="space-y-4">
        <Card className="bg-slate-900/70 backdrop-blur border-slate-800 rounded-2xl shadow">
          <CardContent className="p-4 space-y-3">
            <h1 className="text-2xl font-semibold">Hey, That’s My Fish!</h1>
            <p className="text-sm text-slate-300">Move a penguin in a straight line. You collect the <span className="font-semibold">start</span> tile. Holes block movement.</p>

            <div className="flex items-center gap-2">
              <Button size="sm" onClick={() => newGame()} className="rounded-2xl"><RefreshCw className="h-4 w-4 mr-2"/>New game</Button>
              <Button size="sm" variant="secondary" onClick={undo} disabled={history.length===0} className="rounded-2xl"><Undo2 className="h-4 w-4 mr-2"/>Undo</Button>
            </div>

            <Tabs defaultValue="play">
              <TabsList className="grid grid-cols-2 w-full bg-slate-800/60 rounded-2xl">
                <TabsTrigger value="play">Play</TabsTrigger>
                <TabsTrigger value="setup">Setup</TabsTrigger>
              </TabsList>
              <TabsContent value="play" className="mt-3 space-y-2">
                <div className="rounded-2xl bg-slate-800/40 p-3">
                  <div className="text-sm opacity-80 mb-1">Turn</div>
                  <div className="flex items-center gap-2">
                    {players.map((p) => (
                      <div key={p.id} className={`px-3 py-2 rounded-xl text-sm border ${currentPlayer===p.id ? "border-white" : "border-transparent"}`} style={{background:p.color+"22", color:p.color}}>
                        <div className="font-semibold" style={{color:p.color}}>{p.name}</div>
                        <div className="text-xs text-slate-300">Score: <span className="font-semibold text-white">{p.score}</span></div>
                        {phase === "placing" && (
                          <div className="text-xs text-slate-400">To place: {p.penguinsToPlace}</div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 text-xs text-slate-400">Phase: <span className="text-sky-300 font-medium">{phase}</span></div>
                </div>
              </TabsContent>
              <TabsContent value="setup" className="mt-3 space-y-4">
                <div className="space-y-3 rounded-2xl bg-slate-800/40 p-3">
                  <label className="text-sm">Players: {settings.players}</label>
                  <Slider value={[settings.players]} min={2} max={4} step={1} onValueChange={(v)=> setSettings((s)=> ({...s, players: v[0]}))} />
                  <label className="text-sm">Penguins per player: {settings.penguinsPerPlayer}</label>
                  <Slider value={[settings.penguinsPerPlayer]} min={2} max={4} step={1} onValueChange={(v)=> setSettings((s)=> ({...s, penguinsPerPlayer: v[0]}))} />
                  <label className="text-sm">Board radius: {settings.radius}</label>
                  <Slider value={[settings.radius]} min={3} max={6} step={1} onValueChange={(v)=> setSettings((s)=> ({...s, radius: v[0]}))} />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Placement on 1‑fish tiles only</div>
                      <div className="text-xs text-slate-400">Official rule toggle</div>
                    </div>
                    <Switch checked={settings.oneFishOnlyPlacement} onCheckedChange={(val)=> setSettings((s)=> ({...s, oneFishOnlyPlacement: val}))} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Seed" value={settings.seed} onChange={(e)=> setSettings((s)=> ({...s, seed: e.target.value}))} />
                    <Button size="sm" onClick={()=> newGame()} className="rounded-2xl">Apply</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {phase === "gameover" && (
              <div className="rounded-2xl bg-emerald-900/20 border border-emerald-700/30 p-3">
                <div className="text-emerald-300 font-semibold">Game over</div>
                <div className="text-sm mt-1">
                  {(() => {
                    const max = Math.max(...players.map((p) => p.score));
                    const winners = players.filter((p) => p.score === max);
                    if (winners.length > 1) return `Tie: ${winners.map((w)=>w.name).join(", ")}`;
                    return `${winners[0].name} wins!`;
                  })()}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </aside>

      {/* Board */}
      <div className="relative overflow-auto rounded-2xl bg-slate-900/70 border border-slate-800 shadow">
        <svg
          viewBox={`${bounds.minX - size} ${bounds.minY - size} ${bounds.w} ${bounds.h}`}
          className="w-full h-[80vh]"
        >
          {/* Tiles */}
          {coords.map((t) => {
            const { x, y } = axialToPixel(t.q, t.r, size);
            const pts = hexPoints(x, y, size * 0.98);
            const isTarget = movableTargets.has(t.id);
            const canPlace = canPlaceHere(t);
            const peng = t.penguinId ? penguins.get(t.penguinId) : undefined;
            const owner = peng ? playerById(peng.playerId) : undefined;

            return (
              <g key={t.id}>
                <motion.polygon
                  points={pts}
                  fill={tileFill(t)}
                  stroke={tileStroke(t)}
                  strokeWidth={t.hole ? 0 : 1.5}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => (t.hole ? undefined : onTileClick(t))}
                  style={{ cursor: canPlace || isTarget ? "pointer" : "default" }}
                />

                {/* Fish pips */}
                {!t.hole && (
                  <g>
                    {[...Array(t.fish)].map((_, i) => (
                      <circle key={i} cx={x - 8 + i * 8} cy={y + size * 0.35} r={2.8} fill="#38bdf8" />
                    ))}
                  </g>
                )}

                {/* Hover rings for candidates */}
                {(isTarget || canPlace) && !t.hole && (
                  <motion.circle cx={x} cy={y} r={size * 0.86} fill="none" stroke="#f59e0b" strokeDasharray="4 6" strokeWidth={2}
                    initial={{ opacity: 0 }} animate={{ opacity: 0.9 }} />
                )}

                {/* Penguins */}
                {t.penguinId && peng && owner && (
                  <g onClick={() => onPenguinClick(peng)} style={{ cursor: peng.playerId === currentPlayer && phase === "playing" ? "pointer" : "default" }}>
                    <motion.circle cx={x} cy={y - 2} r={size * 0.48} fill={owner.color} stroke="#0b1324" strokeWidth={2}
                      initial={{ scale: 0.95 }} animate={{ scale: selectedPenguin === peng.id ? 1.05 : 1 }} />
                    <circle cx={x - 7} cy={y - 8} r={3.5} fill="#0b1324" />
                    <circle cx={x + 7} cy={y - 8} r={3.5} fill="#0b1324" />
                    <rect x={x - 6} y={y - 3} width={12} height={6} rx={3} fill="#0b1324" />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Footer / Tips */}
      <div className="xl:col-span-2 text-xs text-slate-400 flex flex-wrap gap-4 justify-between">
        <div>
          <div className="font-medium text-slate-300">How to play</div>
          <div>Placement: take turns placing each penguin (by default on 1‑fish tiles). Then, on your turn: select your penguin and click a tile in a straight line. You collect the <em>start</em> tile’s fish and it becomes a hole. Penguins with no moves are removed and their tile is claimed.</div>
        </div>
        <div>
          <div className="font-medium text-slate-300">Tips</div>
          <ul className="list-disc pl-5">
            <li>Cut off big islands for yourself.</li>
            <li>Trapping an opponent’s penguin scores you its tile.</li>
            <li>High-fish tiles are great late-game landing spots.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
