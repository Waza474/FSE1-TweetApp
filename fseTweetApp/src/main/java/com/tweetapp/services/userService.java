package com.tweetapp.services;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    userRepository userRepository;

    public user registerUser(user newUser){
        return userRepository.save(newUser);
    }
}
