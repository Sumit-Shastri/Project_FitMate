package com.fitmate.fitmate.service;

import com.fitmate.fitmate.dto.UserProfileRequest;
import com.fitmate.fitmate.model.User;
import com.fitmate.fitmate.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService
{
    @Autowired
    private UserRepository userRepository;

    public User updateProfile(String email, UserProfileRequest request)
    {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if(userOptional.isEmpty())
        {
            throw new RuntimeException("User not found");
        }

        User user = userOptional.get();

        user.setAge(request.getAge());
        user.setHeight(request.getHeight());
        user.setWeight(request.getWeight());
        user.setGoal(request.getGoal());

        return userRepository.save(user);
    }

    public User getProfile(String email)
    {
        Optional<User> userOptional = userRepository.findByEmail(email);

        if(userOptional.isEmpty())
        {
            throw new RuntimeException("User not found");
        }

        return userOptional.get();
    }

}
