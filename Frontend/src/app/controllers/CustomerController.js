import HttpRequests from "../models/HttpRequests.js";
import CustomerView from '../views/CustomerView.js'
class CustomerController{
    constructor(){
        this.main = document.querySelector('.cliente')
        this.httpRequests = new HttpRequests()
        this.customerView = new CustomerView(this.main)
        this.singleAtt = localStorage.getItem('cliente')
        this.listAttendance()
    }

    async listAttendance(){
        try{
            const response = await this.httpRequests.listSingleAttendance(this.singleAtt)
            this.customerView._template(response)
            console.log(response)
        }catch(err){
            console.log(err)
        }
    }

    async _updateAttendance(){
        setTimeout(() => {
            
            const form = document.querySelector('.form')
            const status = document.querySelector('.status')
            const observacoes = document.querySelector('.observacoes')
            const date = document.querySelector('.date')

            form.addEventListener('submit', async (e) =>{
                const data = {
                    status: status.value,
                    observacoes: observacoes.value,
                    dataEntrega: date.value
                }
                const a = await this.httpRequests.updateAttendance(`http://localhost:3333/atendimentos/${this.singleAtt}`, data)
                console.log(a)
            })
        }, 200); 
    }
}

const a = new CustomerController()
a._updateAttendance()