import axios from "axios"

export const getInfo = async () => {
    const aPiInfo = await axios.get('https://challenge.agenciaego.tech/api/models/?format=json',{mode:'cors'})
    return aPiInfo.data
}