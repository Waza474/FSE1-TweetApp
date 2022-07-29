package com.tweetapp.services;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class userService {

    @Autowired
    userRepository userRepository;

    public user registerUser(user newUser){
        return userRepository.save(newUser);
    }

    public List<user> getALlUsers(){
        return userRepository.findAll();
    }

    public user getUserByLoginId(String loginId){
        return userRepository.findUserByLoginId(loginId);
    }
}
