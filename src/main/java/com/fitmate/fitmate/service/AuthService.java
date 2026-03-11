package com.fitmate.fitmate.service;

import com.fitmate.fitmate.model.User;
import com.fitmate.fitmate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService
{
    @Autowired
    private UserRepository userRepository;

    public User signup(User user)
    {
        return userRepository.save(user);
    }
}
