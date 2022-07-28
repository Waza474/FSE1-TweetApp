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

    public tweet(String content, String tag) {
        this.content = content;
        this.tag = tag;
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
}
