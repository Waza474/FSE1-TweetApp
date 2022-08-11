package com.tweetapp.controllers;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import com.tweetapp.services.userService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/tweets")
@Log4j2
@CrossOrigin(origins = "https://localhost:3000")
public class userController {

    @Autowired
    userService userServ;

    // Regist a new User into the Database
    @PostMapping("/register")
    public user registerUser(@RequestBody user newUser){
        log.debug("Registering new User..");
        return userServ.registerUser(newUser);
    }

    // Get all the users in the Database
    @GetMapping("/users/all")
    public List<user> getALlUsers() {
        log.debug("Getting all Users...");
        return userServ.getALlUsers();
    }

    // Gets users like the given username/loginId
    @GetMapping("/user/search/{loginId}")
    public List<user> getUsersByLoginId(@PathVariable String loginId){
        log.debug("Getting all Users by LoginId/Username...");
        return userServ.getUsersByLoginId(loginId);
    }

    // Breif only has a GET for password, currently will just return passwword for given user
    //@GetMapping("/{loginId}/forgot")
    public String forgotPassword(@PathVariable String loginId){
        log.debug("Returning forgotten password...");
        return userServ.forgotPassword(loginId);
    }

    // Correct Implementation of Change Password
    @PutMapping("/{loginId}/forgot")
    public user changePassword(@PathVariable String loginId, @RequestBody String newPassword){
        log.debug("Changing users password...");
        return userServ.changePassword(loginId, newPassword);
    }

    // Login, is a get, not sure what it does yet
    @GetMapping("/login")
    public String login(){
        return "You have Logged In";
    }

}
