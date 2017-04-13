import axios from 'axios'
import { API_HOST } from '../constants'

axios.defaults.baseURL = API_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json'

class AnnouncementsApi {
  static getAnnouncementsList () {
    return axios.get(`${API_HOST}/announcements`)
            .then(res => {
              return res.data
            })
            .catch(err => {
              return err
            })
  }
}

export default AnnouncementsApi
