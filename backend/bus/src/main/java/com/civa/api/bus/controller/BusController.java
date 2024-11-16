package com.civa.api.bus.controller;

import com.civa.api.bus.model.dto.BusCreateRequest;
import com.civa.api.bus.model.dto.BusResponse;
import com.civa.api.bus.service.BusService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/buses")
public class BusController {
    private final BusService busService;

    @GetMapping("/v1/api")
    public List<BusResponse> findAll() {
        return busService.findAll();
    }

    @GetMapping("/v1/api/page")
    public Page<BusResponse> findAll(@PageableDefault(size = 10, sort = "id") Pageable pageable) {
        return busService.findAll(pageable);
    }

    @GetMapping("/v1/api/plate")
    public List<BusResponse> findByPlateNumber(@RequestParam String plateNumber) {
        return busService.findAllByLicensePlate(plateNumber);
    }

    @GetMapping("/v1/api/{id}")
    public BusResponse findById(@PathVariable Long id) {
        return busService.findById(id);
    }
    
    @PostMapping("/v1/api")
    public ResponseEntity<BusResponse> save(@Valid @RequestBody BusCreateRequest request) {
        BusResponse response = busService.save(request);
        return ResponseEntity
                .created(URI.create("/buses/v1/api/" + response.getId()))
                .body(response);
    }

    @PutMapping("/v1/api/{id}")
    public BusResponse update(@PathVariable Long id, @Valid @RequestBody BusCreateRequest request) {
        return busService.update(id, request);
    }

    @DeleteMapping("/v1/api/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        busService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
