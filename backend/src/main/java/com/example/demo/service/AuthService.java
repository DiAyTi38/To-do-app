package com.example.demo.service;

import com.example.demo.dto.AuthRequest;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;

    @Autowired
    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(AuthRequest request) {
        if (request.getUsername() == null || request.getEmail() == null) {
            throw new RuntimeException("Username and email are required!");
        }
        Optional<User> existingUser = userRepository.findByUsernameOrEmail(request.getUsername(), request.getEmail());
        if (existingUser.isPresent()) {
            throw new RuntimeException("Username or email already exists!");
        }

        // For a simple prototype, we save the password as plain text. 
        // In a real app, ALWAYS hash the password using BCrypt or similar!
        User newUser = new User(request.getUsername(), request.getEmail(), request.getPassword());
        return userRepository.save(newUser);
    }

    public User login(AuthRequest request) {
        String identifier = request.getUsername() != null ? request.getUsername() : request.getEmail();
        Optional<User> userOpt = userRepository.findByUsernameOrEmail(identifier, identifier);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found!");
        }

        User user = userOpt.get();
        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password!");
        }

        return user;
    }
}
