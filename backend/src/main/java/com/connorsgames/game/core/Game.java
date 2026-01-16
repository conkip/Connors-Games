package com.connorsgames.game.core;

public interface Game {

    void start();

    void applyMove(String playerId, GameMove move);

    GameState getState();

    boolean isPlayersTurn(String playerId);
}
