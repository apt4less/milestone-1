package com.example.databasestuff.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data //creates setters and getters automatically
@AllArgsConstructor //creates constructor with all values automatically
@NoArgsConstructor
public class Profile
{
    private String username;
}
