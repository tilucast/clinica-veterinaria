import HttpRequests from '../models/HttpRequests.js'
import validateDate from '../helpers/validateDate.js'
class PostController{
    constructor(){
        this.httpRequests = new HttpRequests()
    }

    _postAttendance(){
        const selectForm = document.querySelector('form')

        selectForm.addEventListener('submit', async (e) => {
            e.preventDefault()
            const form = {
                cliente: selectForm.cliente.value,
                pet: selectForm.pet.value,
                servico: selectForm.servico.value,
                status: selectForm.status.value,
                observacoes: selectForm.observacoes.value,
                dataEntrega: validateDate(selectForm.dataEntrega.value, 'data', 'show')
            }

            const a = await this.httpRequests.postAttendance('http://localhost:3333/atendimentos', form)
            console.log(a.errors)
        })
    }
}

const a = new PostController()
a._postAttendance()