import express from 'express' //Framework de JS
import mongoose from 'mongoose' //Libreria de mongoDB

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

mongoose.connect('mongodb://nico:password@monguito:27017/miapp?authSource=admin') //En vez de localhost = monguito. Porque asi se llama la imagen (contenedor) que tiene a mondoDB

// En esta ruta (principal) solamente lista los datos
app.get('/', async (_req, res) => {
  console.log('listando... chanchitos...')
  const animales = await Animal.find();
  return res.send(animales)
})

// Solamente con entrar a esta ruta debe ser capaz de crear lo que le indicamos
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
