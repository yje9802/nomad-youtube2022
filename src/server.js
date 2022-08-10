import express from "express";

const app = express();
// express 관련 코드는 이 문장 아래에 작성해야 함

const PORT = 4000;

const exampleMiddleware = (req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next();
};
const privateMiddleware = (req, res, next) => {
	const url = req.url;
	if (url === "/protected") {
		// kill the connection
		return res.send("<h1>Not Allowed</h1>");
	}
	console.log("Allowed");
	next();
};
// 모든 라우터에 적용되는 global middleware
// 순서가 중요
app.use(exampleMiddleware);
app.use(privateMiddleware);

app.get("/", (req, res) => {
	console.log("Somebody is trying to go home.");
	// response 없이 request 종료
	return res.end();
});

const handleLogin = () => {
	return res.send("Login here!");
};
app.get("/login", handleLogin);

const handleProtected = (req, res) => {
	return res.send("Welcome to the private rounge.");
};
app.get("/protected", handleProtected);

const handleListening = () =>
	console.log(`🍏 Server Listening on http://localhost:${PORT}`);
app.listen(PORT, handleListening);
