import { useEffect, useState } from 'react';
import './App.css';
import BackToTopButton from './components/backToToButton';
import LoadingPage from './components/loading';
import { Router } from './layouts/router';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='App' >
    {isLoading ? (
      <LoadingPage />
    ) : (
      <div>
        <Router />
        <BackToTopButton/>
      </div>
    )}
  </div>
  );
}

export default App;
