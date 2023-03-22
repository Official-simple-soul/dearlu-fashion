import mongoose from "mongoose";


const connectMongo = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGOOSE_URL)

        if(connection.readyState===1) {
            console.log('connected')
            return Promise.resolve(true)
            
        }
    } catch (error) {
        console.log('Not connected')
        return Promise.reject(error)
    }
}

export default connectMongo