
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import Userlist from './Userlist';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import UserCreate from './UserCreate';
import Useredit from './Useredit';

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              {/* <Dashboard/> */}
              {/* <Userlist/> */}

              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/Users" element={<Userlist />}></Route>
                <Route path="/user-create" element={<UserCreate />}></Route>
                <Route path="/user-edit/:id" element={<Useredit />}></Route>
              </Routes>

            </div>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
