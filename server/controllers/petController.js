const Pet = require('../models/petModels');

module.exports = {
    findAllPets: (req, res) => {
        Pet.find()
            .then((allPets) => {
                res.status(200).json(allPets)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    createPet: (req, res) => {
        Pet.create(req.body)
            .then((newPet) => {
                res.status(200).json(newPet)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOnePet: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then((onePet) => {
                res.status(200).json(onePet)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updatePet: (req, res) => {
        Pet.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true, runValidators:true})
            .then((updatedPet) => {
                res.json({show:updatedPet})
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deletePet: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
        .then((result) => {
            res.status(200).json(result)
        })
        .catch((err) => {
            res.status(400).json(err)
        }); 
    }
}