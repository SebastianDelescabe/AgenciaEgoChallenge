import { getInfo } from "./getInfo"

export const orderCars = async (order, cars) => {
    switch (order) {
        case 'cheapCars':
            const cheapCars = cars.sort((b, a) => b.price - a.price)
            return cheapCars
        case 'expensiveCars':
            const expensiveCars = cars.sort((b, a) => a.price - b.price)
            return expensiveCars
        case 'newCars':
            const newCars = cars.sort((b, a) => b.year - a.year)
            return newCars
        case 'oldCards':
            const oldCars = cars.sort((b, a) => a.year - b.year)
            return oldCars
        case 'nothing':
            const allCars = await getInfo();
            return allCars
        default:
            return
    }
}