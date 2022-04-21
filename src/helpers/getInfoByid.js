import axios from "axios"

export const getInfoById = async (id) => {
    const car = await axios.get(`https://challenge.agenciaego.tech/api/models/${id}`)
    const carById = car.data
    console.log(carById)
    return carById
}