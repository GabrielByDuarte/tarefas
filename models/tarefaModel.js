express = require('express');

exports.mostrarTarefas = async (res, req) => {

    try {
        banco = require("./conexao");
        selecionando = await banco.query("SELECT * FROM `tarefa`");
        return await selecionando;

    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }
}

exports.adicionarTarefa = async (title, description) => {
    try {
        banco = require("./conexao");
        adiconando = await banco.query("INSERT INTO `tarefa` (`id`,`titulo`,`descricao`,`conclusao`) VALUES (NULL,'" + title + "','" + description + "','2')");
        return await adiconando;
    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}
exports.editarTarefa = async (id, title, description) => {
    try {
        banco = require("./conexao");
        editando = await banco.query("UPDATE `tarefa` SET `titulo` = '" + title + "', `descricao`='" + description + "' WHERE `tarefa`.`id` = " + id);
        return await editando;
    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}

exports.excluir = async (id) => {

    try {
        banco = require("./conexao");
        excluindo = await banco.query("DELETE FROM `tarefa` WHERE `tarefa`.`id` =" + id);
        return await excluindo;
    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}
exports.concluir = async (id, check) => {
    if (check == 1) {
        try {
            banco = require("./conexao");
            concluindo = await banco.query("UPDATE `tarefa` SET `conclusao` = '2' WHERE `tarefa`.`id` =" + id);
            return await concluindo;
        } catch (error) {
            console.error('Erro ao registrar usuario', error);
        }

    }
    else {
        try {
            banco = require("./conexao");
            concluindo = await banco.query("UPDATE `tarefa` SET `conclusao` = '1' WHERE `tarefa`.`id` =" + id);
            return await concluindo;
        } catch (error) {
            console.error('Erro ao registrar usuario', error);
        }
    }
}
