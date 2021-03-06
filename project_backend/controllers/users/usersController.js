const usersController = {
  getUserInfo: (req, res) => {
    const userInfo = req.userInfo;
    if (!userInfo) {
      return res.status(400).json({
        message: "유저 정보가 없습니다.",
      });
    }
    res.status(200).json({
      message: "유저 정보 조회 성공",
      data: userInfo,
    });
  },
  uploadImage: (req, res) => {
    const imageInfo = req.file;
    res.status(200).json({
      message: "업로드 완료",
      data: imageInfo,
    });
  },
};

module.exports = usersController;
