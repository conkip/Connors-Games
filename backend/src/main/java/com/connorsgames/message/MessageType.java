package com.connorsgames.message;

public enum MessageType {
    CREATE_LOBBY,
    JOIN_LOBBY,
    LEAVE_LOBBY,
    START_GAME,
    MAKE_MOVE,

    LOBBY_UPDATE,
    GAME_STARTED,
    GAME_STATE_UPDATE,

    ERROR
}