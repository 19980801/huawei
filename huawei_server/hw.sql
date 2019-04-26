SET names UTF8;
DROP DATABASE IF EXISTS hw;
CREATE DATABASE hw CHARSET=UTF8;
USE hw;
CREATE TABLE hw_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(128),
    email VARCHAR(32),
    phone CHAR(11),
    avatar VARCHAR(128),
    user_name VARCHAR(10),
    gender VARCHAR(2)
);
INSERT INTO hw_user VALUES
(1,'tom',md5('123456'),'920242270@qq.com',15739454540,null,'郑州',1),
(2,'haha',md5('123456'),'920242270@qq.com',15739454540,null,'郑州',0),
(3,'xixi',md5('123456'),'920242270@qq.com',15739454540,null,'郑州',1);