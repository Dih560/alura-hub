import api from '../api';

export const getUserRepos = async postId => {
  try {
    let results = await api.get(`repos?postId=${postId}`);
    return results.data;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const createRepo = async ({name, data, postId}) => {
  try {
    await api.post('repos', {name, data, postId});

    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
};

export const updateRepo = async (id, repository) => {
  try {
    await api.put(`repos/${id}`, repository);

    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
};

export const deleteRepo = async id => {
  try {
    await api.delete(`repos/${id}`);

    return 200;
  } catch (err) {
    console.log(err);
    return 500;
  }
};
