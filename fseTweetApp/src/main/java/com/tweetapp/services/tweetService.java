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

    /**
     * Get all of the tweets that exist in the database
     * @return
     */
    public List<tweet> getALlTweets() {
        return tweetRepo.findAll();
    }

    /**
     * Get all the tweets by a given ownerId
     * @param loginId : the ownerId of the tweet
     * @return
     */
    public List<tweet> getAllTweetsByLoginId(String loginId){
        return tweetRepo.findByOwnerId(loginId);
    }

    /**
     * update a tweet
     * @param tweet
     * @return
     */
    public tweet updateTweet(tweet tweet){
        return tweetRepo.save(tweet);
    }

    /**
     * Delete a tweet
     * @param loginId : not used by required by specification
     * @param tweetId
     * @return
     */
    public String deleteTweet(String loginId, String tweetId){
        tweetRepo.deleteById(tweetId);
        return "Tweet has been deleted";
    }

    /**
     * like a tweet
     * @param loginId
     * @param tweetId
     * @return returns what was liked
     */
    public tweet likeTweet(String loginId, String tweetId){
        tweet twe = tweetRepo.findByOwnerIdAndId(loginId, tweetId);
        twe.setLikes(twe.getLikes() + 1);
        return tweetRepo.save(twe);
    }

    /**
     * Attach/Reply to a tweet
     * @param loginId
     * @param tweetId : Ids used to find the original tweet
     * @param twe : the tweet to attach (the reply)
     * @return Returns the master tweet as the reply has been attached
     */
    public tweet replyTwe(String loginId, String tweetId, tweet twe) {
        tweet main = tweetRepo.findByOwnerIdAndId(loginId, tweetId);
        tweet saved = tweetRepo.save(twe);
        main.addReply(twe);
        return main;
    }

    /**
     * Post a new tweet ensuring the ownerId is set
     * @param loginId : the ownerId
     * @param newTweet
     * @return
     */
    public tweet postNewTweet(String loginId, tweet newTweet) {
        newTweet.setOwner(loginId);
        return tweetRepo.save(newTweet);
    }
}
