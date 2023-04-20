const PetController = require('../controllers/petController');

module.exports = app => {
    app.get('/api/allPets', PetController.findAllPets);
    app.post('/api/newPet', PetController.createPet);
    app.get('/api/onePet/:id', PetController.findOnePet);
    app.put('/api/updatePet/:id', PetController.updatePet);
    app.delete('/api/deletePet/:id', PetController.deletePet);
}