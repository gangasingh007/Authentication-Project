import mongoose from "mongoose"

export const dbconnct = async ()=>{
    try {
        console.log("MONGO_URI :",process.env.MONGO_URI);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("The Database has been connected",conn.connection.host);
    } catch (error) {
        console.log("There was an error connecting to the Database", error);
        process.exit(1) // status code 1 (1-exit the process)
    }
}