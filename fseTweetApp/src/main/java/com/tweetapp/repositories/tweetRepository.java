package com.tweetapp.repositories;

import com.tweetapp.entities.tweet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface tweetRepository extends MongoRepository<tweet, String> {

    tweet getTweetById(String id);

    List<tweet> findByOwnerId(String ownerId);

    tweet findByOwnerIdAndId(String ownerId, String id);

}
