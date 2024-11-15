package com.civa.api.bus.controller;

import com.civa.api.bus.exception.BrandNotFoundException;
import com.civa.api.bus.exception.BusNotFoundException;
import com.civa.api.bus.model.dto.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.List;

import static com.civa.api.bus.util.ErrorCatalog.*;

@RestControllerAdvice
public class GlobalControllerAdvice {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(BusNotFoundException.class)
    public ErrorResponse handleBusNotFoundException() {
        return ErrorResponse.builder()
                .code(BUS_NOT_FOUND.getCode())
                .message(BUS_NOT_FOUND.getMessage())
                .timeStamp(LocalDateTime.now())
                .build();
    }

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(BrandNotFoundException.class)
    public ErrorResponse handleBrandNotFoundException() {
        return ErrorResponse.builder()
                .code(BRAND_NOT_FOUND.getCode())
                .message(BRAND_NOT_FOUND.getMessage())
                .timeStamp(LocalDateTime.now())
                .build();
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ErrorResponse handleMethodArgumentNotValidException(
            MethodArgumentNotValidException exception
    ){
        BindingResult result = exception.getBindingResult();
        return ErrorResponse.builder()
                .code(INVALID_PARAMETER.getCode())
                .message(INVALID_PARAMETER.getMessage())
                .details(result.getFieldErrors().stream()
                        .map(error -> error.getField() + ": " + error.getDefaultMessage())
                        .toList()
                )
                .timeStamp(LocalDateTime.now())
                .build();
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(Exception.class)
    public ErrorResponse  handleGenericException(Exception exception) {
        return ErrorResponse.builder()
                .code(GENERIC_ERROR.getCode())
                .message(GENERIC_ERROR.getMessage())
                .details(List.of(exception.getMessage()))
                .timeStamp(LocalDateTime.now())
                .build();
    }
}
