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

    // Regist a new User into the Database
    @PostMapping("/register")
    public user registerUser(@RequestBody user newUser){
        return userServ.registerUser(newUser);
    }

    // Get all the users in the Database
    @GetMapping("/users/all")
    public List<user> getALlUsers() {
        return userServ.getALlUsers();
    }

    // Gets users like the given username/loginId
    @GetMapping("/user/search/{loginId}")
    public List<user> getUsersByLoginId(@PathVariable String loginId){
        return userServ.getUsersByLoginId(loginId);
    }

    // Breif only has a GET for password, currently will just return passwword for given user
    @GetMapping("/{loginId}/forgot")
    public String forgotPassword(@PathVariable String loginId){
        return userServ.forgotPassword(loginId);
    }

    // Login, is a get, not sure what it does yet
    @GetMapping("login")
    public String login(){
        return "You have Logged In";
    }

}
