package com.civa.api.bus.model.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Builder @Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class BusCreateRequest {
    @NotNull(message = "Bus number is required")
    @Min(value = 1, message = "bus number must be greater than or equals to 0")
    @Max(value = 100, message = "bus number must be less than or equals to 100")
    private Integer busNumber;

    @Size(min = 5, max = 10, message = "license plate must be between 5 and 10 characters")
    @NotBlank(message = "license plate is required")
    private String licensePlate;

    @Size(max = 255, message = "features must be less than or equals to 255")
    private String features;

    @NotNull(message = "is active is required")
    private Boolean isActive;

    @NotNull(message = "brand id is required")
    private Long brandId;
}
