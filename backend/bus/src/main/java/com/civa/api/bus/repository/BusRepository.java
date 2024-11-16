package com.civa.api.bus.repository;

import com.civa.api.bus.model.entity.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusRepository extends JpaRepository<Bus, Long> {
    Page<Bus> findAll(Pageable pageable);
    List<Bus> findAllByLicensePlateStartingWith(String licensePlate);
}
