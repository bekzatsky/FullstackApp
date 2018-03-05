package com.bekzatsky.crud.models;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fName;
    private String lName;
    private int age;

    public User() {
    }

    public User(String fName, String lName, int age) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
}
