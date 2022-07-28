package com.tweetapp.controllers;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import com.tweetapp.services.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/tweets")
public class userController {

    //@Autowired
    //userService userServ;

    @Autowired
    userRepository userRepo;

    @PostMapping("/register")
    public user registerUser(@RequestBody user newUser){
        return userRepo.save(newUser);
    }

    @GetMapping("/users/all")
    public List<user> getALlUsers() {
        return userRepo.findAll();
    }

    @GetMapping("/user/search/{userId}")
    public user getUserByLoginId(@PathVariable String loginId){
        return userRepo.findUserByLoginId(loginId);
    }


}
