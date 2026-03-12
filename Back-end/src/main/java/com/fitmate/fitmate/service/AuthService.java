package com.fitmate.fitmate.service;

import com.fitmate.fitmate.dto.LoginRequest;
import com.fitmate.fitmate.model.User;
import com.fitmate.fitmate.repository.UserRepository;
import com.fitmate.fitmate.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // SIGNUP LOGIC
    public User signup(User user)
    {
        // encrypt password
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    // LOGIN LOGIC
    public String login(LoginRequest request)
    {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if(userOptional.isEmpty())
        {
            return "User not found";
        }

        User user = userOptional.get();

        if(passwordEncoder.matches(request.getPassword(), user.getPassword()))
        {
            String token;
            token = jwtUtil.generateToken(user.getEmail());
            return token;
        }

        else
        {
            return "Invalid password";
        }
    }
}
