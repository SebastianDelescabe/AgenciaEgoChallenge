import { getInfo } from "./getInfo";

export const getInfoById = async (id) => {
    const cars = await getInfo()// eslint-disable-next-line
    const carById = cars.find(car => car.id == id) //trae como string
    return carById
}