import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login';
import { useSelector } from 'react-redux'

function App() {
  const { userInfo } = useSelector(state => state.user)
  return (
    <div className="app">
      {!userInfo ? <Login /> :
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      }
    </div>
  );
}

export default App;
