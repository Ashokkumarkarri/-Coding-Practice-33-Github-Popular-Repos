// Write your code here
import './index.css'
import {Component} from 'react'

// Write your code here
const LanguageFilterItem = props => {
  const {languageFiltersData, updateCurrentId} = props

  const buttonClicked = i => {
    console.log('button clicked')
    console.log(i)
    updateCurrentId(i.id)
  }

  return (
    <div className="bg-languageFilter">
      {languageFiltersData.map(i => (
        <button
          className="btn-style"
          key={i.id}
          onClick={() => buttonClicked(i)}
        >
          {i.language}
        </button>
      ))}
    </div>
  )
}

export default LanguageFilterItem
