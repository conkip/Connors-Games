package com.connorsgames.game.pixies;

import java.util.List;
import java.util.Map;

import javax.smartcardio.Card;

public class PixiesState {
    private String currentPlayerId;
    private Map<String, List<Card>> hands;
    private List<Card> discardPile;
}
