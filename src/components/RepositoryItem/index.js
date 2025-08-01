// Write your code here
import './index.css'
import {Component} from 'react'

// Write your code here
class RepositoryItem extends Component {
  render() {
    const {obj} = this.props
    return (
      <div className="bg-git-repo">
        <img src={obj.avatar_url} alt="logo-image" className="image-logo" />
        <h1>{obj.name}</h1>
        <p> {obj.stars_count} stars</p>
        <p> {obj.forks_count} folks</p>
        <p> {obj.issues_count} open issues</p>
      </div>
    )
  }
}

export default RepositoryItem
