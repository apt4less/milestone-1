package com.example.databasestuff.services;

import com.example.databasestuff.auth.services.SecurityService;
import com.example.databasestuff.models.SignUp;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RequestMapping("/auth")
@RestController
public class AuthenticationController {

    protected final Log logger = LogFactory.getLog(this.getClass());


    //function to create user sessions and log user in
    @PostMapping("/session")
    public ResponseEntity createSession()
    {
        logger.info("Create session executed.");
        SecurityService securityService = new SecurityService();
        SignUp signUp = securityService.getFirebaseUser().getUser();

        //return the customer object in JSON format
        return ResponseEntity.ok(Collections.singletonMap("SignUp", signUp));
    }
}