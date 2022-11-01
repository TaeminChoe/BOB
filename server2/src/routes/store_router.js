const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const service = require("../serviceDB");

/**
 * @name store_router
 * @file 제휴점 관련 기능 라우터 모듈
 */

router.get("/", getStoreList);
router.get("/detail", getStoreDetail);
router.post("/", createStore);

/**
 * <h4>
 * <b>
 * <span style="background-color: #F7DDBE">제휴점 리스트 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">GET - {PUBLIC_URL}/store</span>
 * </b>
 * </h4>
 * @todo 페이징, 검색등은 추후 추가
 */
function getStoreList(req, res) {
  service
    .storeFind()
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
 * <span style="background-color: #F7DDBE">제휴점 상세 조회 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">GET - {PUBLIC_URL}/store/detail</span>
 * </b>
 * </h4>
 * @param {String} store_id 제휴점 아이디
 */
function getStoreDetail(req, res) {
  const { store_id } = req.query;
  service
    .storeFindOne({ store_id })
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
 * <span style="background-color: #F7DDBE">제휴점 생성 API입니다.</span>
 * <br />
 * <span style="background-color: #fff5b1">POST - {PUBLIC_URL}/store</span>
 * </b>
 * </h4>
 * @param {String} address 제휴점 주소
 * @param {String} name 제휴점 이름
 * @param {String} phone_number 제휴점 번호
 * @param {String} description 제휴점 설명
 * @param {String} img_url 이미지 경로
 */
function createStore(req, res) {
  const { address, name, phone_number, description, img_url } = req.body;
  const store_id = mongoose.Types.ObjectId();
  service
    .storeSave({ store_id, address, name, phone_number, description, img_url })
    .then((db_res) => {
      res.json(db_res);
    })
    .catch((e) => {
      res.status(500).json(e);
    });
}

module.exports = router;
