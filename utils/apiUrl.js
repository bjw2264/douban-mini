export const baseUrl = 'https://m.douban.com'

const api = (id='') => {
  return {
    recommend_feed: `${baseUrl}/rexxar/api/v2/recommend_feed`,
    article: `${baseUrl}/rexxar/api/v2/note/${id}`,
    comments: `${baseUrl}/note/${id}/comments`,
    images: `${baseUrl}/photos/album/${id}`,
    moreImages: `${baseUrl}/j/fetch_photo/`,
    search: `${baseUrl}/search/`,
    movieDetail: {
      first: `${baseUrl}/rexxar/api/v2/subject_collection/movie_showing/items`,
      second: `${baseUrl}/rexxar/api/v2/subject_collection/movie_free_stream/items`,
      three: `${baseUrl}/rexxar/api/v2/subject_collection/movie_latest/items`
    },
    tvDetail: {
      first: `${baseUrl}/rexxar/api/v2/subject_collection/tv_domestic/items`,
      second: `${baseUrl}/rexxar/api/v2/subject_collection/tv_variety_show/items`,
      three: `${baseUrl}/rexxar/api/v2/subject_collection/tv_american/items`
    }
  }
}

export default api