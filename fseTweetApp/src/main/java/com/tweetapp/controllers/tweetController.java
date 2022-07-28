package com.tweetapp.controllers;

import com.tweetapp.entities.tweet;
import com.tweetapp.entities.user;
import com.tweetapp.repositories.tweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/tweets")
public class tweetController {

    @Autowired
    tweetRepository tweetRepo;

    @GetMapping("/all")
    public List<tweet> getALlTweets() {
        return tweetRepo.findAll();
    }

    // This needs to be return all with loginId
    @GetMapping("/{loginId}")
    public List<tweet> getAllTweetsByLoginId(@PathVariable String loginId){
        return tweetRepo.findAll();
    }

    @PutMapping("/{loginId}/update/{tweetId}")
    public tweet updateTweet(@PathVariable String loginId, @PathVariable String tweetId, @RequestBody tweet tweet){
        return tweetRepo.save(tweet);
    }

    @DeleteMapping("/{loginId}/delete/{tweetId}")
    public void deleteTweet(@PathVariable String loginId, @PathVariable String tweetId){
        tweetRepo.deleteById(tweetId);
    }
}
