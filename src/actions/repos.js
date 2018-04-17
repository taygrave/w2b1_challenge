// @flow
/* globals Dispatch */
import axios from 'axios'

import type { AnyAction } from '../types'

export const fetchRepos = (userName: string, repoName: string) => async (dispatch: Dispatch<AnyAction>) => {
  dispatch({ type: 'FETCH_REPOS' })
  const { data } = await axios.get(`https://api.github.com/users/${userName}/repos`)
  const filtered = data.filter(({ name }) => name === repoName)

  dispatch({
    type: 'FETCHED_REPOS',
    data: filtered.length > 0 ? filtered : data,
    user: data[0].owner
  })
}
