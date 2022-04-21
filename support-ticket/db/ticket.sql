CREATE TABLE `support_ticket`.`ticket` (
`id` INT NOT NULL AUTO_INCREMENT,
`username` VARCHAR(45) NULL,
`ticketid` INT NULL,
`ticketQuestion` VARCHAR(45) NULL,
`ticket_date` DATE NULL,
PRIMARY KEY (`id`));