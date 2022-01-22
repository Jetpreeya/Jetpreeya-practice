-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: movies
-- ------------------------------------------------------
-- Server version	5.7.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `CountryID` int(5) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `MovieID` int(5) DEFAULT NULL,
  `DirectorID` int(5) DEFAULT NULL,
  PRIMARY KEY (`CountryID`),
  KEY `list_country` (`MovieID`,`CountryID`),
  KEY `country_direc` (`CountryID`,`DirectorID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (232,'USA',1000,100),(456,'Mexico',2000,200);
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `director`
--

DROP TABLE IF EXISTS `director`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `director` (
  `DirectorID` int(5) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `MovieID` int(5) DEFAULT NULL,
  `Age` char(2) DEFAULT NULL,
  PRIMARY KEY (`DirectorID`),
  KEY `list_direc` (`MovieID`,`DirectorID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `director`
--

LOCK TABLES `director` WRITE;
/*!40000 ALTER TABLE `director` DISABLE KEYS */;
INSERT INTO `director` VALUES (100,'Chloé Zhao',1000,'45'),(200,' Adam Mckay',2000,'56');
/*!40000 ALTER TABLE `director` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listmovie`
--

DROP TABLE IF EXISTS `listmovie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listmovie` (
  `MovieID` int(5) NOT NULL,
  `Namemovie` varchar(30) NOT NULL,
  `TypeMovie` varchar(15) DEFAULT NULL,
  `Director` varchar(30) NOT NULL,
  `Year` year(4) DEFAULT NULL,
  `Country` varchar(15) DEFAULT NULL,
  `Salary` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`MovieID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listmovie`
--

LOCK TABLES `listmovie` WRITE;
/*!40000 ALTER TABLE `listmovie` DISABLE KEYS */;
INSERT INTO `listmovie` VALUES (1000,'Eternals','Action','Chloé Zhao',2022,'USA','2000000'),(2000,'Dont look up','Drama','Adam Mckay',2020,'Mexico','5000000');
/*!40000 ALTER TABLE `listmovie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `MovieID` int(5) DEFAULT NULL,
  `TypeID` int(5) NOT NULL AUTO_INCREMENT,
  `TypeName` varchar(15) NOT NULL,
  `Namemovie` varchar(15) DEFAULT NULL,
  `ActorName` varchar(30) DEFAULT NULL,
  `ActressName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`TypeID`),
  KEY `list_type` (`MovieID`,`TypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1000,1,'Action',' Eternals','Angelina Jolie','Brian Tyree'),(2000,2,'Drama','Dont look up','Leonardo DiCaprio','Jennifer Lawrence');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'movies'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-22 13:34:38
