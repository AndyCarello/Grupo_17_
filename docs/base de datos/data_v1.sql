SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

TRUNCATE TABLE `carts`;
INSERT INTO `carts` (`id`, `date`, `user_id`) VALUES
(1, '2022-11-22', 2),
(2, '2022-11-09', 2),
(3, '2022-11-11', 1);

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

TRUNCATE TABLE `categories`;
INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'tortas'),
(2, 'galletitas');

TRUNCATE TABLE `ingredients`;
INSERT INTO `ingredients` (`id`, `name`) VALUES
(1, 'chocolate'),
(2, 'dulce de leche'),
(3, 'merengue');

TRUNCATE TABLE `ingredient_product`;
INSERT INTO `ingredient_product` (`id`, `product_id`, `ingredient_id`) VALUES
(1, 1, 1),
(2, 2, 3),
(3, 3, 1),
(4, 4, 1),
(5, 4, 3),
(6, 4, 2);

TRUNCATE TABLE `neighborhoods`;
INSERT INTO `neighborhoods` (`id`, `name`) VALUES
(1, 'florida'),
(2, 'palermo');

TRUNCATE TABLE `products`;
INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`, `category_id`, `deleted_at`) VALUES
(1, 'torta de mousse', 'riquisima torta de 3 chocolates', '2800', 'torta-129837192m.png', 1, NULL),
(2, 'lemon pie', 'Torta de limon con merengue italiano', '2200', 'torta-12319823133lp.png', 1, NULL),
(3, 'Cookies con chips', 'galletitas con chips de chocolate', '125', 'torta-12389712981c.png', 2, NULL),
(4, 'torta pirineos', 'torta marquise con crema dulce de leche y merengue', '3100', 'torta-128748913749p.png', 1, NULL);

TRUNCATE TABLE `users`;
INSERT INTO `users` (`id`, `email`, `password`, `name`, `lastname`, `birthday`, `phone`, `address`, `apartment`, `floor`, `neighborhood_id`, `is_admin`, `deleted_at`) VALUES
(1, ' administrador@ sucre.com.ar', '$2a$10$mO9L1/rQvXxO84WdrIx9tep898HznRi/AjAFOiRlVPrFu0L6GK4gi', 'administrador', 'carello', '1984-11-27', '1136593286', 'vergara 2635', '10', '2', 1, 1, NULL),
(2, 'registrado@sucre.com.ar', '$2a$10$/KEb69ahLv7ZBPKMto5/g.GLN803mgSLE7sDTw22eQ6fLmygft/Fa', 'registrado', 'carello', '1984-11-26', '1136578945', 'san martin 3324', '2', '15', 2, 0, NULL);
