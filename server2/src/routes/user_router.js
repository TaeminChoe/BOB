const express = require("express");
const router = express.Router();
const service = require("../serviceDB");

router.get("/", getUserList);
router.get("/detail", getUserDetail);
router.post("/", createUser);

/**
 * @file 로그인/회원가입 등 user에 관련된 router 기능이 명시되어있습니다.
 */

// ------------ 기능 --------------

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">전체 유저 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1"> GET - {PUBLIC_URL}/user</span>
 * </b>
 * </h4>
 */
function getUserList(req, res) {
  service.userFind().then((data_result) => {
    res.json({ result: data_result });
  });
}

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">특정 유저 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1"> GET - {PUBLIC_URL}/detail/user</span>
 * </b>
 * </h4>
 * @param {String} id 아이디
 */
function getUserDetail(req, res) {
  service.userFindOne(req.query).then((data_result) => {
    res.json({ result: data_result });
  });
}

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">회원가입 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1"> POST - {PUBLIC_URL}/user</span>
 * </b>
 * </h4>
 * @param {String} id 아이디
 * @param {String} pw 비밀번호
 * @param {String} name 이름
 * @param {String} auth 권한
 */
function createUser(req, res) {
  /** 중복검사 */
  service.userFindOne(req.body).then((check_res) => {
    if (!!check_res) {
      res.status(500).json({
        code: 500001,
        msg: "중복된 아이디입니다.",
      });
    } else {
      service
        .userSave({ ...req.body, date: new Date().getTime().toString() })
        .then((data_result) => {
          res.json({
            code: 200000,
            result: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
}

module.exports = router;
