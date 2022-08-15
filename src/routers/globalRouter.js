import express from "express";

import { join, login } from "../controllers/userControllers";
import { trending, search } from "../controllers/videoControllers";

// ./ 이거는 현재 위치
// ../ 이거는 현재 위치를 벗어난다는 의미

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// export Router
export default globalRouter;

// export default면 다른 파일에서 import 해도 이름을 맘대로 설정 가능
// default이기 때문에 뭘 import하는지 뻔하기 때문
