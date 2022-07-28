package com.tweetapp.repositories;

import com.tweetapp.entities.tweet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface tweetRepository extends MongoRepository<tweet, String> {

    tweet getTweetById(String id);

}
