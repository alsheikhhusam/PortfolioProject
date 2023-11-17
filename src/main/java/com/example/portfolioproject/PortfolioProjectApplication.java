package com.example.portfolioproject;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@Slf4j
@SpringBootApplication
public class PortfolioProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(PortfolioProjectApplication.class, args);
        log.info("-> Creating Springboot Application");
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder){
        log.info("-> Creating Rest Template");
        return builder.build();
    }
}
