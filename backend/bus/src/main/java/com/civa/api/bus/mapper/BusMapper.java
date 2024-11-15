package com.civa.api.bus.mapper;

import com.civa.api.bus.model.dto.BusResponse;
import com.civa.api.bus.model.entity.Bus;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {BrandMapper.class})
public interface BusMapper {
    BusResponse toBusResponse(Bus bus);
}
