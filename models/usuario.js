var mongoose = require('mongoose');


var ClienteSchema = mongoose.Schema({
    "nombre":{
        type: String, 
        required: true
    },
    "identificacion": {
        type: String, 
        required: true
    },
    "telefono":{
        type: number,
        required: true
    }
});

var Cliente = module.exports = mongoose.model("Cliente", ClienteSchema);

module.exports.getClientes = function(callback, limit){
 Cliente.find(callback).limit(limit);
}
module.exports.getCliente = function(id, callback,limit){
    Cliente.findById(id).limit(limit);
}