const mongoose = require('mongoose')

const url = 'mongodb+srv://omprakashkjat19:Mp6RjeJoLEx9SvC3@test.fkf1bxq.mongodb.net/jwtPR'

const dbConnection = async () => {
    try {
        await mongoose.connect(url)
        console.log('Database Connected')
    } catch (error) {
        console.log(error)
    }
}
module.exports = dbConnection;