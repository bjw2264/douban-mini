const baseUrl = 'https://m.douban.com'

const api = (id='') => {
  return {
    recommend_feed: `${baseUrl}/rexxar/api/v2/recommend_feed`,
    article: `${baseUrl}/rexxar/api/v2/note/${id}`,
    comments: `${baseUrl}/note/${id}/comments`,
    images: `${baseUrl}/photos/album/${id}`,
    moreImages: `${baseUrl}/j/fetch_photo/`,
    search: `${baseUrl}/search/`
  }
}

export default api