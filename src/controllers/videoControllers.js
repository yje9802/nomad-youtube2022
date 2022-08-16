let videos = [
	{
		title: "Hello",
		rating: 5,
		comments: 2,
		createdAt: "2 minutes ago",
		view: 1,
		id: 1,
	},
	{
		title: "Jannabi",
		rating: 5,
		comments: 42,
		createdAt: "10 minutes ago",
		view: 100,
		id: 2,
	},
	{
		title: "Paul Kim",
		rating: 5,
		comments: 34,
		createdAt: "4 minutes ago",
		view: 77,
		id: 3,
	},
];

export const trending = (req, res) => {
	return res.render("home", { pageTitle: "Home", videos });
};

export const watch = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("watch", { pageTitle: `Watch ${video.title}`, video });
};

export const getEdit = (req, res) => {
	const { id } = req.params;
	const video = videos[id - 1];
	return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = (req, res) => {
	const { id } = req.params;
	const { title } = req.body;
	videos[id - 1].title = title;
	return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => res.send("Search");

export const getUpload = (req, res) => {
	return res.render("Upload", { pageTitle: `Upload Video` });
};
export const postUpload = (req, res) => {
	const newVideo = {
		title: req.body.title,
		rating: 0,
		comments: 0,
		createdAt: "just now",
		view: 1,
		id: videos.length + 1,
	};
	videos.push(newVideo);
	return res.redirect("/");
};

export const deleteVideo = (req, res) => res.send("Delete Video");
