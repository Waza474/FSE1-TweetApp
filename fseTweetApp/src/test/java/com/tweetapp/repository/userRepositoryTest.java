package com.tweetapp.repository;

import com.tweetapp.entities.user;
import com.tweetapp.repositories.userRepository;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class userRepositoryTest {

    @Autowired
    userRepository userRepo;

    //@Test
    public void ifNewUserSaved_thenSuccess(){
        user newUser = new user("FTest" , "LTest", "test@test.com", "TestAcc", "pass", "001");
        int previousSize  = userRepo.findAll().size();
        userRepo.save(newUser);
        assertEquals(previousSize + 1, userRepo.findAll().size());
    }


}
