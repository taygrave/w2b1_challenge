// @flow
/* globals Event */

import React, { Component } from 'react'
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Image
} from 'react-bootstrap'
import { connect } from 'react-redux'

import { fetchRepos } from '../actions'

type HomeProps = {
  repos: Object,
  fetchRepos: typeof fetchRepos
}
type RenderRepoArgs = {
  name: string,
  git_url: string,
  id: number
}

class HomePage extends Component<HomeProps> {
  handleSubmit = (e: Event) => {
    e.preventDefault()
    const { fetchRepos } = this.props
    const userName = e.target[0].value
    const repoName = e.target[1].value

    fetchRepos(userName, repoName)
  }

  renderRepo = ({ name, git_url: gitUrl, id }: RenderRepoArgs) => {
    return (
      <li key={`${id}`}>
        <span>{`REPO: ${name}  |`}</span>
        <span>{`  URL: ${gitUrl}`}</span>
      </li>
    )
  }

  render () {
    const { repos } = this.props

    return (
      <div className='home-page'>
        <h3>Way2B1 Challenge</h3>
        <Form inline className='form' onSubmit={this.handleSubmit}>
          <FormGroup className='form-group1' controlId='formInlineName'>
            <ControlLabel>GitHub Username</ControlLabel>
            <FormControl type='text' placeholder='GitHub username' />
          </FormGroup>
          <FormGroup className='form-group2' controlId='formInlineName'>
            <ControlLabel>Name</ControlLabel>
            <FormControl type='text' placeholder='Repo Name' />
          </FormGroup>
          <Button type='submit'>Get Repos</Button>
        </Form>
        {
          Object.keys(repos).length > 0
          ? (
            <div>
              <div className='user'>
                <h1>{repos.user.login}</h1>
                <Image className='avatar' src={repos.user.avatar_url} circle />
              </div>
              <div className='repos'>
                <ul>{repos.data.map(repo => this.renderRepo(repo))}</ul>
              </div>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export const Unconnected = HomePage

export default connect(
  (state) => ({
    repos: state.repos
  }),
  {
    fetchRepos
  }
)(HomePage)
