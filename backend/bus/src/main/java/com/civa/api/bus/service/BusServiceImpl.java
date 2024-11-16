package com.civa.api.bus.service;

import com.civa.api.bus.exception.BrandNotFoundException;
import com.civa.api.bus.exception.BusNotFoundException;
import com.civa.api.bus.mapper.BusMapper;
import com.civa.api.bus.model.dto.BusCreateRequest;
import com.civa.api.bus.model.dto.BusResponse;
import com.civa.api.bus.model.entity.Bus;
import com.civa.api.bus.repository.BrandRepository;
import com.civa.api.bus.repository.BusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BusServiceImpl implements BusService{

    private final BusRepository busRepository;
    private final BrandRepository brandRepository;
    private final BusMapper busMapper;

    @Override
    public BusResponse findById(Long id) {
        return busRepository.findById(id)
                .map(busMapper::toBusResponse)
                .orElseThrow(BusNotFoundException::new);
    }

    @Override
    public List<BusResponse> findAll() {
        return busRepository.findAll()
                .stream()
                .map(busMapper::toBusResponse)
                .toList();
    }

    @Override
    public Page<BusResponse> findAll(Pageable pageable) {
        return busRepository.findAll(pageable)
                .map(busMapper::toBusResponse);
    }

    @Override
    public List<BusResponse> findAllByLicensePlate(String licensePlate) {
        if (licensePlate.isEmpty() || licensePlate.isBlank()) return Collections.emptyList();
        return busRepository.findAllByLicensePlateStartingWith(licensePlate)
                .stream()
                .map(busMapper::toBusResponse)
                .toList();
    }

    @Override
    public BusResponse save(BusCreateRequest request) {
        return brandRepository.findById(request.getBrandId())
                .map(brand -> {
                    Bus bus = new Bus();
                    bus.setBusNumber(request.getBusNumber());
                    bus.setLicensePlate(request.getLicensePlate());
                    bus.setFeatures(request.getFeatures());
                    bus.setIsActive(request.getIsActive());
                    bus.setBrand(brand);
                    return busRepository.save(bus);
                })
                .map(busMapper::toBusResponse)
                .orElseThrow(BrandNotFoundException::new);
    }

    @Override
    public BusResponse update(Long id, BusCreateRequest request) {
        return busRepository.findById(id)
                .map(bus -> brandRepository.findById(request.getBrandId())
                        .map(brand -> {
                            bus.setBusNumber(request.getBusNumber());
                            bus.setLicensePlate(request.getLicensePlate());
                            bus.setFeatures(request.getFeatures());
                            bus.setIsActive(request.getIsActive());
                            bus.setBrand(brand);
                            return busRepository.save(bus);
                        })
                        .orElseThrow(BrandNotFoundException::new)
                )
                .map(busMapper::toBusResponse)
                .orElseThrow(BusNotFoundException::new);
    }

    @Override
    public void delete(Long id) {
        if (busRepository.findById(id).isEmpty()) throw new BusNotFoundException();
        busRepository.deleteById(id);
    }
}
