import axios from 'axios';

const homeAction = (data) => async (dispatch) => {
    try {
        const options = {
            method: 'GET',
            url: 'https://youtube-v311.p.rapidapi.com/playlistItems/',
            params: {
                part: 'snippet',
                playlistId: 'PLOU2XLYxmsILMUsDRrVoRRlL29p8LHFIT',
                q: data,
                maxResults: '50'
            },
            headers: {
                'X-RapidAPI-Key': '1c3233e1ffmshafb295db45c13dep156650jsn3434c4f6df84',
                'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
            }
        };

        await axios.request(options).then(function (response) {
            dispatch({
                type: "GET_VIDEOS",
                payload: response.data
            }).catch(function (error) {
                console.error(error);
            });

        });
    } catch (error) {
        console.log(error)
    }
}
export default homeAction;