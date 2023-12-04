
import EleccionMemoryDao from "./Memory/EleccionMemoryDao.js"

class Factory { 
    constructor() {

     }

    static factory = (modo) =>{ 
        if (modo === "memory") { 
            return {
                eleccionDao: new EleccionMemoryDao()
            }
        }
    }
}

export default Factory