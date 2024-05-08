import express from "express";
//make sure to use the file extensions when importing
import postRouter from "./routes/posts.js";
import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";

//set up multer to handle files in middleware
//serve static files to be able to display them on the client
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/posts", postRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/users", usersRouter);

app.listen(8800, () => {
	console.log("server is working");
});
