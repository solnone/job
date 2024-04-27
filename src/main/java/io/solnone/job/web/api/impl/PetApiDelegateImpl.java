package io.solnone.job.web.api.impl;

import io.solnone.job.service.api.dto.Pet;
import io.solnone.job.web.api.PetApiDelegate;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class PetApiDelegateImpl implements PetApiDelegate {

    @Override
    public ResponseEntity<List<Pet>> findPetsByStatus(List<String> status) {
        return ResponseEntity.ok(
            status
                .stream()
                .distinct()
                .map(Pet.StatusEnum::fromValue)
                .map(statusEnum -> new Pet().id(new Random().nextLong()).status(statusEnum))
                .collect(Collectors.toList())
        );
    }
}
