package com.tweetapp.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Getter
@Setter
public class tweet {

    @Id
    private String id;

    private String content;

    private String tag;

    private int likes;

    private List<tweet> replies;

    private String ownerId;

    public tweet(String content, String tag, String ownerId) {
        this.content = content;
        this.tag = tag;
        this.ownerId = ownerId;
        likes = 0;
    }

    public void addReply(tweet reply) {
        replies.add(reply);
    }
}
