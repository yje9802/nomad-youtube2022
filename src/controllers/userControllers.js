import User from "../models/User";

export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = async (req, res) => {
	const { name, username, email, password1, password2, location } = req.body;
	// username이나 email이 이미 사용 중인 것인지 체크
	const exists = await User.exists({
		$or: [{ username }, { email }],
	});
	// 비밀번호 확인
	if (password1 !== password2) {
		return res.status(400).render("join", {
			pageTitle: "Join",
			errorMessage: "Password confirmation does not match.",
		});
	}
	if (exists) {
		return res.status(400).render("join", {
			pageTitle: "Join",
			errorMessage: "This Username/Email is already used.",
		});
	}

	await User.create({
		name,
		username,
		email,
		password: password1,
		location,
	});
	return res.redirect("/login");
};

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const login = (req, res) => res.send("Login");

export const logout = (req, res) => res.send("Logout");

export const see = (req, res) => res.send("See User");
// default가 아닌 export면
// 다른 파일에서 import 할 때 import 하려는 모듈 이름을 동일하게 작성해줘야 함
// export 하는게 많아서 뭘 import 하는지 모르기 때문에 정확히 어느 함수를 import 할 지 명확하게 말해줘야 하기 때문
