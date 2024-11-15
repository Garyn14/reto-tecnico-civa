package com.civa.api.bus.model.dto;

import lombok.*;

@Builder @Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class BrandResponse {
    private Long id;
    private String name;
}
