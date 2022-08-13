export const join = (req, res) => res.send("Join");

export const edit = (req, res) => res.send("Edit User");

export const remove = (req, res) => res.send("Remove User");

export const login = (req, res) => res.send("Login");

export const logout = (req, res) => res.send("Logout");

export const see = (req, res) => res.send("See User");
// default가 아닌 export면
// 다른 파일에서 import 할 때 import 하려는 모듈 이름을 동일하게 작성해줘야 함
// export 하는게 많아서 뭘 import 하는지 모르기 때문에 정확히 어느 함수를 import 할 지 명확하게 말해줘야 하기 때문
