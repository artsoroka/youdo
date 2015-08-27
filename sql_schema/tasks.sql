SET foreign_key_checks = 0; 

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  id int auto_increment PRIMARY KEY, 
  parent_id int, 
  title varchar(255)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 DEFAULT COLLATE utf8_unicode_ci; 

INSERT INTO categories (title, parent_id) VALUES ('cat 1', 0); 
INSERT INTO categories (title, parent_id) VALUES ('cat 2', 0);
INSERT INTO categories (title, parent_id) VALUES ('subcat', 1); 
 
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  id int auto_increment PRIMARY KEY, 
  author_id int NOT NULL,
  category_id int NOT NULL, 
  title varchar(255), 
  description text, 
  created_at int,
  updated_at int, 
  FOREIGN KEY (author_id) REFERENCES users(id), 
  FOREIGN KEY (category_id) REFERENCES categories(id)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8 DEFAULT COLLATE utf8_unicode_ci; 

SET foreign_key_checks = 1; 

INSERT INTO tasks (author_id, category_id, title, description) VALUES (1,1,'test task', 'task description');
INSERT INTO tasks (author_id, category_id, title, description) VALUES (1,2,'sub task', 'sub task '); 