import { credentialsWOO, credentialsWP, url } from "../config";
var urlParams = new URLSearchParams(window.location.search);
var lang = urlParams.get('lang');
let timestampInSeconds = Math.floor(Date.now() / 1000)

// export const getSearchGlobal = async (props) => {
//     const { searching } = props
//     try {
//         const response = await fetch(`${url}/wp-json/de3/v1/generalSearch?search=${searching}&lang=${lang}`);
//         if (!response.ok) {
//             throw new Error(`La solicitud falló con estado ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error durante la solicitud:', error);
//         throw error; // Puedes manejar el error aquí o lanzarlo nuevamente para que sea manejado por el llamador
//     }
// }