const router = require('express').Router()

router.get('/',(req,res)=>{
  res.send("Pag Principal")
})

router.get('/avisos',(req,res)=>{
  res.send("Avisos Cadastrados")
})

router.get('/avisos/novo',(req,res)=>{
  res.render('formulario_avisos')
})

module.exports = router