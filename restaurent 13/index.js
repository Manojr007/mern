const mongoose = require("mongoose");
mongo_string =  "mongodb+srv://manojrr135:Manojr%40007@cluster0.ba8jp.mongodb.net/restaurant";
mongoose.connect(mongo_string);
const db = mongoose.connection;

db.on(
    "error",
    (err)=>{
        console.error(err);
        process.exit();
    }
);

db.on(
    "open",
    ()=>{
        console.log("Connected to MongoDB");
        }
);
const Hotel = db.model("restraunt", {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    
    required: true
  },
  type: {
    type: String,
    enum: ['chinese', 'thai', 'continental', 'south', 'north', 'andhra'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    //numbder between 1-5
    type: Number,
    required: true

  },
  topFood: {
    type: String,
    required: true
  }
})



const CreateRestraunt = async() =>{
  try {
    const data = new Hotel({
      name: "empire",
      password: "123456",
      type: "south",
      location: "banglore",
      rating: 5,
      topFood: "roti"
    }); 
    await data.save();
    console.log(data);
  } catch(err) {
    console.log("Error creating db", err);
    process.exit();
  }
}

const UpdateRestraunt = async() =>{
  try {
    const data = await Hotel.findOneAndUpdate({
      "name": "empire"
    },
    {
      "location": "Mysuru"
    },
    {
      new: true
    });
    console.log(data);

  } catch(err) {
    console.log("Error updating db", err);
  }
}

const DeleteRestraunt = async() =>{
  try {
    const data = await Hotel.findOneAndDelete({
      "name": "Bamboo Garden"
    });
    console.log(data);

  } catch(err) {
    console.log("Error deleting db", err);

  }
}

const GetRestraunt = async() =>{
  try {
    const data = await Hotel.findOne({
      "name": "Bamboo Garden"
    });
    console.log(data);

  } catch(err) {
    console.log("Error fetching db", err);

  }
}

const GetRestrauntList = async() =>{
  try {
    const data = await Hotel.find();
    console.log(data);
  } catch(err) {
    console.log("Error fetching db", err);
  }
}

//CreateRestraunt();
//UpdateRestraunt();
//DeleteRestraunt();
//GetRestraunt();
GetRestrauntList();