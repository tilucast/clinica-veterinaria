export default function validateDate(data, prop, option){
    let date = ''
    if(prop === 'entrega'){
        date = new Date(data.dataEntrega)
    } else if(prop === 'criacao'){
        date = new Date(data.dataCriacao)
    } else{
        date = new Date(data)
    }

    const minutes = String(date.getMinutes())
    const day = String(date.getDate())
    const month = String(date.getMonth()+1)
    const hour = String(date.getHours())
    const formatedHours = `${hour.length == 1 ? '0'+hour : hour}`
    const formatedDays = `${day.length == 1 ? '0'+day : day}`
    const formatedMinutes = `${minutes.length == 1 ? '0'+minutes : minutes}`
    const formatedMonth = `${month.length == 1 ? '0'+month : month}`

    const showDate = `${formatedMonth}/${formatedDays}/${date.getFullYear()} ${formatedHours}:${formatedMinutes}`
    const postDate = `${date.getFullYear()}-${formatedMonth}-${formatedDays}T${formatedHours}:${formatedMinutes}`

    const returnDate = option === 'show' ? showDate : postDate
    return returnDate
}