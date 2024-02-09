import './App.css';
import Card from './component/Card'
import { useState,useEffect } from 'react';
import MoonLoader from 'react-spinners/MoonLoader'
function App() {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const jsonData = await response.json();
          setUserData(jsonData.results[0]); // Assuming you're only interested in the first user's data
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (isLoading) {
      return (
        <div className="loader-container">
          <MoonLoader color="#7200ff" />
        </div>
      );
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  return (
    <div className="App">
      <Card userData={userData}/>
    </div>
  );
}

export default App;
