import {randomUUID} from 'node:crypto'
import { sql } from './db'


export interface Video {
    title: string,
    description: string,
    duration: number
}

//map and set structure 
export class DatabasePostgres{
    #videos = new Map<string, Video>()
    

    async create(video: Video){
        const videoId  = randomUUID()
        
        await sql`insert into videos (id, title, description, duration) VALUES (${videoId}, ${video.title}, ${video.description}, ${video.duration})`
    }

    async update(id: string, video: Video){
        await sql`update videos set title = ${video.title}, description = ${video.description}, duration = ${video.duration} where id = ${id}`
    }

    async delete(id: string){
        await sql`delete from videos where id = ${id}`
    }

    async list(search?: string){
        const videoSearch = search || ''

       const videosSearch = await sql`select * from videos where title ilike ${'%' + videoSearch + '%'}`

       return videosSearch
    }

 
}