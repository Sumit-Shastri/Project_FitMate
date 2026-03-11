package com.fitmate.fitmate.controller;

import com.fitmate.fitmate.model.User;
import com.fitmate.fitmate.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController
{
    @Autowired
    private AuthService authService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user)
    {
        return authService.signup(user);
    }
}
