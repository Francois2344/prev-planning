/* eslint-disable prefer-template */
/* eslint-disable no-useless-catch */
import axios from 'axios';

const apiPostUrl = 'http://localhost:8000/imagesUpload/singleFile';
const apiGetUrl = 'http://localhost:8000/imagesUpload';

export const singleFileUpload = async (data, options) => {
  try {
    await axios.post(apiPostUrl, data, options);
  } catch (err) {
    throw err;
  }
};
export const getSingleFiles = async () => {
  try {
    const { data } = await axios.get(apiGetUrl);
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};
