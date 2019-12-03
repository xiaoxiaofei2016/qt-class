import React, { useState, useReducer } from 'react';
import { defaultState, reducer } from './reducer';

function App() {
  const [searchValue, setSearchVal] = useState('');
  const [store, dispatch] = useReducer(reducer, defaultState)
  const handleSearchInputChanges = e => {
    setSearchVal(e.target.value)
  }
  const callSearchFunction = e => {
    e.preventDefault(); // 阻止表单提交的默认事件
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then((res) => res.json()).then(res => {
      console.log(res)
      dispatch({
        type: 'SUCCESS',
        movies: res.Search
      })
    })
  }
  return (
    <div className="App">
      <div className="m-container">
        <form className="search">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />
          <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
        {
          store.movies.map((movie) => {
            return (
              <li key={movie}>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt=""/>
                <p>{movie.Year}</p>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;