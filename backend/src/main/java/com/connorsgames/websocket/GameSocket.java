package com.connorsgames.websocket;

import java.util.HashSet;
import java.util.Set;
import java.util.logging.Logger;

import com.connorsgames.lobby.Lobby;
import com.connorsgames.message.GameMessage;

import jakarta.websocket.CloseReason;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint(value ="/pixies",
                decoders= {GameDecoder.class},
                encoders = {GameEncoder.class})
public class GameSocket {
    private static Logger logger = Logger.getLogger(GameSocket.class.getName());
    private static Set<Session> sessions = new HashSet<>();
    
    @OnOpen
    public void onOpen(Session session) {
        logger.info("Server connected to session: " + session.getId());
        sessions.add(session);
    }

    @OnMessage
    public void onMessage(GameMessage msg, Session session) {
        logger.info("Server received message \""
                    + msg + "\" " + "from session: " + session.getId());

        switch (msg.type) {
            case CREATE_LOBBY -> {
                Lobby lobby = lobbyManager.createLobby();
                lobby.addPlayer(msg.playerId, session);
                send(session, new LobbyCreated(lobby));
            }

            case MAKE_MOVE -> {
                Lobby lobby = lobbyManager.getLobby(msg.lobbyId);
                lobby.getGame().applyMove(msg.playerId, msg.move);
                broadcast(lobby, new GameStateUpdate(lobby.getGame().getState()));
            }
        }
    }

    @OnClose
    public void onClose(Session session, CloseReason closeReason) {
        logger.info("Session " + session.getId()
                    + " was closed with reason " + closeReason.getCloseCode());
        sessions.remove(session);
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        logger.info("Websocket error for " + session.getId() + " " + throwable.getMessage());
    }
}
