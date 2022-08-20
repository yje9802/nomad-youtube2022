import Video from "../models/Video.js";

export const home = (req, res) => {
	// 데이터베이스에서 데이터를 모두 받아올 때까지 기다림 callback 사용
	Video.find({}, (error, videos) => {
		console.log("errors", error);
		console.log("videos", videos);
	});
	return res.render("home", { pageTitle: "Home" });
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
export const postUpload = (req, res) => {
	return res.redirect("/");
};

export const deleteVideo = (req, res) => res.send("Delete Video");
