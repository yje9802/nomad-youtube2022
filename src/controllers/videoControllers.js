import Video, { formatHashtags } from "../models/Video.js";

// video 데이터를 다 받아오고 render 해주기 위해 promise 사용 (callback과 유사하나 다름)
export const home = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (video) {
		return res.render("watch", { pageTitle: video.title, video });
	}
	return res.render("404", { pageTitle: "Video Not Found" });
};

export const getEdit = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (!video) {
		return res.render("404", { pageTitle: "Video Not Found" });
	}
	return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = async (req, res) => {
	const { id } = req.params;
	// form의 method를 POST로 설정하면, form에 입력된 데이터를 req.body로 전송
	// const { title } = req.body;
	const { title, description, hashtags } = req.body;
	// exist 여부가 boolean으로 반환
	const video = await Video.exists({ _id: id });
	if (!video) {
		return res.render("404", { pageTitle: "Video Not Found" });
	}
	await Video.findByIdAndUpdate(id, {
		title,
		description,
		hashtags: Video.formatHashtags(hashtags),
	});
	return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
	return res.render("Upload", { pageTitle: `Upload Video` });
};
export const postUpload = async (req, res) => {
	const { title, description, hashtags } = req.body;
	// video는 mongoose 모델
	try {
		const video = new Video({
			title: title,
			description,
			hashtags: Video.formatHashtags(hashtags),
		});
		// video가 db에 다 저장될 때까지 기다림
		await video.save();
		return res.redirect("/");
	} catch (error) {
		return res.render("upload", {
			pageTitle: "Upload Video",
			errorMessage: error._message,
		});
	}

	// 아니면
	// await Video.create({
	// 	...
	// })
	// 이렇게 해도 같은 결과
};

export const deleteVideo = (req, res) => res.send("Delete Video");
