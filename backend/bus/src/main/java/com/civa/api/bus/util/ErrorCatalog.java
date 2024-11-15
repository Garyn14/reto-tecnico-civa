package com.civa.api.bus.util;

import lombok.Getter;

@Getter
public enum ErrorCatalog {

    BUS_NOT_FOUND("ERR_BUS_001", "Bus not found"),
    BRAND_NOT_FOUND("ERR_BRAND_001", "Brand not found"),
    BUS_ALREADY_EXISTS("ERR_BUS_002", "Bus already exists"),
    BRAND_ALREADY_EXISTS("ERR_BRAND_002", "Brand already exists"),
    INVALID_PARAMETER("ERR_GEN_001", "Invalid parameter"),
    GENERIC_ERROR("ERR_GEN_002", "An unexpected error ocurred");

    private final String code;
    private final String message;

    ErrorCatalog(String code, String message) {
        this.code = code;
        this.message = message;
    }
}
