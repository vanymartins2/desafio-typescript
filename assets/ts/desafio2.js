"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
const pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
const pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
const pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
const pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
