package com.tweetapp.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public List<tweet> getReplies() {
        return replies;
    }

    public void setReplies(List<tweet> replies) {
        this.replies = replies;
    }

    public void addReply(tweet reply) {
        replies.add(reply);
    }

    public String getOwner() {
        return ownerId;
    }

    public void setOwner(String ownerId) {
        this.ownerId = ownerId;
    }
}
