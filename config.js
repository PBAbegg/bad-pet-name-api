require('dotenv').config();

module.exports = {
    PORT: 3030,
    DB: `mongodb+srv://parker:${process.env.MONGOPASSWORD}@cluster0-qaxjl.mongodb.net/bad_pet_names?retryWrites=true&w=majority`
}
