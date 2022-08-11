package com.tweetapp.kafka;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

public class TweetProducer {


    TweetProducer(String key, String value){
        Properties props = new Properties();
        props.setProperty("bootstrap.servers" , "localhost:9092");
        props.setProperty("key-serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.setProperty("value-serializer", "org.apache.kafka.common.serialization.StringSerializer");

        Producer<String, String> producer = new KafkaProducer<>(props);
        ProducerRecord<String, String> record = new ProducerRecord<>("NewTweetTopic", key, value);

        try {
            producer.send(record);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        finally {
            producer.close();
        }


    }
}
