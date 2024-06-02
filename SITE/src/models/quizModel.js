var database = require("../database/config")

function finishGame(id, fkQuiz, totalCorrect, incorretas) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function VerPontuacaoDosUsuarios(): ", id, fkQuiz, totalCorrect, incorretas)
    var instrucaoSql =
        `insert into intermediaria values 
        (${id}, ${fkQuiz}, ${totalCorrect}, ${incorretas} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function kpiTentativas(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function VerPerguntasQueUsuarioErrou(): ", id);


    var instrucaoSql = `
    SELECT 
       COUNT(*) as 'tentativas'
       FROM intermediaria
       where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function kpimedia() {
    console.log("ACESSEI O DASH MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function kpi1()");
    var instrucaoSql1 = `
   
    SELECT round(avg(respostasCertas),0) as 'Acertos' from intermediaria;`

    console.log("Executando as instrução SQL: \n" + instrucaoSql1);
    return database.executar(instrucaoSql1);
}

function VerPerguntasQueUsuarioErrou(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function VerPerguntasQueUsuarioErrou(): ", id);


    var instrucaoSql = `
    SELECT 
       sum(respostasCertas) AS 'total_respostas_corretas',
       sum(respostasErradas) AS 'total_respostas_incorretas'
       FROM intermediaria
       where fkUsuario = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {

    VerPerguntasQueUsuarioErrou,
    kpiTentativas,
    finishGame,
    kpimedia

};