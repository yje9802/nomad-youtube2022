export const trending = (req, res) => {
	return res.sent("Trending Videos");
};

export const see = (req, res) => res.send("Watch Video");
export const edit = (req, res) => res.send("Edit Video");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
