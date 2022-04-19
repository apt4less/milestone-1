package com.example.databasestuff.auth.models;

import com.example.databasestuff.auth.models.CookieProperties;
import com.example.databasestuff.auth.models.FirebaseProperties;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties("security")
@Data
public class SecurityProperties {

    CookieProperties cookieProps;
    FirebaseProperties firebaseProps;
    boolean allowCredentials;
    List<String> allowedOrigins;
    List<String> allowedHeaders;
    List<String> exposedHeaders;
    List<String> allowedMethods;
    List<String> allowedPublicApis;

}