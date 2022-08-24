import mongoose from "mongoose";

// mongodb 연결
mongoose.connect("mongodb://127.0.0.1:27017/nomad-youtube2022", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const handleOpen = () => console.log("🥦 Conncected to DB");
const db = mongoose.connection;
db.on("error", (error) => console.log("DB Error", error));
// 첫 연결 한 번만 실행
db.once("open", handleOpen);
