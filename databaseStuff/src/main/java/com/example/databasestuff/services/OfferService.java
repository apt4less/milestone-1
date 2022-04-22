package com.example.databasestuff.services;

import com.example.databasestuff.models.Offer;
import com.example.databasestuff.models.Profile;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@Service
public class OfferService {

    public Offer getOffer(String id) throws ExecutionException, InterruptedException {
        Offer theoffer = null;

        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        //asynchronously retrieve multiple documents
        ApiFuture<DocumentSnapshot> future = db.collection("offer").document(id).get();

        DocumentSnapshot doc = future.get();


        // future.get() blocks on response
        if(doc.exists())
            theoffer = doc.toObject(Offer.class);

        return theoffer;

    }
    public boolean Count(String id) throws ExecutionException, InterruptedException {
        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        DocumentReference washingtonRef = db.collection("offer").document(id);

        // Atomically increment the population of the city by 50.
        final ApiFuture<WriteResult> updateFuture =
                washingtonRef.update("count", FieldValue.increment(1));

        boolean success = updateFuture.get().getUpdateTime() != null;

        return success;
    }

    public boolean insertCount(String id) throws ExecutionException, InterruptedException {
        Firestore db = FirestoreClient.getFirestore();

        // Add document data with auto-generated id.
        Map<String, Object> data = new HashMap<>();
        data.put("count", 1);
        ApiFuture<WriteResult> future = db.collection("offer").document(id).set(data);

        boolean success = future.get().getUpdateTime() != null;

        return success;
    }
}
