-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Mar 19, 2023 at 05:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_web_pani`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_autoridad`
--

CREATE TABLE `tbl_autoridad` (
  `CODIGO` int(11) NOT NULL,
  `NOMBRE` varchar(100) NOT NULL,
  `COD_TIPO_IMAGEN` int(11) NOT NULL,
  `FOTO` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_empresa`
--

CREATE TABLE `tbl_empresa` (
  `CODIGO` int(11) NOT NULL,
  `CODIGO_TIPO_DATO` int(11) NOT NULL,
  `CONTENIDO` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_imagen_sorteo`
--

CREATE TABLE `tbl_imagen_sorteo` (
  `CODIGO` int(11) NOT NULL,
  `TIPO_SORTEO` int(11) NOT NULL,
  `NUMERO_SORTEO` varchar(10) NOT NULL,
  `IMAGEN` longblob NOT NULL,
  `ESTADO` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_institucion`
--

CREATE TABLE `tbl_institucion` (
  `CODIGO` int(11) NOT NULL,
  `COD_TIPO_INSTITUCION` int(11) NOT NULL,
  `COD_AUTORIDAD` int(11) NOT NULL,
  `DESCRIPCION` longtext NOT NULL,
  `OBJETIVOS` longtext NOT NULL,
  `FUNCIONES` longtext NOT NULL,
  `ESTADO` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tipo_de_dato`
--

CREATE TABLE `tbl_tipo_de_dato` (
  `CODIGO` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `DESCRIPCION` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tipo_imagen`
--

CREATE TABLE `tbl_tipo_imagen` (
  `CODIGO` int(11) NOT NULL,
  `NOMBRE` varchar(50) NOT NULL,
  `TIPO_EXTENCION` varchar(10) NOT NULL,
  `ESTADO` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_tipo_imagen`
--

INSERT INTO `tbl_tipo_imagen` (`CODIGO`, `NOMBRE`, `TIPO_EXTENCION`, `ESTADO`) VALUES
(1, 'SORTEO MAYOR', 'jpg', 'ACTIVO'),
(2, 'SORTEO MENOR', 'jpg', 'ACTIVO'),
(3, 'CARRUCEL', 'png', 'ACTIVO'),
(4, 'AUTORIDADES', 'jpg', 'ACTIVO');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tipo_institucion`
--

CREATE TABLE `tbl_tipo_institucion` (
  `CODIGO` int(11) NOT NULL,
  `NOMBRE_TIPO` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(25) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'arnold.garcia', '691a50fac38cba978cdb6fd54658d456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_autoridad`
--
ALTER TABLE `tbl_autoridad`
  ADD PRIMARY KEY (`CODIGO`),
  ADD KEY `FK_cod_imagen_idx` (`COD_TIPO_IMAGEN`);

--
-- Indexes for table `tbl_empresa`
--
ALTER TABLE `tbl_empresa`
  ADD PRIMARY KEY (`CODIGO`),
  ADD KEY `COD_TIPO_DATO_idx` (`CODIGO_TIPO_DATO`);

--
-- Indexes for table `tbl_imagen_sorteo`
--
ALTER TABLE `tbl_imagen_sorteo`
  ADD PRIMARY KEY (`CODIGO`),
  ADD KEY `tipo_orteofk_idx` (`TIPO_SORTEO`);

--
-- Indexes for table `tbl_institucion`
--
ALTER TABLE `tbl_institucion`
  ADD PRIMARY KEY (`CODIGO`),
  ADD KEY `FK_TIPO_INST_idx` (`COD_TIPO_INSTITUCION`),
  ADD KEY `FK_AUTORIDAD_idx` (`COD_AUTORIDAD`);

--
-- Indexes for table `tbl_tipo_de_dato`
--
ALTER TABLE `tbl_tipo_de_dato`
  ADD PRIMARY KEY (`CODIGO`);

--
-- Indexes for table `tbl_tipo_imagen`
--
ALTER TABLE `tbl_tipo_imagen`
  ADD PRIMARY KEY (`CODIGO`),
  ADD UNIQUE KEY `NOMBRE_UNIQUE` (`NOMBRE`);

--
-- Indexes for table `tbl_tipo_institucion`
--
ALTER TABLE `tbl_tipo_institucion`
  ADD PRIMARY KEY (`CODIGO`),
  ADD UNIQUE KEY `NOMBRE_TIPO_UNIQUE` (`NOMBRE_TIPO`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_autoridad`
--
ALTER TABLE `tbl_autoridad`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_empresa`
--
ALTER TABLE `tbl_empresa`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `tbl_imagen_sorteo`
--
ALTER TABLE `tbl_imagen_sorteo`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `tbl_institucion`
--
ALTER TABLE `tbl_institucion`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `tbl_tipo_de_dato`
--
ALTER TABLE `tbl_tipo_de_dato`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=0;

--
-- AUTO_INCREMENT for table `tbl_tipo_imagen`
--
ALTER TABLE `tbl_tipo_imagen`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_tipo_institucion`
--
ALTER TABLE `tbl_tipo_institucion`
  MODIFY `CODIGO` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_autoridad`
--
ALTER TABLE `tbl_autoridad`
  ADD CONSTRAINT `FK_cod_imagen` FOREIGN KEY (`COD_TIPO_IMAGEN`) REFERENCES `tbl_tipo_imagen` (`CODIGO`);

--
-- Constraints for table `tbl_empresa`
--
ALTER TABLE `tbl_empresa`
  ADD CONSTRAINT `CODTIPODATO` FOREIGN KEY (`CODIGO_TIPO_DATO`) REFERENCES `tbl_tipo_de_dato` (`CODIGO`);

--
-- Constraints for table `tbl_imagen_sorteo`
--
ALTER TABLE `tbl_imagen_sorteo`
  ADD CONSTRAINT `tiposorteo_fk` FOREIGN KEY (`TIPO_SORTEO`) REFERENCES `tbl_tipo_imagen` (`CODIGO`);

--
-- Constraints for table `tbl_institucion`
--
ALTER TABLE `tbl_institucion`
  ADD CONSTRAINT `FK_AUTORIDAD` FOREIGN KEY (`COD_AUTORIDAD`) REFERENCES `tbl_autoridad` (`CODIGO`),
  ADD CONSTRAINT `FK_TIPO_INST` FOREIGN KEY (`COD_TIPO_INSTITUCION`) REFERENCES `tbl_tipo_institucion` (`CODIGO`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
