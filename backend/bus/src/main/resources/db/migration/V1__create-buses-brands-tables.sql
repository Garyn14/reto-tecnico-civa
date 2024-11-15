
CREATE TABLE brands (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabla 'buses'
CREATE TABLE buses (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    bus_number INT NOT NULL UNIQUE,
    license_plate VARCHAR(10) NOT NULL UNIQUE,
    creation_date DATETIME NOT NULL,
    features VARCHAR(255),
    brand_id BIGINT NOT NULL,
    is_active BOOLEAN NOT NULL,
    CONSTRAINT fk_brand FOREIGN KEY (brand_id) REFERENCES brands(id)
);
