const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const service = require("../serviceDB");

/**
 * @name review_router
 * @file 리뷰 라우터 모듈
 */

router.get("/", getReviewList);
router.post("/", createReview);
router.delete("/", deleteReview);

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">리뷰 리스트 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">GET - {PUBLIC_URL}/review</span>
 * </b>
 * </h4>
 * @param {String} search_type 검색 방법('store_id'/'user_id')
 * @param {String} search_value 검색 방법에 따른 id값
 */
function getReviewList(req, res) {
  const { search_type, search_value } = req.query;
  // 별점이 하나라도 없을 경우
  if (!search_type || !search_value) {
    res.status(500).json({
      code: 500,
      msg: "need all search option",
    });
  }
  service
    .reviewFind({ search_type, search_value })
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
 * <span style="background-color: #F7DDBE">리뷰 작성 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">POST - {PUBLIC_URL}/review</span>
 * </b>
 * </h4>
 * @param {String} user_id 리뷰 작성자 아이디
 * @param {String} store_id 리뷰 제휴점 아이디
 * @param {Object} rating 별점 집합
 * @param {Number} rating.taste 별점-맛
 * @param {Number} rating.clean 별점-청결
 * @param {Number} rating.mood 별점-분위기
 * @param {String} description 리뷰 내용
 * @todo store 컬렉션에서 실제 존재하는 제휴점에만 작성할 수 있게해야함.
 */
function createReview(req, res) {
  const { user_id, store_id, rating, description } = req.body;
  const review_id = mongoose.Types.ObjectId();
  const { taste, clean, mood } = rating;

  // 별점이 하나라도 없을 경우
  if (!taste || !clean || !mood) {
    res.status(500).json({
      code: 500,
      msg: "need all rating",
    });
  }
  service
    .reviewSave({ review_id, user_id, store_id, rating, description })
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
 * <span style="background-color: #F7DDBE">리뷰 삭제 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">DELETE - {PUBLIC_URL}/review/delete</span>
 * </b>
 * </h4>
 * @param {String} review_id 리뷰 고유 아이디
 */
function deleteReview(req, res) {
  const { review_id } = req.body;
  if (!review_id) {
    res.status(500).json({
      code: 500,
      msg: "need review id",
    });
  }

  service
    .reviewRemove({ review_id })
    .then((db_res) => {
      res.json(db_res);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
}
module.exports = router;
