import express from "express";
import {
	addPost,
	deletePost,
	getPost,
	getPosts,
	updatePost,
} from "../controllers/posts.js";
import multer from "multer";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "../client/public/uploads");
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + file.originalname);
	},
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", upload.single("file"), addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
export default router;
