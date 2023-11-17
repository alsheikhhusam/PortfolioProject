package com.example.portfolioproject.controllers;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("home")
public class PortfolioController {
    String message = "Hello World!";

    @GetMapping
    public ResponseEntity<?> getWelcome() {
        log.info("-> GetWelcome()");
        return ResponseEntity.ok("Not so welcome");
    }

    @GetMapping(path = "message")
    public ResponseEntity<?> getMessage() {
        log.info("-> GetMessage()");
        return ResponseEntity.ok(message);
    }
}
