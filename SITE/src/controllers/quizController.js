var quizModel = require("../models/quizModel");


function VerPerguntasQueUsuarioErrou(req, res) {
    var id = req.body.idServer;
    quizModel.VerPerguntasQueUsuarioErrou(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });

}


function kpiTentativas(req, res) {
    var id = req.body.idServer;
    quizModel.kpiTentativas(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });

}


function kpimedia(req, res) {
    quizModel.kpimedia().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado da segunda pergunta!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as respostas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function finishGame(req, res) {

    var id = req.body.idServer;
    var fkQuiz = req.body.fkQuiz;
    var totalCorrect = req.body.totalCorrect;
    var incorretas = req.body.incorretas;

    if (id == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (fkQuiz == undefined) {
        res.status(400).send("Seu email está undefined!");

    } else {
        quizModel.finishGame(id, fkQuiz, totalCorrect, incorretas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o quiz! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    kpiTentativas,
    VerPerguntasQueUsuarioErrou,
    finishGame,
    kpimedia

};

