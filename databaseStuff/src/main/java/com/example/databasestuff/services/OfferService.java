package com.example.databasestuff.services;

import com.example.databasestuff.models.Offer;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class OfferService {

    public ArrayList<Offer> getOffer() throws ExecutionException, InterruptedException {
        ArrayList<Offer> categories = new ArrayList<>();

        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        //asynchronously retrieve multiple documents
        ApiFuture<QuerySnapshot> future = db.collection("offer").get();
        // future.get() blocks on response
        List<QueryDocumentSnapshot> documents = future.get().getDocuments();

        for (QueryDocumentSnapshot document : documents) {
            categories.add(document.toObject(Offer.class));
        }

        return categories;

    }
    boolean Count() throws ExecutionException, InterruptedException {
        //database connection object
        Firestore db = FirestoreClient.getFirestore();

        DocumentReference washingtonRef = db.collection("offer").document("DC");

        // Atomically increment the population of the city by 50.
        final ApiFuture<WriteResult> updateFuture =
                washingtonRef.update("favoriteCount", FieldValue.increment(1));

        boolean success = updateFuture.get().getUpdateTime() != null;

        return success;
    }
}
