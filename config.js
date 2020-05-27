module.exports = {
    PORT: 3000,
    BD: `mongodb+srv://${(process.env.MONGOUSERNAME)}:${(process.env.MONGOPASSWORD)}@cluster0-tfxfn.mongodb.net/badpetname?ret`
}