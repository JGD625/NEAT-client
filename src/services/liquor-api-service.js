import config from '../config'

const LiquorApiService = {
  getLiquors() {
    return fetch(`${config.API_ENDPOINT}/liquors`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getLiquor(liquorId) {
    return fetch(`${config.API_ENDPOINT}/liquors/${liquorId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getLiquorComments(liquorId) {
    return fetch(`${config.API_ENDPOINT}/liquors/${liquorId}/comments`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(liquorId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        liquor_id: liquorId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default LiquorApiService