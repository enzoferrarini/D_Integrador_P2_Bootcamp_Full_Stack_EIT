import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6632b107f7d50bbd9b472503.mockapi.io/"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/toys")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

export const postProducts = async body => {

    // const dato=
    // {
    //     // "id": 22,
    //     "nombre": "PRUEBAAAAA",
    //     "descripcionCorta": "Autitos Hot Wheels 4U Unidades Auto Original Mattel",
    //     "descripcionLarga": "Este pack incluye cuatro autitos Hot Wheels originales de Mattel. Modelos variados y de alta calidad para disfrutar de la velocidad y la diversión.",
    //     "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_2X_964268-MLA53022171361_122022-F.webp",
    //     "precio": 699.99
    //   }
    const resp = await axiosInstance.post("/toys", body)
    return resp.data;
} 