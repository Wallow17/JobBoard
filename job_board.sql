-- MySQL dump 10.16  Distrib 10.3.9-MariaDB, for osx10.12 (x86_64)
--
-- Host: localhost    Database: job_board
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `job_board`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `job_board` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;

USE `job_board`;

--
-- Table structure for table `ads_members`
--

DROP TABLE IF EXISTS `ads_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ads_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_id` int(11) DEFAULT NULL,
  `connect_id` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_id` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads_members`
--

LOCK TABLES `ads_members` WRITE;
/*!40000 ALTER TABLE `ads_members` DISABLE KEYS */;
/*!40000 ALTER TABLE `ads_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advertisements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `company_id` varchar(255) DEFAULT NULL,
  `wage` varchar(255) DEFAULT NULL,
  `place` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `resume` text,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisements`
--

LOCK TABLES `advertisements` WRITE;
/*!40000 ALTER TABLE `advertisements` DISABLE KEYS */;
INSERT INTO `advertisements` VALUES (1,'Developper','1','1000','Bordeaux','6 mois','little resume','big resume'),(2,'Cooker','0','1000','Bordeaux','6 mois','little resume','big resume'),(3,'Cooker','0','1000','Bordeaux','6 mois','little resume','big resume'),(4,'Cooker','0','1000','Bordeaux','6 mois','little resume','big resume'),(5,'teacher','1',NULL,NULL,NULL,NULL,NULL),(6,'teacher','1',NULL,NULL,NULL,NULL,NULL),(7,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(8,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(9,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(10,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(11,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(12,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(13,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(14,'Teacher','1',NULL,NULL,NULL,NULL,NULL),(17,'Job for Logan','0','slavery','Mc Donalds mobile project for free parties','for all your life, and death.. as well','What the hell is that job','For all your money spent in our restaurtants we offer *hum you a wonderful job. Wil not be paid aas well as you will be considered as a slave but you will enjoy this, we promess');
/*!40000 ALTER TABLE `advertisements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Mc Donald\'s');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emails`
--

DROP TABLE IF EXISTS `emails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_id` varchar(255) DEFAULT NULL,
  `to_id` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `ad_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emails`
--

LOCK TABLES `emails` WRITE;
/*!40000 ALTER TABLE `emails` DISABLE KEYS */;
/*!40000 ALTER TABLE `emails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member_has_ad`
--

DROP TABLE IF EXISTS `member_has_ad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `member_has_ad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ad_id` int(11) DEFAULT NULL,
  `connect_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `email_id` int(11) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `admin_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member_has_ad`
--

LOCK TABLES `member_has_ad` WRITE;
/*!40000 ALTER TABLE `member_has_ad` DISABLE KEYS */;
/*!40000 ALTER TABLE `member_has_ad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `connect_id` varchar(255) DEFAULT NULL,
  `connect_pwd` varchar(255) DEFAULT NULL,
  `elevation` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (3,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','1234567890','l_lagar','azerty',1),(4,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','1234567890','l_lagar','azerty',1),(5,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(6,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(7,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(8,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(9,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(10,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(11,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(12,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(13,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(14,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(15,'logan','lagarre-jumeau','logan.lagarre-jumeau@epitech.eu','12345678900','l_lagar','azerty',1),(16,'eloi','lafargue','eloi.laf@','120','el_lafar','azerty',1),(17,'eloi','lafargue','lel@lml.fr','098','l_lafar','azerty',NULL),(18,'Eloi','lafargue','eloi.something@gmail.tut','0987654','e_lafar','azerty',1);
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-30 16:59:14
