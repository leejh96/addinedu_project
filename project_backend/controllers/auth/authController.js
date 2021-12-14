const userModel = require("../../models/user");
const jwtModule = require("../../modules/jwtModule");

const authsController = {
  signup: async (req, res) => {
    const { email, name, password } = req.body;
    let findUser;
    try {
      findUser = await userModel.findOne({ email });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
        error,
      });
    }
    if (findUser) {
      return res.status(400).json({
        message: "이미 존재하는 이메일",
      });
    }

    const user = new userModel({
      email,
      name,
      password,
      createDate: Date.now(),
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
  signin: async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await userModel.findOne({ email });
      if (user) {
        if (password === user.password) {
          const accessToken = jwtModule.create({
            email,
          });
          return res.status(200).json({
            message: "로그인 성공",
            accessToken,
          });
        }
        return res.status(401).json({
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
