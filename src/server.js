import express from "express";

const app = express();
// express 관련 코드는 이 문장 아래에 작성해야 함

const PORT = 4000;

app.get("/", (req, res) => {
	console.log("Somebody is trying to go home.");
	// response 없이 request 종료
	return res.end();
});

const handleLogin = () => {
	return res.send("Login here!");
};

app.get("/login", handleLogin);

const handleListening = () =>
	console.log(`🍏 Server Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
