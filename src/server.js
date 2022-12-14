import express from "express";
import session from "express-session";

import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();
// express 관련 코드는 이 문장 아래에 작성해야 함

// view engine 적용
app.set("view engine", "pug");
// pug 파일을 찾아보는 디렉토리 변경
app.set("views", process.cwd() + "/src/views");
// express application understands html 'forms' and transforms them into javascript
app.use(express.urlencoded({ extended: true }));
// 라우터 전에 세션 설정
app.use(session({
	secret: "Hello",
	resave: true,
	'saveUninitialized: true'
}))
// 라우터 적용
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

// const handleLogin = (req, res) => {
// 	return res.send("Login here!");
// };
// app.get("/login", handleLogin);

export default app;
