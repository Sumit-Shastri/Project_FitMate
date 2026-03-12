package com.fitmate.fitmate.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(unique = true)
    private String email;

    private String password;
    private Integer age;
    private Double height;
    private Double weight;
    private String goal;

    public void setGa() {
    }
}
