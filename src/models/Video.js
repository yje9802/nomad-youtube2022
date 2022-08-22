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

// 미들웨어는 모델 생성 전에 작성되어야 함

// 이 미들웨어는 save 이벤트 이전에 적용됨
// videoSchema.pre("save", async function () {
// 	// 해쉬태그가 하나의 문자열 째로 리스트에 들어가기 때문에 사실상 리스트의 원소는 1개
// 	this.hashtags = this.hashtags[0]
// 		.split(",")
// 		.map((word) => (word.startsWith("#") ? word : `#${word}`));
// });

// 대신 video static 사용
// Video.formatHashtags 이렇게 사용 가능
videoSchema.static("formatHashtags", function (hashtags) {
	return hashtags
		.split(",")
		.map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// 스키마 기반으로 모델 생성
const Video = mongoose.model("Video", videoSchema);

export default Video;
