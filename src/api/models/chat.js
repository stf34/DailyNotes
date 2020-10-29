import {
  // axiosPost,
  // axiosPatch,
  // axiosDelete,
  axiosGet
} from '../api'


/* 聊天接口 */
// export const adminLogin = (data) => axiosPost('fcgi-bin/nlp/nlp_textchat?', data)

/* 获取 */
export const getChatResponse = (parmas) => axiosGet('fcgi-bin/nlp/nlp_textchat'+parmas)

// /* 编辑 */
// export const Edit = (data) => axiosPatch('url', data)

// /* 删除 */
// export const Delete = (parmas) => axiosDelete('url', parmas)
