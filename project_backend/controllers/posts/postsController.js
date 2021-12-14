const postsModel = require("../../models/post");
const jwtModule = require("../../modules/jwtModule");

const postsController = {
  createPost: async (req, res) => {
    const { title, content } = req.body;
    const userInfo = req.userInfo;

    const post = new postsModel({
      title,
      content,
      createDate: new Date(),
    });

    try {
      const savedData = await post.save();
      res.status(200).json({
        message: "데이터 생성 완료",
        data: savedData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  readPost: async (req, res) => {
    try {
      const posts = await postsModel.find();
      if (posts.length === 0) {
        res.status(400).json({
          message: "결과값이 없습니다.",
        });
        return;
      }
      res.status(200).json({
        message: "데이터 조회 성공",
        data: posts,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  updatePost: async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    try {
      await postsModel.findByIdAndUpdate(id, {
        title,
        content,
      });
      res.status(200).json({
        message: "업데이트 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  deletePost: async (req, res) => {
    const { id } = req.params;
    try {
      await postsModel.findByIdAndRemove(id);
      res.status(200).json({
        message: "삭제 완료",
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },
  readDetailPost: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postsModel.findById(id);
      res.status(200).json({
        message: "데이터 조회 완료",
        data: post,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB서버 에러",
      });
    }
  },
};

module.exports = postsController;
