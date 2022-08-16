import express from "express";

import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
// express 관련 코드는 이 문장 아래에 작성해야 함

const PORT = 4000;

// view engine 적용
app.set("view engine", "pug");
// pug 파일을 찾아보는 디렉토리 변경
app.set("views", process.cwd() + "/src/views");
// express application understands html 'forms' and transforms them into javascript
app.use(express.urlencoded({ extended: true }));
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
