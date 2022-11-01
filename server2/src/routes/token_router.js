const express = require("express");
const router = express.Router();
const service = require("../serviceDB");

/* 로그인 관련한 기능 API */
router.get("/", getToken);

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">토큰 요청 API입니다 (로그인).</span>
 * <br />
 * <span style="background-color: #fff5b1">POST - {PUBLIC_URL}/token</span>
 * </b>
 * </h4>
 * @param {String} id 아이디
 * @param {String} pw 비밀번호
 *
 */
function getToken(req, res) {
  const { id, pw } = req.query;

  service.userFindOne({ id }).then((detailRes) => {
    if (detailRes) {
      if (pw === detailRes.pw) {
        res.json({ code: 200000, result: detailRes });
      } else {
        res.status(400).json({
          code: 400002,
          msg: "패스워드 불일치",
        });
      }
    }
    // 등록된 아이디 없는 경우
    else {
      res.status(400).json({
        code: 400001,
        msg: "등록되지 않은 아이디입니다.",
      });
    }
  });
}

module.exports = router;
