export default class HttpRequests{
    constructor(){

    }

    async gettingResponse(url){
        try{
            const response = await fetch(url)
            return response.json()
        }catch(err){
            throw new Error(err)
        }
    }

    async listSingleAttendance(id){
        
        const response = await this.gettingResponse(`http://localhost:3333/atendimentos/${id}`)
        return response
        
    }

    async listAttendances(){
        
        const response = await this.gettingResponse('http://localhost:3333/atendimentos')
        return response
        
    }

    async postAttendance(url, data){

        const response = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data)
        })
        return response.json()
        
    }

    async updateAttendance(url, data){
        
        const response = await fetch(url, {
            method: 'PATCH', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        })
        return response.json()
        
    }

    async deleteAttendance(url){
        
        const response = await fetch(url, {
            method: 'DELETE', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer',
        })
        return response.json()
        
    }
}