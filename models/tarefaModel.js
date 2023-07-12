express = require('express');

exports.mostrarTarefas = async (res, req) => {

    try {
        banco = require("./conexao");
        return await banco.query("SELECT * FROM `tarefa`");

    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }
}

exports.adicionarTarefa = async (title, description) => {
    try {
        banco = require("./conexao");
        return await banco.query("INSERT INTO `tarefa` (`id`,`titulo`,`descricao`,`conclusao`) VALUES (NULL,'" + title + "','" + description + "','2')");
    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}
exports.editarTarefa = async (id, title, description) => {
    try {
        banco = require("./conexao");
        return await banco.query("UPDATE `tarefa` SET `titulo` = '" + title + "', `descricao`='" + description + "' WHERE `tarefa`.`id` = " + id);
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
            banco = await require("./conexao");
            return await banco.query("UPDATE `tarefa` SET `conclusao` = '2' WHERE `tarefa`.`id` =" + id);
        } catch (error) {
            console.error('Erro ao registrar usuario', error);
        }

    }
    else {
        try {
            banco = require("./conexao");
            return await banco.query("UPDATE `tarefa` SET `conclusao` = '1' WHERE `tarefa`.`id` =" + id);
        } catch (error) {
            console.error('Erro ao registrar usuario', error);
        }
    }
}
