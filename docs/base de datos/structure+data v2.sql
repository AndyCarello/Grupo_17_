SET FOREIGN_KEY_CHECKS=0;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
DROP DATABASE IF EXISTS `db_sucre`;
CREATE DATABASE IF NOT EXISTS `db_sucre` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_sucre`;

DROP TABLE IF EXISTS `carts`;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `carts`;
INSERT INTO `carts` (`id`, `date`, `user_id`) VALUES
(1, '2022-11-22', 2),
(2, '2022-11-09', 2),
(3, '2022-11-11', 1);

DROP TABLE IF EXISTS `cart_product`;
CREATE TABLE `cart_product` (
  `id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `cart_product`;
INSERT INTO `cart_product` (`id`, `cart_id`, `product_id`, `quantity`, `unit_price`) VALUES
(1, 1, 2, 2, '2500.00'),
(2, 1, 3, 6, '100.00'),
(3, 2, 3, 6, '110.00'),
(4, 2, 2, 1, '2200.00'),
(5, 2, 1, 1, '2800.00'),
(6, 2, 4, 4, '3000.00'),
(7, 3, 3, 12, '100.00'),
(8, 3, 2, 2, '2000.00');

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `categories`;
INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'tortas'),
(2, 'galletitas');

DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE `ingredients` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `ingredients`;
INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'chocolate'),
(2, 'dulce de leche'),
(3, 'merengue');

DROP TABLE IF EXISTS `ingredient_product`;
CREATE TABLE `ingredient_product` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `ingredient_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `ingredient_product`;
INSERT INTO `ingredient_product` (`id`, `product_id`, `ingredient_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 1),
(4, 4, 1),
(5, 4, 3),
(6, 4, 2);

DROP TABLE IF EXISTS `neighborhoods`;
CREATE TABLE `neighborhoods` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `neighborhoods`;
INSERT INTO `neighborhoods` (`id`, `name`) VALUES
(1, 'florida'),
(2, 'palermo');

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `products`;
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `category_id`) VALUES
(1, 'torta de mousse', 'riquisima torta de 3 chocolates', '2800', 'torta-129837192m.png', 1),
(2, 'lemon pie', 'Torta de limon con merengue italiano', '2200', 'torta-12319823133lp.png', 1),
(3, 'Cookies con chips', 'galletitas con chips de chocolate', '125', 'torta-12389712981c.png', 2),
(4, 'torta pirineos', 'torta marquise con crema dulce de leche y merengue', '3100', 'torta-128748913749p.png', 1);

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `birthday` date NOT NULL,
  `phone` varchar(30) NOT NULL,
  `address` varchar(50) NOT NULL,
  `apartment` varchar(3) DEFAULT NULL,
  `floor` varchar(3) DEFAULT NULL,
  `neighborhood_id` int(11) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

TRUNCATE TABLE `users`;
INSERT INTO `users` (`id`, `email`, `password`, `name`, `lastname`, `birthday`, `phone`, `address`, `apartment`, `floor`, `neighborhood_id`, `is_admin`) VALUES
(1, 'administrador@sucre.com.ar', '$2a$10$mO9L1/rQvXxO84WdrIx9tep898HznRi/AjAFOiRlVPrFu0L6GK4gi', 'administrador', 'carello', '1984-11-27', '1136593286', 'vergara 2635', '10', '2', 2, 1),
(2, 'registrado@sucre.com.ar', '$2a$10$/KEb69ahLv7ZBPKMto5/g.GLN803mgSLE7sDTw22eQ6fLmygft/Fa', 'registrado', 'carello', '1984-11-26', '1136578945', 'san martin 3324', '2', '15', 2, 0);


ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `cart_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cart_id` (`cart_id`),
  ADD KEY `product_id` (`product_id`);

ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `ingredients`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `ingredient_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `ingredient_id` (`ingredient_id`);

ALTER TABLE `neighborhoods`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `neighborhood_id` (`neighborhood_id`);


ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `cart_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

ALTER TABLE `ingredient_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `neighborhoods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;


ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

ALTER TABLE `cart_product`
  ADD CONSTRAINT `cart_product_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;

ALTER TABLE `ingredient_product`
  ADD CONSTRAINT `ingredient_product_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ingredient_product_ibfk_2` FOREIGN KEY (`ingredient_id`) REFERENCES `ingredients` (`id`) ON UPDATE CASCADE;

ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE;

ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`neighborhood_id`) REFERENCES `neighborhoods` (`id`) ON UPDATE CASCADE;
SET FOREIGN_KEY_CHECKS=1;
