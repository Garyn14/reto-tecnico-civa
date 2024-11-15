package com.civa.api.bus.model.dto;

import lombok.*;

import java.time.LocalDateTime;

@Builder @Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class BusResponse {
    private Long id;
    private Integer busNumber;
    private String licensePlate;
    private LocalDateTime creationDate;
    private String features;
    private Boolean isActive;
    private BrandResponse brand;
}
