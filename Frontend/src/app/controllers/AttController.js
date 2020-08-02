import HttpRequests from '../models/HttpRequests.js'
import HomeView from '../views/HomeView.js'
export default class AttController{
    constructor(){
        this.httpRequests = new HttpRequests()
        this.main = document.querySelector('.cliente')
        this.homeView = new HomeView(this.main)
        this._updateView()
    }

    async _updateView(){
        const response = await this.httpRequests.listAttendances()
        return this.homeView._template(response)
    }

    _handleAttendance(){
        this.main.addEventListener('click', async e =>{
            const value = e.target.dataset.value
            if(e.target.className === 'deleted cursor-pointer'){

                const response = await this.httpRequests.deleteAttendance(`http://localhost:3333/atendimentos/${value}`)
                console.log(response)
                this._updateView()

            } else if(e.target.className === 'edit edited'){
                
                localStorage.setItem('cliente', value)
                const response = await this.httpRequests.listSingleAttendance(value)
                console.log(response)
                
            }
        })
    }

}

const attController = new AttController()
attController._handleAttendance()