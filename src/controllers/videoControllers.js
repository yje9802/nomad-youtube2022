import Video from "../models/Video.js";

// video 데이터를 다 받아오고 render 해주기 위해 promise 사용 (callback과 유사하나 다름)
export const home = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
	const { id } = req.params;
	return res.render("watch", { pageTitle: `Watch` });
};

export const getEdit = (req, res) => {
	const { id } = req.params;
	return res.render("edit", { pageTitle: `Edit` });
};
export const postEdit = (req, res) => {
	const { id } = req.params;
	// form의 method를 POST로 설정하면, form에 입력된 데이터를 req.body로 전송
	const { title } = req.body;
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
			hashtags: hashtags.split(",").map((word) => `#${word}`),
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
