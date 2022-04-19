package com.example.databasestuff.auth.models;

import com.example.databasestuff.models.SignUp;

import lombok.Data;

@Data
public class FirebaseUser {
    private String uid;
    private String name;
    private String issuer;
    private String picture;
    private String email;
    private boolean emailVerified;
    private SignUp user;

}
