import express, {
    Router
} from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import EmployeeRoute from "./Routes/employee-Routes.js"

dotenv.config()

const app = express();
const DB = process.env.MONGO_URL
const PORT = process.env.PORT || 3000

app.use(express.json());


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connect to DB")
}).catch((error) => {
    console.log(error)
})

// Book CRUD Router
app.use(EmployeeRoute)



app.use((req, res, next) => {
    res.status(404).json({
        error: "This Rout Not Found"
    });

    return;
});

app.listen(PORT, () => {
    console.log("App is running on port 3000");
});