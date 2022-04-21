import { getInfo } from "./getInfo";

export const filterCars = async (filter) => {
    const cars = await getInfo();
    switch (filter) {
        case 'Autos':
            const sedanCars = cars.filter(car => car.segment === 'Sedan' || car.segment === 'Hatchback')
            return sedanCars
        case 'Pickups y Comerciales':
            const pickupsCars = cars.filter(car => car.segment === 'Pickups y Comerciales')
            return pickupsCars
        case 'SVUs y Crossovers':
            const suvsCars = cars.filter(car => car.segment === 'SUVs')
            return suvsCars
        default:
            return cars;
    }
}