import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/app/app';

function Greeting() {
  const dispatch = useDispatch();
  const fetchApi = 'http://localhost:3000/api/v1/greetings';

  const myGreeting = useSelector((state) => state.greeting);

  useEffect(() => {
    const apiGreeting = async () => {
      const fetchGreeting = await fetch(fetchApi);
      const greeting = await fetchGreeting.json();
      return dispatch(getGreeting(greeting));
    };
    if (myGreeting.length === 0) {
      apiGreeting();
    }
  }, []);

  return (
    <div>
      <h1>Hello react front end</h1>
      <h2>{myGreeting.greeting}</h2>
    </div>
  );
}

export default Greeting;
