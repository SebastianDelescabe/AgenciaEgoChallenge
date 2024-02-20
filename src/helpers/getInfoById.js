import { byId } from '../assets/index'

export const getInfoById = async (id) => {
    let findedCar = byId.filter(carInfo => {
        if (carInfo.id == id) {
            return carInfo
        }
    })
    return findedCar
}