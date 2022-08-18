package com.tweetapp.controllers;

import com.tweetapp.entities.tweet;
import com.tweetapp.entities.user;
import com.tweetapp.repositories.tweetRepository;
import com.tweetapp.services.tweetService;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1.0/tweets")
@Log4j2
@CrossOrigin(origins = "http://localhost:3000")
public class tweetController {

    @Autowired
    tweetService tweetService;

    // Get all the tweets that exist in the database
    @GetMapping("/all")
    public List<tweet> getALlTweets() {
        log.info("Getting all Tweets...");
        return tweetService.getALlTweets();
    }

    // Get all the tweets by a certain user
    @GetMapping("/{loginId}")
    public List<tweet> getAllTweetsByLoginId(@PathVariable String loginId){
        log.debug("Getting all tweets like given LoginId/Username...");
        return tweetService.getAllTweetsByLoginId(loginId);
    }

    // Create a new tweet
    @PostMapping("/{loginId}/add")
    public tweet postNewTweet(@PathVariable String loginId, @RequestBody tweet newTweet){
        log.debug("Posting a new Tweet...");
        return tweetService.postNewTweet(loginId, newTweet);
    }

    // Update a certain tweet
    // Possibly not impleted correctly or move to kafka
    @PutMapping("/{loginId}/update/{tweetId}")
    public tweet updateTweet(@PathVariable String loginId, @PathVariable String tweetId, @RequestBody tweet twe){
        log.debug("Updating Tweet with id: {} ...", tweetId);
        return tweetService.updateTweet(twe);
    }

    // Delete a certain tweet.
    @DeleteMapping("/{loginId}/delete/{tweetId}")
    public String deleteTweet(@PathVariable String loginId, @PathVariable String tweetId){
        log.debug("Deleting tweet with id: {} ...", tweetId);
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
