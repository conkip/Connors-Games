package com.connorsgames.lobby;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.connorsgames.game.core.Game;

import jakarta.websocket.Session;

public class Lobby {

    private final String lobbyId;
    private final String hostPlayerId;
    private final Map<String, Session> players = new ConcurrentHashMap<>();
    private Game game;

    public Lobby(String lobbyId, String hostPlayerId) {
        this.lobbyId = lobbyId;
        this.hostPlayerId = hostPlayerId;
    }

    public boolean isHost(String playerId) {
        return hostPlayerId.equals(playerId);
    }

    public void addPlayer(String playerId, Session session) {
        players.put(playerId, session);
    }

    public void removePlayer(String playerId) {
        players.remove(playerId);
        if (isHost(playerId)) {
            promoteNewHost();
        }
    }

    public void startGame(Game game) {
        this.game = game;
        game.start();
    }

    public Collection<Session> sessions() {
        return players.values();
    }

    public String getLobbyId() {
        return lobbyId;
    }
    public void promoteNewHost() {
        if (!players.isEmpty()) {
            hostPlayerId = players.keySet().iterator().next();
        }
}
