const express = require("express");
const router = express.Router();
const service = require("../serviceDB");
/** User List 조회 */
router.get("/", (req, res) => {
  service.getUserList().then((data_result) => {
    res.json({ result: data_result });
  });
});

/** 특정 User 조회 */
router.get("/detail", (req, res) => {
  service.getUserDetail(req.query).then((data_result) => {
    res.json({ result: data_result });
  });
});

/** User 추가  */
router.post("/", (req, res) => {
  /** 중복검사 */
  service.getUserDetail(req.body).then((check_res) => {
    if (!!check_res) {
      res.status(500).json({
        code: 500001,
        msg: "중복된 아이디입니다.",
      });
    } else {
      service
        .addUser(req.body)
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
});

module.exports = router;
