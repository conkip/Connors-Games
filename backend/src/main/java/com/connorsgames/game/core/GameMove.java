package com.connorsgames.game.core;

import java.util.List;
import java.util.Map;

import javax.smartcardio.Card;

public class GameMove {
    private String currentPlayerId;
    private Map<String, List<Card>> hands;
    private List<Card> discardPile;
}
