package com.civa.api.bus.service;

import com.civa.api.bus.mapper.BusMapper;
import com.civa.api.bus.model.dto.BusCreateRequest;
import com.civa.api.bus.model.dto.BusResponse;
import com.civa.api.bus.repository.BrandRepository;
import com.civa.api.bus.repository.BusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BusServiceImpl implements BusService{

    private final BusRepository busRepository;
    private final BrandRepository brandRepository;
    private final BusMapper busMapper;

    @Override
    public BusResponse findById(Long id) {
        return null;
    }

    @Override
    public List<BusResponse> findAll() {
        return null;
    }

    @Override
    public BusResponse save(BusCreateRequest request) {
        return null;
    }

    @Override
    public BusResponse update(Long id, BusCreateRequest request) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }
}
