import client from '../../api/client';

const advUrl = '/api/v1/adverts';

export const getLastAdv = () => {
    const url = `${advUrl}`;
    return client.get(url);
};

export const getAdvert = (advertId) => {
    const url = `${advUrl}/${advertId}`;
    return client.get(url);
};

export const deleteAdvert = (advertId) => {
    const url = `${advUrl}/${advertId}`;
    return client.delete(url)
}

export const createNewAdvert = advert => {
    const url = advUrl;
    //console.log(advert)
    return client.post(url, advert, {});
};

export const getTagList = () => {
    const url = `${advUrl}/tags`;
    return client.get(url)
}
