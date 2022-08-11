package com.tweetapp.kafka;

/*

spring.kafka.consumer,.group-id=group_id
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.consumer.bootstrap-servers=localhost:9092
spring.kafka.consumer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.consumer.value-serializer=org.apache.kafka.common.serialization.StringSerializer


 */

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.util.Arrays;
import java.util.Properties;

public class TweetConsumer {

    TweetConsumer(){
        Properties props = new Properties();
        props.setProperty("bootstrap.servers" , "localhost:9092");
        props.setProperty("key-serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.setProperty("value-serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.setProperty("group.id", "group.id");
        props.setProperty("auto.offset.reset", "earliest");

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
        consumer.subscribe(Arrays.asList("NewTweetTopic"));

        ConsumerRecords<String, String> records = consumer.poll(100);

        for(ConsumerRecord<String, String> record : records) {
            String key = record.key();
            String value = record.value();
            System.out.println("TweetId: " + key);
            System.out.println("Tweet Content: " + value);
        }

        consumer.close();
    }
}
