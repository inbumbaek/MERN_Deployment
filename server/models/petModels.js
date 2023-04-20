const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required:[true, 'Pet name is required'],
        minLength:[3, 'The pet name must be 3 or more characters'],
        maxLength:[50, 'The pet name is too long']
    },
    petType: {
        type: String,
        required:[true, 'Type is required'],
        minLength:[3, 'The type must be 3 or more characters'],
        maxLength:[50, 'The type is too long']
    },
    petDescription: {
        type: String,
        required:[true, 'Description is required'],
        minLength:[3, 'The description must be 3 or more characters'],
        maxLength:[50, 'The description is too long']
    },
    petSkill1: {
        type: String,
    },
    petSkill2: {
        type: String,
    },
    petSkill3: {
        type: String,
    }
}, {timestamps:true})

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet