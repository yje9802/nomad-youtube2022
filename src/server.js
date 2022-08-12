import express from "express";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
// express 관련 코드는 이 문장 아래에 작성해야 함

const PORT = 4000;

// 라우터 적용
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// const handleLogin = (req, res) => {
// 	return res.send("Login here!");
// };
// app.get("/login", handleLogin);

const handleListening = () =>
	console.log(`🍏 Server Listening on http://localhost:${PORT}`);
app.listen(PORT, handleListening);
