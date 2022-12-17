SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
USE `db_sucre`;

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

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'tortas'),
(2, 'galletitas');

INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'chocolate'),
(2, 'dulce de leche'),
(3, 'merengue');

INSERT INTO `users` (`id`, `email`, `password`, `name`, `lastname`, `birthday`, `phone`, `address`, `apartment`, `floor`, `neighborhood_id`, `is_admin`) VALUES
(1, 'administrador@sucre.com.ar', '$2a$10$mO9L1/rQvXxO84WdrIx9tep898HznRi/AjAFOiRlVPrFu0L6GK4gi', 'AdminNameX', 'AdminLastX', '1987-02-01', '11 1234 5600', 'Calle abcd00', 'B', '9', 2, 1),
(2, 'registrado@sucre.com.ar', '$2a$10$/KEb69ahLv7ZBPKMto5/g.GLN803mgSLE7sDTw22eQ6fLmygft/Fa', 'registrado', 'carello', '1984-11-26', '1136578945', 'san martin 3324', '2', '15', 2, 0),
(3, 'juantopo@gmail.com', '$2a$10$ismnKRq.rpQY5hn60eliVee4Y/TVH3t09Xv85jW3K7ShYMWKzCPdy', 'Juan', 'Topo', '1987-02-11', '11 1234 5678', 'ohigggins 14', 'j', '1', 2, 0);

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `category_id`) VALUES
(1, 'Torta 3 mousses', 'Riquisima torta de 3 mousses. Chocolate con leche, chocolate blanco y chocolate amargo.', '2500', 'torta-129837192m.png', 1),
(2, 'lemon pie', 'Torta de limon con merengue italiano', '2200', 'torta-12319823133lp.png', 1),
(3, 'Cookies con chips', 'galletitas con chips de chocolate', '125', 'torta-12389712981c.png', 2),
(4, 'torta pirineos', 'torta marquise con crema dulce de leche y merengue', '3100', 'torta-128748913749p.png', 1);

INSERT INTO `carts` (`id`, `date`, `user_id`) VALUES
(1, '2022-11-22', 2),
(2, '2022-11-09', 2),
(3, '2022-11-11', 1);

INSERT INTO `cart_product` (`id`, `cart_id`, `product_id`, `quantity`, `unit_price`) VALUES
(1, 1, 2, 2, '2500.00'),
(2, 1, 3, 6, '100.00'),
(3, 2, 3, 6, '110.00'),
(4, 2, 2, 1, '2200.00'),
(5, 2, 1, 1, '2800.00'),
(6, 2, 4, 4, '3000.00'),
(7, 3, 3, 12, '100.00'),
(8, 3, 2, 2, '2000.00');

INSERT INTO `ingredient_product` (`id`, `product_id`, `ingredient_id`) VALUES
(2, 2, 3),
(3, 3, 1),
(4, 4, 1),
(5, 4, 3),
(6, 4, 2),
(7, 1, 1);

SET FOREIGN_KEY_CHECKS=1;