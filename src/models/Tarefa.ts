import * as enums from '../utils/enums/Tarefa'

class Tarefa {
    titulo: string
    prioridade: enums.Prioridade
    status: enums.Status
    descricao: string
    id: number

    constructor(
        titulo: string,
        prioridade: enums.Prioridade,
        status: enums.Status,
        descricao: string = '',
        id: number = Math.floor(Math.random() * 1000)
    ) {
        this.titulo = titulo
        this.prioridade = prioridade
        this.status = status
        this.descricao = descricao
        this.id = id
    }
}

export default Tarefa
