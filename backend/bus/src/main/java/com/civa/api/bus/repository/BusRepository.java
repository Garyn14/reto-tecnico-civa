package com.civa.api.bus.repository;

import com.civa.api.bus.model.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusRepository extends JpaRepository<Bus, Long> {
}
