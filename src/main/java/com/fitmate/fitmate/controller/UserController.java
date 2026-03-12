package com.fitmate.fitmate.controller;

import com.fitmate.fitmate.dto.UserProfileRequest;
import com.fitmate.fitmate.model.User;
import com.fitmate.fitmate.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController
{
    @Autowired
    private UserService userService;

    @PostMapping("/profile")
    public User updateProfile(Authentication authentication,
                              @RequestBody UserProfileRequest request)
    {
        String email = authentication.getName();

        return userService.updateProfile(email, request);
    }

    @GetMapping("/profile")
    public User getProfile(Authentication authentication)
    {
        String email = authentication.getName();

        return userService.getProfile(email);
    }
}
