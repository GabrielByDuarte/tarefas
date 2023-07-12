tarefa = require('../models/tarefaModel');
conexao = require('../models/conexao');

exports.getTarefas = async (req, res) => {
    try {
        resultado = await tarefa.mostrarTarefas();

        setTimeout(function () {
            return res.render('tarefas.ejs', { resultado });
        }, 1000);
    } catch (error) {
        console.error('Erro getTarefas', error);
    }
}

exports.addTarefa = function (req, res) {

    try {
        const { title, description } = req.body;

        tarefa.adicionarTarefa(title, description);
        setTimeout(function () {
            return res.redirect('/tarefas');
        }, 1000);



    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}
exports.editarTarefa = function (req, res) {
    const id = req.query.id;
    try {
        const { title, description } = req.body;

        if (title && description) {
            const { id } = req.body;

            console.log("Entrei editar" + id);

            tarefa.editarTarefa(id, title, description);
            setTimeout(function () {
                return res.redirect('/tarefas');
            }, 1000);

        }
        else {
            return res.redirect('/tarefas?editar=true&id=' + id);
        }

    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}

exports.excluirTarefa = function (req, res) {
    var id = req.query.id;
    console.log(id);
    try {
        tarefa.excluir(id);
        setTimeout(function () {
            return res.redirect('/tarefas');
        }, 1000);

    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}
exports.concluirTarefa = function (req, res) {
    var idFake = req.query.id;
    var checkFake = req.query.check;
    id = idFake.replace(/i/g, "");
    check = checkFake.replace(/i/g, "");
    try {

        tarefa.concluir(id, check);
        setTimeout(function () {
            return res.redirect('/tarefas');
        }, 1000);



    } catch (error) {
        console.error('Erro ao registrar usuario', error);
    }

}