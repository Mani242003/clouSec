import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Problem from './components/Problems/Problem';
import RoadMap from './components/Road-Map/RoadMap';
import Solution from './components/Solution/Solution';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
// import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
import PreLoader from './components/PreLoader/PreLoader';
// import {preLoaderAnim} from "../src/Animations"
import { useEffect,useState } from 'react';

function App() {

const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{

  const fakeDataFetch=()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },2600)
  }

  fakeDataFetch()

},[])



  return (

    <div className="App">
      {
        isLoading ? (
          <PreLoader />
        ):(
        
          
       <>
        <Header />
        <Home />
      
       <Features />
       <Problem />
       <RoadMap />
       <Solution />
       <Contact />
       <GetStarted />
       <Footer />
       </>

        )
      }
     
   

      </div>

  )
}

export default App
