package com.example.databasestuff.controller;


import com.example.databasestuff.models.Offer;
import com.example.databasestuff.services.OfferService;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@RequestMapping("/api/Offer")
@RestController
public class IDUController
{


    OfferService os;

    public IDUController( OfferService offersev) {
        this.os = offersev;
    }

    //Get menu items by category id
    @PutMapping("/{id}")
    public boolean updateCount(@PathVariable(name="id") String id) throws ExecutionException, InterruptedException {
    return os.Count(id);
    }

    //
    @PostMapping("/{id}")
    public boolean insertCount(@PathVariable(name="id") String id) throws ExecutionException, InterruptedException {
        return os.insertCount(id);
    }

    @GetMapping("/{id}")
    public Offer getOffer(@PathVariable(name="id") String id) throws ExecutionException, InterruptedException {
        return os.getOffer(id);
    }
}
