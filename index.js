const express = require('express');
const tarefaController = require('./controllers/tarefaController');
const app = express();
const ejs = require('ejs');
const router = express.Router();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
// app.get('/tarefas', router.get("/tarefas", async (req, res) => {
app.get('/tarefas/', tarefaController.getTarefas);

    // function obterValor() {
    //     return new Promise(function (resolve, reject) {
    //         setTimeout(function () {
    //             var resultado = tarefaController.getTarefas(); // Valor que você deseja esperar
    //             resolve(resultado); // Resolve a Promise com o valor
    //         }, 2000); // Tempo de espera em milissegundos (2 segundos neste exemplo)
    //     });
    // }
    // resultado = await obterValor();
    // try {
    //     // resultado = tarefaController.getTarefas();]
    //     setTimeout(function () {
    //         // console.log(resultado);
    //         return res.render('tarefas.ejs', { resultado });
    //     }, 1000); //

    // } catch (error) {
    //     console.error('Erro ao registrar usuario', error);
    // }



    // resultado = await tarefaController.getTarefas();
    // // console.log(resultado);
    // if (resultado) {
    //     return res.render('tarefas.ejs', { resultado });
    // } else {
    //     if (resultado) {
    //         return res.render('tarefas.ejs', { resultado });
    //     }
    // }



// }));
app.get('/', (req, res) => {
    res.redirect('/tarefas');
});
// app.get('/tarefas', router.get("/tarefas"));
// app.get('/tarefas', router.get("/tarefas"));
// app.get('/tarefas', router.get("/tarefas"));
// app.get('/tarefas', router.get("/tarefas"));
app.get('/tarefas/excluir', tarefaController.excluirTarefa);
app.get('/tarefas/concluir', tarefaController.concluirTarefa);
app.post('/tarefas/editar', tarefaController.editarTarefa);
app.post('/tarefas/adicionar', tarefaController.addTarefa);

// app.get('/tarefas', tarefaController.adicionarTarefas);



app.listen(port, () => {
    // console.log(`Servidor rodando em http://localhost:${port}`);
});