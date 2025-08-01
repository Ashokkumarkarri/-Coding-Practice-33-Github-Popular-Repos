import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// const apicall = async () => {
//   const response = await fetch('https://apis.ccbp.in/popular-repos')
//   const data = await response.json()
//   const data1 = data
//   console.log(data)
// }

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    repoArray: [],
    currentId: 'ALL',
  }

  componentDidMount() {
    this.apiCall()
  }

  apiCall = async () => {
    try {
      const {currentId} = this.state
      const url = `https://apis.ccbp.in/popular-repos?language=${currentId}`
      const response = await fetch(url)
      const data = await response.json()
      this.setState({repoArray: data.popular_repos})
    } catch (error) {
      console.log(error)
    }
  }

  updateCurrentId = i => {
    console.log('camer here')
    this.setState({currentId: i}, this.apiCall)
    console.log(i)
  }

  render() {
    const {repoArray, currentId} = this.state
    console.log(currentId)

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Popular</h1>
        <LanguageFilterItem
          languageFiltersData={languageFiltersData}
          updateCurrentId={this.updateCurrentId}
        />
        <div className="bg-div">
          {repoArray.map(i => (
            <RepositoryItem id={i.id} obj={i} />
          ))}
        </div>
      </div>
    )
  }
}

export default GithubPopularRepos
