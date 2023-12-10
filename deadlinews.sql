-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 03:57 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `deadlinews`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `tag_id` int NOT NULL,
  `article_title` varchar(255) DEFAULT NULL,
  `article_content` text,
  `publisher_id` int NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `article_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `tag_id`, `article_title`, `article_content`, `publisher_id`, `image`, `article_link`, `created_at`) VALUES
(1, 3, 'Judul Artikel', 'Konten Artikel Lorem ipsum dolor sit amet', 1, 'image-1-image.png', NULL, '2023-12-04 21:12:53'),
(3, 3, 'Judul Artikel', 'Konten Artikel Lorem ipsum dolor sit amet', 1, 'image-1-image.png', NULL, '2023-12-04 21:12:53'),
(4, 1, 'Title Article', 'lorem ipsum dolor sit amet', 1, NULL, NULL, '2023-12-05 18:26:36'),
(5, 1, 'woy', 'konten', 1, NULL, NULL, '2023-12-05 18:39:36'),
(6, 1, 'title dimari', 'lorem ipsum dolor sit amet', 1, 'image-1701802086581-867031843.png', NULL, '2023-12-05 18:48:06'),
(7, 1, 'lain', 'lorem ipsum dolor sit amet', 1, 'image-1701894022401-611331509.png', NULL, '2023-12-06 20:20:22'),
(8, 1, 'gokil', 'gokil', 1, NULL, NULL, '2023-12-06 20:49:02'),
(9, 1, 'gokil', 'gokilssssssssssss', 1, NULL, NULL, '2023-12-06 20:49:56'),
(13, 1, 'gokil', 'gokil', 1, NULL, NULL, '2023-12-07 08:05:57'),
(14, 1, 'title', 'contents\r\n', 1, 'image-1702028756471-607827148.webp', '', '2023-12-08 09:45:56'),
(15, 1, 'title', 'links', 1, 'image-1702028811501-445790397.png', '', '2023-12-08 09:46:51'),
(16, 2, 'titlessssssss', 'datacontentsssss', 1, NULL, '', '2023-12-08 09:47:27'),
(17, 1, 'title', 'gokil', 1, NULL, 'https://20.detik.com/detikupdate/20231207-231207091/kunjungi-ikn-ganjar-tegaskan-bakal-lanjutkan', '2023-12-09 18:28:48');

-- --------------------------------------------------------

--
-- Table structure for table `tag`
--

CREATE TABLE `tag` (
  `id` int NOT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tag`
--

INSERT INTO `tag` (`id`, `tag_name`, `created_at`) VALUES
(1, 'World', '2023-12-04 20:47:15'),
(2, 'Indonesia', '2023-12-04 20:49:13'),
(3, 'Sports', '2023-12-04 20:49:13'),
(4, 'Business', '2023-12-04 20:49:13'),
(5, 'Technology', '2023-12-04 20:49:13'),
(6, 'Travel', '2023-12-04 20:48:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `session` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `session`, `admin`, `created_at`) VALUES
(1, 'user1', 'user@gmail.com', 'password', '0.3wmprw4kp1m', 0, '2023-12-03 17:56:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `publisher_id` (`publisher_id`),
  ADD KEY `tag_id_foreigns` (`tag_id`) USING BTREE;

--
-- Indexes for table `tag`
--
ALTER TABLE `tag`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `tag`
--
ALTER TABLE `tag`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`publisher_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
