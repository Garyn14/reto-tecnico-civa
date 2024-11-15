package com.civa.api.bus.service;

import com.civa.api.bus.model.dto.BusCreateRequest;
import com.civa.api.bus.model.dto.BusResponse;

import java.util.List;

public interface BusService {
    BusResponse findById(Long id);
    List<BusResponse> findAll();
    BusResponse save(BusCreateRequest request);
    BusResponse update(Long id, BusCreateRequest request);
    void delete(Long id);
}
