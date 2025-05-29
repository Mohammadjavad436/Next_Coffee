import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return true;
        } else {
            if (!process.env.MONGO_URL) {
                throw new Error("MONGO_URL is not defined");
            }
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connect To DB Successfully :))");
        }
    } catch (err) {
        console.log("DB Connection has error ->", err);
    }
};

export default connectToDB;
