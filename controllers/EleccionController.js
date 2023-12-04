import EleccionApi from "../Api/EleccionApi.js"


class EleccionController { 
    constructor() { 
        this.eleccionApi = new EleccionApi()
    }

    create = async (req, res) => { 
        try {
            const { distrito, candidato } = req.body;
            if (!distrito || !candidato) throw new Error("Falta distrito o candidato.")

            const voto = {distrito, candidato}
            const data = await this.eleccionApi.create(voto);
            res.status(200).send({success: true, data: data, message:"voto cargado."})
        } catch (error) {
            res.status(400).send({success:false, message: error.message})
        }
    }

    getAll = async (req, res) => { 
        try {
            const data  = await this.eleccionApi.getAll();
            res.status(200).send({ generales: data });
        } catch (error) {
            res.status(400).send({message:error.message})
            
        }
    }
}

export default EleccionController