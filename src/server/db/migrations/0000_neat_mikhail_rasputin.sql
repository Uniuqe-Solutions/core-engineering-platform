CREATE TABLE `user` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`password` varchar(256) NOT NULL,
	`role` varchar(50) NOT NULL DEFAULT 'user',
	`joining_date` timestamp DEFAULT CURRENT_TIMESTAMP,
	`educational` varchar(256),
	`phone_number` varchar(20),
	`address` varchar(256),
	`work_id` varchar(256),
	`graduation_year` varchar(4),
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
