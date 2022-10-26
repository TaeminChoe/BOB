let store = null;

const providerDialog = (_store) => {
  store = _store;
};

/**
 *
 * @param {String} description Alert Popup에 표출할 문구
 * ------------------------------
 * @exam
 * import { openAlert } from "@/helper/helper-dialog";
 *
 * openAlert("팝업에 들어갈 문구");
 * ------------------------------
 */
const openAlert = (description) => {
  store.commit("setModalOpen", { description });
};

export { providerDialog, openAlert };
