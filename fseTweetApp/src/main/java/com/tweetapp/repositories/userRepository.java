package com.tweetapp.repositories;

import com.tweetapp.entities.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends MongoRepository<user, String> {
    user findUserByLoginId(String loginId);
}
