const mongoose = require('mongoose');
const {Schema} = mongoose

const applicationSchema = new Schema({
  first: { 
    type: String, 
    unique: true 
},
  last: { 
    type: String, 
    unique: true  
},
  email: { 
    type: String, 
    unique: true 
},
  phone: { 
    type: String, 
    unique: true 
},
  resume: { 
    type: String, 
    unique: true 
},
  cover: { 
    type: String 
},
  message: { 
    type: String, 
    unique: true 
}
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;