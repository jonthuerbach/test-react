import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';

const App = () => {
  const [users, setUsers] = useState([]);
  const userList = users.map((user) => (
    <div className='col-3' key={user.id}>
      <Card user={user}></Card>
    </div>
  ));

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      });
  });

  return (
    <>
      <div className='container'>
        <h1 className='mb-3 pb-1 border-bottom'>Test</h1>
        <div className='row'>{userList}</div>
      </div>
    </>
  );
};

export default App;
