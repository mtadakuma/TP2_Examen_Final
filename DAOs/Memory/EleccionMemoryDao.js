class EleccionMemoryDao { 
    constructor() {
        this.votos = [
            {
                distrito: "zona1", 
                candidato: "candidatoA"
            },
            {
                distrito: "zona2", 
                candidato: "candidatoB"
            }]
     }

    create = async (voto) => { 
        try {
            this.votos.push(voto)
            return await voto;
        } catch (error) {
            throw error;
        }
    }

    getAll = async () => { 
        try {
            const info = await this.votos
            return info;
        } catch (error) {
            throw error;
        }
    }
}

export default EleccionMemoryDao