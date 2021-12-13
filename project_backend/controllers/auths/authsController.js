const userModel = require("../../models/user");

const authsController = {
  createUser: async (req, res) => {
    const { email, name, password } = req.body;

    const findUser = await userModel.findOne({ email });
    if (findUser) {
      return res.status(400).json({
        message: "이미 존재하는 이메일",
      });
    }

    const user = new userModel({
      email,
      name,
      password,
      createDate: new Date(),
    });

    try {
      const savedUser = await user.save();
      res.status(200).json({
        message: "유저 생성 완료",
        data: savedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  signinUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        if (password === user.password) {
          return res.status(200).json({
            message: "로그인 성공",
          });
        }
        return res.status(400).json({
          message: "비밀번호 다름",
        });
      }
      return res.status(400).json({
        message: "해당하는 이메일 없음",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버에러",
      });
    }
  },
};

module.exports = authsController;
