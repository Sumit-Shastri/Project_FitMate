package com.fitmate.fitmate.dto;


import lombok.Data;

@Data
public class UserProfileRequest
{
    private Integer age;
    private Double weight;
    private Double height;
    private String goal;
}
