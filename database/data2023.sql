SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- TRUNCATE TABLE `neighborhoods`;
INSERT INTO `neighborhoods` (`id`, `name`) VALUES
(1, 'Agronomía'),
(2, 'Almagro'),
(3, 'Balvanera'),
(4, 'Barracas'),
(5, 'Belgrano'),
(6, 'Boedo'),
(7, 'Caballito'),
(8, 'Chacarita'),
(9, 'Coghlan'),
(10, 'Colegiales'),
(11, 'Constitución'),
(12, 'Flores'),
(13, 'Floresta'),
(14, 'La Boca'),
(15, 'La Paternal'),
(16, 'Liniers'),
(17, 'Mataderos'),
(18, 'Monte Castro'),
(19, 'Montserrat'),
(20, 'Nueva Pompeya'),
(21, 'Nuñez'),
(22, 'Palermo'),
(23, 'Parque Avellaneda'),
(24, 'Parque Chacabuco'),
(25, 'Parque Chas'),
(26, 'Parque Patricios'),
(27, 'Puerto Madero'),
(28, 'Recoleta'),
(29, 'Retiro'),
(30, 'Saavedra'),
(31, 'San Cristóbal'),
(32, 'San Nicolás'),
(33, 'San Telmo'),
(34, 'Versalles'),
(35, 'Villa Crespo'),
(36, 'Villa Devoto'),
(37, 'Villa General Mitre'),
(38, 'Villa Lugano'),
(39, 'Villa Luro'),
(40, 'Villa Ortúzar'),
(41, 'Villa Pueyrredón'),
(42, 'Villa Real'),
(43, 'Villa Riachuelo'),
(44, 'Villa Santa Rita'),
(45, 'Villa Soldati'),
(46, 'Villa Urquiza'),
(47, 'Villa del Parque'),
(48, 'Vélez Sarsfield');

-- TRUNCATE TABLE `categories`;
INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Tortas'),
(2, 'Galletitas'),
(5, 'Budines'),
(6, 'Tartas');

-- TRUNCATE TABLE `ingredients`;
INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'Chocolates'),
(2, 'Dulce de leche'),
(3, 'Merengue'),
(5, 'Coco'),
(7, 'Manzana'),
(8, 'Frutilla'),
(9, 'Arándanos'),
(10, 'Banana'),
(11, 'Limon'),
(12, 'Membrillo'),
(13, 'Galletitas Oreo'),
(14, 'Crema Chantilly'),
(15, 'Crema Pastelera'),
(16, 'Vainilla');

-- TRUNCATE TABLE `products`;
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `category_id`) VALUES
(1, 'Torta 3 mousses', 'Riquisima torta de 3 mousses. Chocolate con leche, chocolate blanco y chocolate amargo.', '4000', 'torta-1672622014903.jpg', 1),
(2, 'Lemon pie', 'Tarta de limón con merengue italiano', '4000', 'torta-1672621979062.jpg', 1),
(3, 'Cookies con chips', 'galletitas con chips de chocolate', '125', 'torta-12389712981c.png', 2),
(4, 'Tarta de Frutillas', 'Tarta de frutillas con crema', '4000', 'torta-1672622134839.jpg', 6),
(23, 'Tarta de Coco', 'Tarta de coco con dulce de leche', '3000', 'torta-1672622197809.jpg', 6),
(24, 'Tarta Frutal', 'Tarta fresca de frutas', '4000', 'torta-1672622496049.jpg', 6),
(25, 'Tarta Banana Split', 'Tarta de banana con dulce de leche', '4000', 'torta-1672622603093.jpg', 6),
(26, 'Lengüitas de Limon (250 gr)', 'Galletitas de limón bañadas en chocolate', '1000', 'torta-1672622731291.jpg', 1),
(27, 'Pepas (250 gr)', ' Galletitas Pepas de Membrillo ', '1000', 'torta-1672622998852.jpg', 2),
(28, 'Torta Oreo', 'Torta Helada con crema y galletitas Oreo', '4000', 'torta-1672623332077.jpg', 1),
(29, 'Budín de Vainilla', 'Budín de vainilla relleno de dulce de leche', '2000', 'torta-1672623506575.jpg', 5);

-- TRUNCATE TABLE `ingredient_product`;
INSERT INTO `ingredient_product` (`id`, `product_id`, `ingredient_id`) VALUES
(2, 2, 3),
(3, 3, 1),
(4, 4, 1),
(5, 4, 3),
(6, 4, 2),
(7, 1, 1),
(10, 23, 2),
(11, 24, 7),
(12, 24, 8),
(13, 24, 9),
(14, 25, 2),
(15, 25, 10),
(16, 26, 1),
(17, 27, 12),
(18, 28, 1),
(19, 28, 2),
(20, 28, 13),
(21, 28, 14),
(22, 29, 2),
(23, 29, 16);

-- TRUNCATE TABLE `users`;
INSERT INTO `users` (`id`, `email`, `password`, `name`, `lastname`, `birthday`, `phone`, `address`, `apartment`, `floor`, `neighborhood_id`, `is_admin`) VALUES
(1, 'administrador@sucre.com.ar', '$2a$10$mO9L1/rQvXxO84WdrIx9tep898HznRi/AjAFOiRlVPrFu0L6GK4gi', 'AdminNameX', 'AdminLastX', '1987-02-01', '11 1234 5600', 'Calle abcd00', 'B', '9', 2, 1),
(2, 'registrado@sucre.com.ar', '$2a$10$/KEb69ahLv7ZBPKMto5/g.GLN803mgSLE7sDTw22eQ6fLmygft/Fa', 'registrado', 'carello', '1984-11-26', '1136578945', 'san martin 3324', '2', '15', 2, 0),
(4, 'andreacarello@hotmail.com', '$2a$10$GpikaybsNSIjSUfZzA.yZ.kflOoSvwxjlXzaC8JbLdJpo2AHr1mWe', 'Andrea Estefania', 'Carello', '1984-11-27', '01136593282', 'la calle 1234', 'B', '1', 10, 0);
SET FOREIGN_KEY_CHECKS=1;

-- TRUNCATE TABLE `carts`;
INSERT INTO `carts` (`id`, `date`, `user_id`) VALUES
(1, '2022-11-22', 2),
(2, '2022-11-09', 2),
(3, '2022-11-11', 1),
(28, '2022-12-28', 1),
(29, '2022-12-28', 2),
(30, '2022-12-28', 2),
(31, '2022-12-28', 2),
(32, '2022-12-28', 4),
(33, '2022-12-30', 1);

-- TRUNCATE TABLE `cart_product`;
INSERT INTO `cart_product` (`id`, `cart_id`, `product_id`, `quantity`, `unit_price`) VALUES
(1, 1, 2, 2, '2500.00'),
(2, 1, 3, 6, '100.00'),
(3, 2, 3, 6, '110.00'),
(4, 2, 2, 1, '2200.00'),
(5, 2, 1, 1, '2800.00'),
(6, 2, 4, 4, '3000.00'),
(7, 3, 3, 12, '100.00'),
(8, 3, 2, 2, '2000.00'),
(16, 28, 2, 2, '4000.00'),
(17, 28, 4, 1, '3100.00'),
(18, 29, 3, 4, '125.00'),
(19, 30, 4, 1, '3100.00'),
(20, 31, 1, 1, '2500.00'),
(21, 31, 4, 1, '3100.00'),
(22, 32, 1, 1, '2500.00'),
(23, 32, 2, 1, '4000.00'),
(24, 33, 2, 1, '4000.00');










