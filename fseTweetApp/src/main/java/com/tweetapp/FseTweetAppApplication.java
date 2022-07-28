package com.tweetapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories("com.tweetapp.repositories")
@ComponentScan
public class FseTweetAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FseTweetAppApplication.class, args);
	}

}
