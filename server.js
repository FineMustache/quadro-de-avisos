//importar as dependências
const express = require('express')
const bodyParser = require('body-parser')

//importando as rotas do aviso
const routerAvisos = require('./components/avisos/AvisosController')

//inicializando o express
const app = express()

//configurar a view engine e configurar a pasta pública
app.set('view engine', 'ejs')
app.use(express.static('public'))

//configurar o body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//escutar a porta
app.listen(3000)


//Driver para conexão -> mysql ou mysql2
//Query Builder -> Knex

//SELECT * FROM avisos