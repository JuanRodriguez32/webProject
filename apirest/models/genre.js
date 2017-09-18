var mongoose = require('mongoose');

var GenreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model("Genre", GenreSchema);

module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);
}