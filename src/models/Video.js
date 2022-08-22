import mongoose from "mongoose";
// 데이터베이스 스키마 설정
const videoSchema = new mongoose.Schema({
	title: { type: String, required: true, trim: true, maxLength: 80 },
	description: { type: String, required: true, trim: true, maxLength: 140 },
	// createdAt은 필수요소이면서 default 값이 있음
	createdAt: { type: Date, required: true, default: Date.now },
	hashtags: [{ type: String, trim: true }],
	meta: {
		views: { type: Number, required: true, default: 0 },
		rating: { type: Number, required: true, default: 0 },
	},
});
// 스키마 기반으로 모델 생성
const Video = mongoose.model("Video", videoSchema);

export default Video;
