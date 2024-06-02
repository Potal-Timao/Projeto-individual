create database corinthians;

use corinthians;

create table usuario(
idUsuario int primary key auto_increment,
time_que_torce varchar (45),
nome varchar(45),
telefone varchar(20),
email varchar(45),
senha varchar (45));

create table intermediaria(
fkUsuario int,
fkQuiz int,
respostasCertas int,
respostasErradas int,

foreign key (fkUsuario) references usuario(idUsuario),
foreign key (fkQuiz) references quiz (idQuiz) 

);

create table quiz(
idQuiz int primary key auto_increment,
nomeQuiz varchar(45));

select * from usuario;
select * from quiz;
select * from intermediaria;


-- exibe quantas vezes um usuario determinado fez o quiz.
 SELECT COUNT(*) as 'tentativas'FROM intermediaria where fkUsuario = 1;

-- media dos jogadores 
SELECT round(avg(respostasCertas),0) as 'Acertos' from intermediaria;

-- Exibir quantas respostas corretas e incorretas de um usuário específico do quiz.
  SELECT 
       sum(respostasCertas) AS 'total_respostas_corretas',
       sum(respostasErradas) AS 'total_respostas_incorretas'
       FROM intermediaria
       where fkUsuario = 1;
    



	