import { MODO } from "../Config/config.js";
import Factory from "../DAOs/Factory.js";
import distritosArr from "../utils/distritosArr.js"
import candidatosArr from "../utils/candidatosArr.js"

class EleccionApi { 
        constructor() {
            this.factory = Factory.factory(MODO)
         }
    
        create = async (voto) => { 
            try {
                let zonaExistente = distritosArr.includes(voto.distrito)
                let candidatoExistente = candidatosArr.includes(voto.candidato)

                if (!zonaExistente && !candidatoExistente) { 
                    throw new Error("Zona no correspondiente y candidato no válido.")
                }

                if (!zonaExistente) { 
                    throw new Error("Zona no correspondiente.")
                }

                if (!candidatoExistente) { 
                    throw new Error("Candidato no válido.")
                }

                const data = await this.factory.eleccionDao.create(voto)
                return await data;
            } catch (error) {
                throw error;
            }
    }
    
        getAll = async () => { 
            try {
                const data = await this.factory.eleccionDao.getAll()
                let votaciones = []
                candidatosArr.map(c => { 
                    votaciones.push(0)
                })
                if (data.length > 0) { 
                    data.map(voto => { 
                        let idx = candidatosArr.indexOf(voto.candidato)
                        votaciones[idx]++
                    })
                }

                let resultados = [
                    { "candidatoA": votaciones[0] }, 
                    { "candidatoB": votaciones[1] }, 
                    { "candidatoC": votaciones[2] }, 
                    { "enBlanco": votaciones[3] }, 
                ]

                return await resultados;
            } catch (error) {
                throw error;
                
            }
    }
    
}
    
    export default EleccionApi