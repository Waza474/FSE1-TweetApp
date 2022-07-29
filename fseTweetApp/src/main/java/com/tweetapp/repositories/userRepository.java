package com.tweetapp.repositories;

import com.tweetapp.entities.user;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface userRepository extends MongoRepository<user, String> {
    user findUserByLoginId(String loginId);

    List<user> findByLoginIdIsLike(String loginId);
}
