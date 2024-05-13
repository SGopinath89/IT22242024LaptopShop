import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate('/login', {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <>
   
   <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="Text-center mb-4">redirecting to you in {count} second</h1>
  <span className="loading loading-ring loading-lg"></span>
</div>


    </>
  )
}

export default Spinner