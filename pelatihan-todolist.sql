-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 05, 2024 at 08:09 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pelatihan-todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `isi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todo`
--

INSERT INTO `todo` (`id`, `judul`, `isi`) VALUES
(1, 'lorem ipsum', 'lorem ipsum dolor sit amet'),
(2, 'mengerjakan tugas', 'mengerjakan tugasnya novrido');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nim` varchar(16) NOT NULL,
  `divisi` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `angkatan` varchar(32) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `nim`, `divisi`, `email`, `angkatan`, `foto`) VALUES
(1, 'Seva Giantama Farel', '123210061', 'Chairman', 'sevafarel17@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/sepa_giantama.jpeg?updatedAt=1688139465965'),
(2, 'Muhammad Rafli', '123210078', 'Vice Chairman', 'rafliyulistiawan@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/muh_rafli.jpeg?updatedAt=1688139465943'),
(3, 'Amelia Kartika Putri', '123210115', 'Secretary', 'kartikaputriamelia88@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/amel_kp.jpeg?updatedAt=1688139466063'),
(4, 'Nayaka Rafif Sutaprawira', '123210158', 'Treasury', 'nayakarafif55@gmail.com', 'Informatika 2021', 'https://res.cloudinary.com/dhvrlz7xq/image/upload/v1688052967/FotoItc/nayaka_fix_gad2l0.jpg'),
(5, 'Michel Pierce Tahya', '123210103', 'Head of Mobile Dev.', 'michelpt76767@gmail.com', 'Informatika 2021', 'https://res.cloudinary.com/dhvrlz7xq/image/upload/v1688052968/FotoItc/michel_fix_yq3ypy.jpg'),
(6, 'Komang Yuda Saputra', '123210181', 'Deputy Head of Mobile Dev.', 'yudasaputra082@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/komang_yuda.jpeg?updatedAt=1688139466130'),
(7, 'Rizal Hanifa Pratama', '123210114', 'Head of Project Manager', 'rizalhp12345@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/rizal_hp.jpeg?updatedAt=1688139465884'),
(8, 'Faustina Chelloana Triatmojo', '123210139', 'Deputy Head of Project Manager', 'chelloana22@gmail.com', 'Informatika 2021', 'https://res.cloudinary.com/dhvrlz7xq/image/upload/v1688052968/FotoItc/chello_fix_ad4zxa.jpg'),
(9, 'Sayang Sani', '123210044', 'Head of UI/UX', 'sayangsanie06@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/sayang_sani.jpeg?updatedAt=1688139465983'),
(10, 'Desy Nur Azizah', '123210083', 'Deputy Head of UI/UX', 'desy15111@gmail.com', 'Informatika 2021', 'https://res.cloudinary.com/dhvrlz7xq/image/upload/v1688052967/FotoItc/desy_fix_dmrkgt.jpg'),
(11, 'I Gusti Ketut Dimas Pramantya', '123210022', 'Head of Web Dev.', 'igkdimas@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/igk_dimas.jpeg?updatedAt=1688139466000'),
(12, 'Muhammad Raditya Haikal Mumtaz', '123210062', 'Deputy Head of Web Dev.', 'hmumtaz70@gmail.com', 'Informatika 2021', 'https://ik.imagekit.io/ckhejgn1v/anggota_itc/tr:f-auto,w-300,q-40/haikal_mumtaz.jpeg?updatedAt=1688139466014');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todo`
--
ALTER TABLE `todo`
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
-- AUTO_INCREMENT for table `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
