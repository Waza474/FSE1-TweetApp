package com.tweetapp.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document
@Getter
@Setter
public class tweet {

    @Id
    private String id;

    @NonNull
    private String content;

    private String tag;

    private int likes;

    private ArrayList<tweet> replies;

    @NonNull
    private String ownerId;

    private LocalDateTime timeCreated;

    private String type;


    public tweet(@NonNull String content, String tag, @NonNull String ownerId) {
        this.content = content;
        this.tag = tag;
        this.ownerId = ownerId;
        likes = 0;
        timeCreated = LocalDateTime.now();
        type = "root";
    }

    public void addReply(tweet reply) {
        if(replies == null){
            replies = new ArrayList<>();
        }
        replies.add(reply);
    }
}
