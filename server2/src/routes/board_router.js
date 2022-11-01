const express = require("express");
const router = express.Router();
const service = require("../serviceDB");

/**
 * @name board_router
 * @file 게시판 관련 기능 라우터 모듈
 */

router.get("/", getBoardList);
router.get("/detail", getBoardDetail);
router.post("/", createBoard);

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">게시물 리스트 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">GET - {PUBLIC_URL}/board</span>
 * </b>
 * </h4>
 * @desc 전체 게시글 조회 : 페이징, 검색등은 추후 추가
 */
function getBoardList(req, res) {
  service
    .boardFind()
    .then((db_res) => {
      res.json(db_res);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
}

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">게시물 상세 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">GET - {PUBLIC_URL}/board/detail</span>
 * </b>
 * </h4>
 * @param {String} board_id 게시글 아이디
 */
function getBoardDetail(req, res) {
  const { board_id } = req.query;
  service
    .boardFindOne({ board_id })
    .then((db_res) => {
      res.json(db_res);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
  // service.boardFind({ board_id }).then((db_res) => {
  //   res.json(db_res);
  // });
}

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">게시물 작성 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">POST - {PUBLIC_URL}/board</span>
 * </b>
 * </h4>
 * @param {String} author 게시글 작성자
 * @param {String} title 게시글 제목
 * @param {String} description 게시글 내용
 */
function createBoard(req, res) {
  const { author, title, description } = req.body;
  service
    .boardSave({ author, title, description })
    .then((db_res) => {
      res.json(db_res);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
}

module.exports = router;
