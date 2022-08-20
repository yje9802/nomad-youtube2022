import mongoose from "mongoose";
// 데이터베이스 스키마 설정
const videoSchema = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: Date,
	hashtags: [{ type: String }],
	meta: {
		views: Number,
		rating: Number,
	},
});
// 스키마 기반으로 모델 생성
const Video = mongoose.model("Video", videoSchema);

export default Video;
