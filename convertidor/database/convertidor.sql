CREATE TABLE conversionDolar (
    codigo_iso VARCHAR(5) PRIMARY KEY,
    nombre VARCHAR(100),
    valor FLOAT(10)
);

INSERT INTO conversionDolar VALUES
('EUR', 'EUR / Euro', 0.84),
('GBP', 'GBP / Libra Esterlina', 0.72),
('CAN', 'CAN / Dolar Canadiense', 1.25),
('AUS', 'AUS / Dolar Australiano', 1.35),
('MXN', 'MXN / Peso Mexicano', 19.88),
('PER', 'PER / Sol Peruano',3.91),
('BR', 'BR / Real Brasileño', 5.12);
