/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 80011
Source Host           : localhost:3306
Source Database       : tacells

Target Server Type    : MYSQL
Target Server Version : 80011
File Encoding         : 65001

Date: 2018-06-23 20:42:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tacells
-- ----------------------------
DROP TABLE IF EXISTS `tacells`;
CREATE TABLE `tacells` (
  `id` int(11) NOT NULL,
  `mcc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mnc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tac` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cluster` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `zhanhao` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `enodebname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `enodebtype` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lngb` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `latb` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cellid` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `sectorid` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `cellname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pindian` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `celltype` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `lngc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `latc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pci` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `prach` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `azi` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `mtilt` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `etilt` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `anthigh` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `antgain` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `waimao` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `anttype` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `hbwd` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `vbwd` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `srhigh` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `covertype` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `pantgain` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `rfpower` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `rspower` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `timeslotsw` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nbpreused1` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `fpsafedis` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `jizhanleixing` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `quyu` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `scene3` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `scene25` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `ctime` timestamp NULL DEFAULT NULL,
  `updatetime` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `indexft` (`zhanhao`,`enodebname`,`cellname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
