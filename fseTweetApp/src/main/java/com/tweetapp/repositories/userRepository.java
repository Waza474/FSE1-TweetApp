package com.tweetapp.repositories;

import com.tweetapp.entities.user;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface userRepository extends MongoRepository<user, String> {
}
