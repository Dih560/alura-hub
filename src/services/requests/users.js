import api from '../api';

export const getUser = async login => {
  try {
    let results = await api.get(`users?login=${login}`);
    return results.data.length > 0 ? results.data[0] : {};
  } catch (err) {
    console.log(err);
    return {};
  }
};
