package com.bekzatsky.crud.controllers;

import com.bekzatsky.crud.models.User;
import com.bekzatsky.crud.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUser(@PathVariable Long id) {
        return userRepository.findById(id);
    }

    @DeleteMapping("/user/{id}")
    public boolean deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return true;
    }

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("/user")
    public User updateUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}
