package com.civa.api.bus.mapper;

import com.civa.api.bus.model.dto.BrandResponse;
import com.civa.api.bus.model.entity.Brand;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BrandMapper {
    BrandResponse toBrandResponse(Brand brand);
}
