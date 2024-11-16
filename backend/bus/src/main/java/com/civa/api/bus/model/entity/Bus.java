package com.civa.api.bus.model.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity @Getter @Setter
@Table(name = "buses")
public class Bus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "bus_number")
    private Integer busNumber;

    @Column(name = "license_plate")
    private String licensePlate;

    @Column(name = "creation_date")
    private LocalDateTime creationDate;

    private String features;

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne
    @JoinColumn(name = "brand_id", columnDefinition = "BIT(1) default 0")
    private Brand brand;

    @PrePersist
    public void prePersist() {
        this.creationDate = LocalDateTime.now();
    }
}
