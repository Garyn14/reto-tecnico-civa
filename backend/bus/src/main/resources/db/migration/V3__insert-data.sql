INSERT INTO brands (name) VALUES
    ('Hyundai'),('MAN'),
    ('Isuzu'),('Hino'),
    ('Voltrak');

INSERT INTO buses (bus_number, license_plate, creation_date, features, brand_id, is_active) VALUES
(206, 'PQR678', '2024-11-15 08:00:00', 'Air conditioning, Reclining seats', 6, TRUE), -- Hyundai
(207, 'STU910', '2024-11-15 09:30:00', 'WiFi, USB ports', 7, TRUE), -- MAN
(208, 'VWX234', '2024-11-15 10:00:00', 'Toilet, WiFi', 8, FALSE), -- Isuzu
(209, 'YZA567', '2024-11-15 11:00:00', 'Air conditioning, Reclining seats', 9, TRUE), -- Hino
(210, 'BCD890', '2024-11-15 12:00:00', 'USB ports, Toilet', 10, TRUE), -- Voltrak
(211, 'EFG123', '2024-11-15 13:00:00', 'WiFi, Air conditioning', 6, TRUE), -- Hyundai
(212, 'HIJ456', '2024-11-15 14:00:00', 'Reclining seats, Toilet', 7, FALSE), -- MAN
(213, 'KLM789', '2024-11-15 15:00:00', NULL, 8, TRUE), -- Isuzu
(214, 'NOP012', '2024-11-15 16:00:00', 'WiFi, Reclining seats', 9, TRUE), -- Hino
(215, 'QRS345', '2024-11-15 17:00:00', 'USB ports, Air conditioning', 10, TRUE), -- Voltrak
(216, 'TUV678', '2024-11-16 08:30:00', 'Toilet, USB ports', 6, FALSE), -- Hyundai
(217, 'WXY910', '2024-11-16 09:00:00', 'Air conditioning, Reclining seats', 7, TRUE), -- MAN
(218, 'ZAB234', '2024-11-16 10:00:00', NULL, 8, TRUE), -- Isuzu
(219, 'CDE567', '2024-11-16 11:00:00', 'WiFi, Reclining seats', 9, FALSE), -- Hino
(220, 'FGH890', '2024-11-16 12:00:00', 'Air conditioning, Toilet', 10, TRUE), -- Voltrak
(221, 'IJK123', '2024-11-16 13:00:00', 'WiFi, Reclining seats', 6, TRUE), -- Hyundai
(222, 'LMN456', '2024-11-16 14:00:00', 'USB ports, Air conditioning', 7, TRUE), -- MAN
(223, 'OPQ789', '2024-11-16 15:00:00', 'Toilet, Reclining seats', 8, TRUE), -- Isuzu
(224, 'RST012', '2024-11-16 16:00:00', 'WiFi, Reclining seats', 9, TRUE), -- Hino
(225, 'UVW345', '2024-11-16 17:00:00', 'Air conditioning, USB ports', 10, TRUE); -- Voltrak
