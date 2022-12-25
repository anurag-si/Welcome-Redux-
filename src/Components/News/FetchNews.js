import React, { useState } from 'react'
import axios from 'axios'

const FetchNews = () => {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=2f826481e56444fd8349f62c5ccf1db1")
        .then((response) => {
            console.log(response)
            setNews(response.data.articles)
        })
    }
  return (
    <div>
        <h1>Latest News</h1>  
        <button onClick={fetchNews}>Fetch News</button>   
        {
            news.map((value) => {
                return(
                    <h5> {value.title}</h5>,
                    <h4>{value.description}</h4>
                )
                    
                
            })
        }      
    </div>
  )
}

export default FetchNews
