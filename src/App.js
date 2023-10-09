
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContext from './context/UserContext';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <h1>hello context api</h1>
      
        <Login />
        <Profile/>
      </UserContextProvider>
    </div>
  );
}

export default App;
