package com.fitmate.fitmate.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProfileController {

    @GetMapping("/profile")
    public String profile(Authentication authentication) {

        String email = authentication.getName();

        return "Logged in user: " + email;
    }
}