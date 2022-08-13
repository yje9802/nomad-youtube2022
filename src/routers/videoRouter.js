import express from "express";

import { see } from "../controllers/videoControllers";
import { edit, deleteVideo, upload } from "../controllers/videoControllers";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
// upload가 제일 위에 와야 함. /:id 아래 위치하면 /upload에서 upload를 id로 여기게 됨
// :id는 숫자만 가능하도록 해야함 => 정규표현식을 활용하자 => 그러면 upload가 맨 뒤로 가도 됨
// videoRouter.get("/:id", see);
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;
