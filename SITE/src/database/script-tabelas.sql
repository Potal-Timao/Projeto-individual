create database corinthians;

use corinthians;

create table usuario(
idUsuario int primary key auto_increment,
time_que_torce varchar (45),
nome varchar(45),
telefone varchar(20),
email varchar(45),
senha varchar (45));



create table quiz(
idQuiz int primary key auto_increment,
perguntas_certas int,
perguntas_erradas int,
fkUsuario int, 
foreign key (fkUsuario) 
references usuario (idUsuario));

select * from usuario; 






