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

    /**
     * Add a new user to the database
     * @param newUser
     * @return
     */
    public user registerUser(user newUser){
        return userRepository.save(newUser);
    }

    /**
     * Get all the users in the database
     * @return
     */
    public List<user> getALlUsers(){
        return userRepository.findAll();
    }

    /**
     * Get all the users that are similar to a given loginId/username
     * @param loginId
     * @return
     */
    public List<user> getUsersByLoginId(String loginId){
        return userRepository.findByLoginIdIsLike(loginId);
    }

    /**
     * Simply returns the password for a given user.
     * @param loginId
     * @return
     */
    public String forgotPassword(String loginId) {
        user use = userRepository.findUserByLoginId(loginId);
        return use.getPassword();
    }
}
