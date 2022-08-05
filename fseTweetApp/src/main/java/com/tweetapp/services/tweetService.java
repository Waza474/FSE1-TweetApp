package com.tweetapp.services;

import com.tweetapp.entities.tweet;
import com.tweetapp.repositories.tweetRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@Log4j2
public class tweetService {

    tweetRepository tweetRepo;

    /**
     * Get all of the tweets that exist in the database
     * @return
     */
    public List<tweet> getALlTweets() {
        List<tweet> out = tweetRepo.findAll();
        log.debug("{} Tweets found.", out.size());
        return out;
    }

    /**
     * Get all the tweets by a given ownerId
     * @param loginId : the ownerId of the tweet
     * @return
     */
    public List<tweet> getAllTweetsByLoginId(String loginId){
        List<tweet> out = tweetRepo.findByOwnerId(loginId);
        log.debug("{} Tweets found by OwnerId: {}", out.size(),loginId);
        return out;
    }

    /**
     * update a tweet
     * @param tweet
     * @return
     */
    public tweet updateTweet(tweet tweet){
        log.debug("Tweet with id: {} Updated", tweet.getId());
        return tweetRepo.save(tweet);
    }

    /**
     * Delete a tweet
     * @param loginId : not used by required by specification
     * @param tweetId
     * @return
     */
    public String deleteTweet(String loginId, String tweetId){

        tweet tweet = tweetRepo.findByOwnerIdAndId(loginId, tweetId);
        if(tweet == null){
           log.warn("No Tweet found by {} with id: {}", loginId, tweetId);
           return "No Tweet Found to delete";
        }

        log.debug("Tweet with id: {} has been deleted", tweetId);

        // Deleting replies first
        List<tweet> replies = tweet.getReplies();
        for(tweet t : replies){
            tweetRepo.delete(t);
        }

        // Delete Master Tweet
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
        tweet twe = tweetRepo.getTweetById(tweetId);
        if(twe == null){
            log.warn("Trying to like Tweet that does not exist. id: ", tweetId);
            return null;
        }
        int a = twe.getLikes();
        twe.setLikes(twe.getLikes() + 1);
        log.debug("Tweet with id: {} had like increased from {} to {}", tweetId, a,twe.getLikes());
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
        tweetRepo.save(main);
        log.debug("Reply Attached to Tweet");
        return main;
    }

    /**
     * Post a new tweet ensuring the ownerId is set
     * @param loginId : the ownerId
     * @param newTweet
     * @return
     */
    public tweet postNewTweet(String loginId, tweet newTweet) {
        newTweet.setOwnerId(loginId);
        log.debug("New Tweet Posted, and OwnerId Ensured Added");
        return tweetRepo.save(newTweet);
    }
}
