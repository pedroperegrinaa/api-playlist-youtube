import axios from 'axios'

class Controller {
    async index(req, res) {

        const api = await axios.get('https://viacep.com.br/ws/01001000/json/')
            .then((res) => res.data)
            .catch((err) => console.log('erro: ' + err))

        res.status(200).json(api);
    }
}

export default new Controller();