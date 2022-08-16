export const trending = (req, res) => {
	const videos = [
		{
			title: "Hello",
			rating: 5,
			comments: 2,
			createdAt: "2 minutes ago",
			view: 59,
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
	return res.render("home", { pageTitle: "Home", videos });
};

export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
