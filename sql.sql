CREATE DATABASE IF NOT EXISTS `wuzi` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `wuzi`;

-- Copiando estrutura para tabela wuzi.eco
CREATE TABLE IF NOT EXISTS `eco` (
  `money` text DEFAULT NULL,
  `xp` text DEFAULT NULL,
  `lvl` text DEFAULT NULL,
  `id` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando estrutura para tabela wuzi.guild
CREATE TABLE IF NOT EXISTS `guild` (
  `prefix` varchar(5) DEFAULT NULL,
  `lang` text DEFAULT NULL,
  `id` varchar(18) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela wuzi.guild: ~2 rows (aproximadamente)

