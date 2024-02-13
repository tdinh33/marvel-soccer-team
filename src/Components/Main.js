import React from 'react'
import {Cards} from './Cards'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'

export const Main = () => {
  const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9f82deb88a766ca905ad49be7a45af4c&hash=2a0ed50adbb90ef40cf3612619cd1096")
  const [item, setItem] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  }, [url])
  
  return (
    <>
      <div className='header'>
          <div className='bg'>
              <img src="./Images/background.jpg" alt="hehe" />
          </div>
          <div className='search-bar'>
            <img src='./Images/logo.png' alt='logo' />
            <input type="search" placeholder='Search' className='search' />
          </div>
      </div>
      <div className='content'>
        
        {
          (!item) ? <p>Not Found</p> : <Cards data={item}/> 
        }
      </div>
    </>

  )
}
