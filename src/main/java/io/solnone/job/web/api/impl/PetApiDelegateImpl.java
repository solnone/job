package io.solnone.job.web.api.impl;

import io.solnone.job.service.api.dto.Pet;
import io.solnone.job.service.api.dto.Pet.StatusEnum;
import io.solnone.job.web.api.PetApiDelegate;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import tech.jhipster.web.util.PaginationUtil;

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

    @Override
    public ResponseEntity<List<Pet>> find(Pageable pageable) {
        Page<Pet> page = new PageImpl<>(
            List.of(
                new Pet().id(new Random().nextLong()).status(StatusEnum.AVAILABLE),
                new Pet().id(new Random().nextLong()).status(StatusEnum.PENDING)
            ),
            pageable,
            2
        );
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }
}
