package com.tweetapp.controllers;

import com.tweetapp.entities.tweet;
import com.tweetapp.entities.user;
import com.tweetapp.repositories.tweetRepository;
import com.tweetapp.services.tweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/tweets")
public class tweetController {

    @Autowired
    tweetService tweetService;

    @GetMapping("/all")
    public List<tweet> getALlTweets() {
        return tweetService.getALlTweets();
    }

    @GetMapping("/{loginId}")
    public List<tweet> getAllTweetsByLoginId(@PathVariable String loginId){
        return tweetService.getAllTweetsByLoginId(loginId);
    }

    // Possibly not impleted correctly or move to kafka
    @PutMapping("/{loginId}/update/{tweetId}")
    public tweet updateTweet(@PathVariable String loginId, @PathVariable String tweetId, @RequestBody tweet tweet){
        return tweetService.updateTweet(tweet);
    }

    @DeleteMapping("/{loginId}/delete/{tweetId}")
    public String deleteTweet(@PathVariable String loginId, @PathVariable String tweetId){
        return tweetService.deleteTweet(loginId, tweetId);
    }
}
