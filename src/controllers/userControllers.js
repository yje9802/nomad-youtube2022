import User from "../models/User";
import bcrypt from "bcrypt";

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
	try {
		await User.create({
			name,
			username,
			email,
			password: password1,
			location,
		});
		return res.redirect("/login");
	} catch (error) {
		return res.status(404).render("join", {
			pageTitle: "Join",
			errorMessage: error._message,
		});
	}
};

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const getLogin = (req, res) =>
	res.render("login", { pageTitle: "Log In" });
export const postLogin = async (req, res) => {
	const { username, password } = req.body;
	// check if account exists
	const user = await User.findOne({ username });
	if (!user) {
		return res.status(400).render("login", {
			pageTitle: "Log In",
			errorMessage: "An account with this username does not exist.",
		});
	}
	// check if password correct
	const ok = await bcrypt.compare(password, user.password);
	if (!ok) {
		return res.status(400).render("login", {
			pageTitle: "Log In",
			errorMessage: "Wrong password",
		});
	}
	return res.redirect("/");
};

export const logout = (req, res) => res.send("Logout");

export const see = (req, res) => res.send("See User");
// default가 아닌 export면
// 다른 파일에서 import 할 때 import 하려는 모듈 이름을 동일하게 작성해줘야 함
// export 하는게 많아서 뭘 import 하는지 모르기 때문에 정확히 어느 함수를 import 할 지 명확하게 말해줘야 하기 때문
