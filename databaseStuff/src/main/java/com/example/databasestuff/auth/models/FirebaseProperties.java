package com.example.databasestuff.auth.models;

import lombok.Data;

@Data
public class FirebaseProperties {

    int sessionExpiryInDays;
    String databaseUrl;
    boolean enableStrictServerSession;
    boolean enableCheckSessionRevoked;
    boolean enableLogoutEverywhere;
}
