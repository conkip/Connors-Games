package com.connorsgames.rest;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import org.eclipse.microprofile.config.inject.ConfigProperty;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@ApplicationScoped
public class OpenAIService {

    private static final String OPENAI_URL = "https://api.openai.com/v1/responses";

    private final HttpClient httpClient = HttpClient.newHttpClient();

    @Inject
    @ConfigProperty(name = "OPENAI_API_KEY")
    String apiKey;

    public String ask(String userPrompt) throws Exception {

        String requestBody = """
        {
          "model": "gpt-4.1-mini",
          "input": "%s"
        }
        """.formatted(escapeJson(userPrompt));

        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(OPENAI_URL))
                .header("Authorization", "Bearer " + apiKey)
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

        HttpResponse<String> response =
                httpClient.send(request, HttpResponse.BodyHandlers.ofString());

        return response.body();
    }

    private String escapeJson(String text) {
        return text.replace("\\", "\\\\")
                   .replace("\"", "\\\"")
                   .replace("\n", "\\n");
    }
}
