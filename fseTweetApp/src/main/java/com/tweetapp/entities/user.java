package com.tweetapp.entities;

import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Document
@Getter
@Setter
public class user {

    @Id
    private String id;

    private String firstName;

    private String lastName;

    @NonNull
    @Indexed(unique = true)
    private String email;

    @NonNull
    @Indexed(unique = true)
    private String loginId;

    @NonNull
    private String password;

    private String contactNumber;

    public user(String firstName, String lastName, @NonNull String email, @NonNull String loginId, @NonNull String password, String contactNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.loginId = loginId;
        this.password = password;
        this.contactNumber = contactNumber;
    }


}
