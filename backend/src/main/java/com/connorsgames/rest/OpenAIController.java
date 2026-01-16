package com.connorsgames.rest;


import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/ai")
@Consumes(MediaType.TEXT_PLAIN)
@Produces(MediaType.APPLICATION_JSON)
public class OpenAIController {

    @Inject
    OpenAIService openAIService;

    @POST
    @Path("/chat")
    public String chat(String prompt) throws Exception {
        return openAIService.ask(prompt);
    }
}

