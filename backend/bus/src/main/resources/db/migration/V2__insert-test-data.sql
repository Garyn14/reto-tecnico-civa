
INSERT INTO brands (name) VALUES('Toyota'),('Mercedes-Benz'),
                              ('Volvo'),('Ford'),('Scania');


INSERT INTO buses (bus_number, license_plate, creation_date, features, brand_id, is_active) VALUES
    (101, 'ABC123', '2024-11-14 08:00:00', 'Air conditioning, WiFi', 1, TRUE), -- toyota
    (102, 'DEF456', '2024-11-14 09:00:00', 'USB ports, Reclining seats', 2, TRUE), -- Mercedes-Benz
    (103, 'GHI789', '2024-11-14 10:00:00', 'Toilet, Air conditioning', 3, FALSE), -- Volvo
    (104, 'JKL012', '2024-11-14 11:00:00', 'WiFi, Reclining seats', 4, TRUE), -- Ford
    (105, 'MNO345', '2024-11-14 12:00:00', NULL, 5, TRUE); -- Scania
