package com.tweetapp.entities;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document
@Getter
@Setter
public class tweet {

    @Id
    private String id;

    @NonNull
    private String content;

    @NonNull
    private String tag;

    private int likes;

    private List<tweet> replies;

    @NonNull
    private String ownerId;

    private LocalDateTime timeCreated;



    public tweet(String content, String tag, String ownerId) {
        this.content = content;
        this.tag = tag;
        this.ownerId = ownerId;
        likes = 0;
        timeCreated = LocalDateTime.now();
    }

    public void addReply(tweet reply) {
        replies.add(reply);
    }
}
