package com.tweetapp.services;

import com.tweetapp.entities.tweet;
import com.tweetapp.repositories.tweetRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class tweetService {

    tweetRepository tweetRepo;

    public List<tweet> getALlTweets() {
        return tweetRepo.findAll();
    }

    public List<tweet> getAllTweetsByLoginId(String loginId){
        return tweetRepo.findByOwnerId(loginId);
    }

    public tweet updateTweet(tweet tweet){
        return tweetRepo.save(tweet);
    }

    public String deleteTweet(String loginId, String tweetId){
        tweetRepo.deleteById(tweetId);
        return "Tweet has been deleted";
    }
}
