const loggear = () => { 
    console.log('Utilizando una función de utils.')
}

const esTextoVacio = (text) => { 
    if (text == "") { 
        return true
    }
    return false
}

const esTextoAlfabetico = (text) => { 
    if (/^[a-zA-Z]+$/.test(text)) { 
        return true
    }
    return false
}

const esTextoNumerico = (text) => { 
    if (/^\d+$/.test(text)) { 
        return true
    }
    return false
}

const esMailValido = (text) => { 
    if (/^\S+@\S+\.\S+$/.test(text)) { 
        return true
    }
    return false
}


export { loggear, esTextoVacio, esTextoAlfabetico, esTextoNumerico, esMailValido }