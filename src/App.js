import CreateUsers from './components/Users/CreateUsers';
import UserList from './components/Users/UserList';
import { useState } from 'react';

const App = () => {
  const [userList, setUserList] = useState([]);

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: name, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <CreateUsers onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
