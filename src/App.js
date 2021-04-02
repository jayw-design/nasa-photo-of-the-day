import React,  { useState, useEffect } from "react";
import axios from 'axios'

import "./App.css";

// import Landing from './pages/Landing'
import {API_KEY, BASE_URL } from "./API/API"
import Landing from "./pages/Landing"


// BASE_URL = 'https://api.nasa.gov/planetary/apod?'
// API_KEY = '1MNVrI3rf3MXjBjxqmlooVx9qJZBuSYZ7UMTL5CT'

// export const apodApi = 'https://api.nasa.gov/planetary/apod?api_key=1MNVrI3rf3MXjBjxqmlooVx9qJZBuSYZ7UMTL5CT'

//importing api thru index js



function App() {
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [explanation, setExplanation] = useState()

  useEffect(() => {

    // console.log('API importing works!')

    axios.get(`${BASE_URL}api_key=${API_KEY}`)
        // .then((res) => {
        //   console.log(res.data)
        // })
        .then((item) => {
          console.log(item.data.url)
          setImage(item.data.url)
          setTitle(item.data.title)
          setDate(item.data.date)
          setExplanation(item.data.explanation)
        })
        .catch(error => {
          console.log("my error", error)
        })
  }, []) 

  return (
    <div className="App">
      <h1>Hello from App.js</h1>
      <Landing image={image} title={title} date={date} explanation={explanation}/>
    </div>
  );
}

export default App;
