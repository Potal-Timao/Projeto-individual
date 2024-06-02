var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");


router.post("/kpiTentativas", function (req, res) {
    quizController.kpiTentativas(req, res);
})
router.get("/kpimedia", function (req, res) {
    quizController.kpimedia(req, res);
})

router.post("/VerPerguntasQueUsuarioErrou", function (req, res) {
    quizController.VerPerguntasQueUsuarioErrou(req, res);
})

router.post("/finishGame", function (req, res) {
    quizController.finishGame(req, res);
});

module.exports = router;

