package com.tweetapp.services;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@Log4j2
public class userService {

    @Autowired
    userRepository userRepository;

    /**
     * Add a new user to the database
     * @param newUser
     * @return
     */
    public user registerUser(user newUser){
        log.debug("New user Saved into Repository.");
        return userRepository.save(newUser);
    }

    /**
     * Get all the users in the database
     * @return
     */
    public List<user> getALlUsers(){
        List<user> out = userRepository.findAll();
        log.debug("{} Users found.", out.size());
        return out;
    }

    /**
     * Get all the users that are similar to a given loginId/username
     * @param loginId
     * @return
     */
    public List<user> getUsersByLoginId(String loginId){
        List<user> out = userRepository.findByLoginIdIsLike(loginId);
        log.debug("{} Users found with Username containing {} .", out.size(),loginId);
        return out;
    }

    /**
     * Simply returns the password for a given user.
     *
     * !! No longer used as functionality changed
     *
     * @param loginId
     * @return
     */
    public String forgotPassword(String loginId) {
        user use = userRepository.findUserByLoginId(loginId);
        log.debug("Password Returned for User: {}", loginId);
        return use.getPassword();
    }

    /**
     * Will change the given users password
     * @param loginId
     * @param newPassword
     * @return
     */
    public user changePassword(String loginId, String newPassword) {
        user use = userRepository.findUserByLoginId(loginId);
        // User will be logged in to complete this request, so no check neccesary
        use.setPassword(newPassword);
        log.debug("Password changed for user: {}", loginId);
        return userRepository.save(use);
    }

    /**
     * Returns a boolean if the login details match an existing user.
     * The front shall then request user details and this is an authentication call.
     * @param loginId
     * @param password
     * @return
     */
    public boolean login(String loginId, String password) {
        log.debug("Finding user with loginId: {}", loginId);
        user use = userRepository.findUserByLoginId(loginId);
        if (use == null){
            log.debug("No User Found");
            return false;
        }
        log.debug("Checking Password match");
        return use.getPassword().equals(password);
    }

    public user loginSuccess(String username){
        return userRepository.findUserByLoginId(username);
    }
}
