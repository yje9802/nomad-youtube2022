*** middleware
request를 받고 유저에게 respond 하기 전에
거치는 함수. next()를 통해 다음 함수로 이어진다. 
당연히 return value는 없다. 
next()가 없다면 미들웨어가 아니다. 또는 조건에 따라 미들웨어 내에서 return으로 request를 종료할 수도 있다. 

```javascript
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

```
만약에 전역 미들웨어가 아닌 한 라우터에만 미들웨어를 쓰고 싶다면
`app.get("/hello", helloMiddleware, handleHello);`
이렇게 해주면 된다. 