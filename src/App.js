import React, { useState } from 'react';
import Search from './Search';
import { getApiData } from './ApiHelper';
import './App.css';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [isSearchInProgress, setIsSearchInProgress] = useState(false);
  const [error, setError] = useState('');

  const onSearch = async (queryString, searchText) => {
      setIsSearchInProgress(true);
      const result = await getApiData(queryString, searchText, setError);
      if(result){
        setSearchResult(result.hits);
      }
      setIsSearchInProgress(false);
  }
  return (
    <div className="App">
      <main>
        <Search onSearch={onSearch} isSearchInProgress={isSearchInProgress}/>
        <section className="sec-response">
          { error ? (
              <div className="div-error" aria-describedby="Error from api">
                <h3>{error}</h3>
              </div>
            ) : (
             searchResult && searchResult.map((item, i)=>(
                <div className="div-search-result" key={i}>
                  <img id={`result-${i}`} src={item.recipe.image} alt={`${i} recipie`}/>
                  <label htmlFor={`result-${i}`} >{item.recipe.label}</label>
                </div>
              ))
            )
          }
        </section>
      </main>
    </div>
  );
}

export default App;
