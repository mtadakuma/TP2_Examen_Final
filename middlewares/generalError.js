const generalError = (req, res, next) => { 
    res.status(404).send("not found")
}

export default generalError