package com.connorsgames.lobby;

import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;

import com.connorsgames.game.core.Game;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class LobbyManager {

    private final Map<String, Lobby> lobbies = new ConcurrentHashMap<>();

    public Lobby createLobby() {
        String id = UUID.randomUUID().toString();
        Lobby lobby = new Lobby(id);
        lobbies.put(id, lobby);
        return lobby;
    }

    public Lobby getLobby(String id) {
        return lobbies.get(id);
    }

    public void deleteLobby(String id) {
        lobbies.remove(id);
    }

    public void handlePlayerLeave(String lobbyId, String playerId) {
        Lobby lobby = lobbies.get(lobbyId);
        lobby.removePlayer(playerId);

        if (lobby.isEmpty() || lobby.isFinished()) {
            deleteLobby(lobbyId);
        }
    }
    public void startGame(String lobbyId, String playerId, Game game) {
        Lobby lobby = lobbies.get(lobbyId);

        if (!lobby.isHost(playerId)) {
            throw new IllegalStateException("Only host can start game");
        }

        lobby.startGame(game);
    }
}

