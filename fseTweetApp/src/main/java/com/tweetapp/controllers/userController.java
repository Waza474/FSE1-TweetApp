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

    @Autowired
    userService userServ;

    //@Autowired
    //userRepository userRepo;

    @PostMapping("/register")
    public user registerUser(@RequestBody user newUser){
        return userServ.registerUser(newUser);
    }

    @GetMapping("/users/all")
    public List<user> getALlUsers() {
        return userServ.getALlUsers();
    }

    // This needs to change to chose all users as a search.
    @GetMapping("/user/search/{loginId}")
    public user getUserByLoginId(@PathVariable String loginId){
        return userServ.getUserByLoginId(loginId);
    }



}
