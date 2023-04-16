import client from '../../api/client';

const advUrl = '/api/v1/adverts';

export const getLastAdv = () => {
  return client.get(advUrl);
};

export const createNewAdv = (advUrl, credentials) => {
    return client.post(advUrl, credentials)
}