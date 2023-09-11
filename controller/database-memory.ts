import {randomUUID} from 'node:crypto'


export interface Video {
    title: string,
    description: string,
    duration: number
}

//map and set structure 
export class DataBaseMemory {
    #videos = new Map<string, Video>()
    

    create(video: Video){
        const videoId  = randomUUID()
        this.#videos.set(videoId, video)
    }

    update(id: string, video: Video){
        this.#videos.set(id, video)
    }

    delete(id: string){
        this.#videos.delete(id)
    }

    list(search?: string){
        const listSearch =   search || ''
        const list =  Array.from(this.#videos.entries()).map(([id, video]) => ({id, ...video}))
        const listFiltered = list.filter(video => video.title.includes(listSearch))
        return listFiltered
    }

 
}