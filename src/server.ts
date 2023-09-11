import {fastify} from 'fastify';
import { DataBaseMemory, Video } from '../controller/database-memory';
import { DatabasePostgres } from '../controller/database-postgres';
import { Process } from '../env';

fastify({logger: true})


const server = fastify()
//const database = new DataBaseMemory()
const database = new DatabasePostgres()


server.post('/videos', async (request, reply) => {
  const {title, description, duration} = request.body  as Video

  await database.create({title, description, duration})
  return reply.code(201).send()
})

server.get('/videos', async (request, reply) => { 
  const {search} = request.query as {search: string}
 
  const videos = await database.list(search)
  
  return videos
})

server.put('/videos/:id', async (request, reply) => { 
  const {id} = request.params  as {id: string}
  const {description,duration,title} = request.body as Video

  await database.update(id, {description,duration,title})

  return reply.code(204).send()

})

server.delete('/videos/:id', async (request, reply) => {
  const {id} = request.params as {id: string}

  await database.delete(id)

  return reply.code(204).send()

}) 


server.listen({port: Process?.PORT ?? 3333},() => {
  console.log('listening on port 3333')
})