const router = require('express').Router()

const Avisos = require('./Avisos')
const Aviso = require('./Avisos')

router.get('/', async (req,res)=>{
  const avisos = await Avisos.selecionarTodos()
  res.render('index', {avisos})
})

router.get('/avisos', async (req,res)=>{
  const avisos = await Avisos.selecionarTodos()
  res.render('avisos',{avisos})
})

router.get('/avisos/novo', (req,res)=>{
  res.render('formulario_avisos')
})

router.get("/avisos/editar/:id", async (req, res)=>{
  const id = req.params.id
  const aviso = await Avisos.selecionarAviso(id)
  res.render('formulario_avisos',{aviso})
})

router.post('/avisos/novo', async (req, res)=>{
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Aviso.salvar({titulo, data, mensagem})
  res.render('formulario_avisos', {msg})

})

router.post("/avisos/editar/:id", async (req,res)=>{
  const id = req.body.id
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Aviso.editar({titulo, data, mensagem}, id)

  if(msg.tipo === "sucesso"){
    res.redirect('/avisos')
  }else{
    res.render('formulario_avisos', {msg})
  }
})

router.get("/avisos/excluir/:id", async (req, res)=>{
  const id = Number(req.params.id)
  await Avisos.excluir(id)
  res.redirect('/avisos')
})

module.exports = router