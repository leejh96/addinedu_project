const jwt = require("jsonwebtoken");
const jwtConfig = require("../config/jwtConfig.json");

const jwtModule = {
  create: (payload) => {
    const option = {
      algorithm: "HS256", //해시알고리즘
      expiresIn: "30d", //만료기한
      issuer: "leejuhyeok", //발행자
    };

    //토큰 생성
    const token = jwt.sign(payload, jwtConfig.secretKey, option);
    return token;
  },
  verify: (token) => {
    let decoded;
    try {
      //복호화
      decoded = jwt.verify(token, jwtConfig.secretKey);
    } catch (error) {
      if (error.message === "jwt expired") {
        console.log("expired token");
        return -1;
      } else if (error.message === "invalid token") {
        console.log("invalid token");
        return -2;
      } else {
        console.log("error token");
        return -3;
      }
    }

    return decoded;
  },
};

module.exports = jwtModule;
