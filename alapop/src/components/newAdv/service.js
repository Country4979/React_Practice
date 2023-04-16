import client from '../../api/client'

export const createNewAdv = (credentials) => {
    return client.post('v1/adverts', credentials)
}