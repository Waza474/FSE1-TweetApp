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

    // Get all the tweets that exist in the database
    @GetMapping("/all")
    public List<tweet> getALlTweets() {
        return tweetService.getALlTweets();
    }

    // Get all the tweets by a certain user
    @GetMapping("/{loginId}")
    public List<tweet> getAllTweetsByLoginId(@PathVariable String loginId){
        return tweetService.getAllTweetsByLoginId(loginId);
    }

    // Create a new tweet
    @PostMapping("/{loginId}/add")
    public tweet postNewTweet(@PathVariable String loginId, @RequestBody tweet newTweet){
        return tweetService.postNewTweet(loginId, newTweet);
    }

    // Update a certain tweet
    // Possibly not impleted correctly or move to kafka
    @PutMapping("/{loginId}/update/{tweetId}")
    public tweet updateTweet(@PathVariable String loginId, @PathVariable String tweetId, @RequestBody tweet twe){
        return tweetService.updateTweet(twe);
    }

    // Delete a certain tweet.
    @DeleteMapping("/{loginId}/delete/{tweetId}")
    public String deleteTweet(@PathVariable String loginId, @PathVariable String tweetId){
        return tweetService.deleteTweet(loginId, tweetId);
    }

    // Like a certain tweet
    @PutMapping("/{loginId}/like/{tweetId}")
    public tweet updateTweet(@PathVariable String loginId, @PathVariable String tweetId){
        return tweetService.likeTweet(loginId, tweetId);
    }

    // create a tweet to reply to another tweet.
    @PostMapping("/{loginId}/reply/{tweetId}")
    public tweet replyTweet(@PathVariable String loginId, @PathVariable String tweetId, @RequestBody tweet twe){
        return tweetService.replyTwe(loginId, tweetId, twe);
    }
}
