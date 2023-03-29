const mongoose = require("mongoose")
const companyModel = new mongoose.Schema({
    companyName :{
        type : String,
        require : true,
    
    },
    city : {
        type: String,
        require:true,
    },
    location :{
        type: String,
        require: true
    },
userNamID : {
    type : mongoose.Schema.Type,Objectid,
    ref:"userName",
    require: true
},
founded :{
    type: String,
    require: true,
},
userNamID:{
    type:
    mongoose.Schema.type.Objectid,
    ref:"userName",
    require:true
},
company_logo:{
    type:String,
}

})
companySchema.set('timestamps',true)
module.exports=mongoose.model('companydetail',companyShema)