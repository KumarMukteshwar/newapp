import './App.css';

import FetchData from './Components/FetchData';
import MouseTracker from './Components/MouseTracker';
import UpdateDoc from './Components/UpdateDoc';
// Step 1 : Import useEffect from react library similar to how you have imported useState hook;
// import PostItem from "./components/PostItem";



const App = () => {
  return (
    <div>
      <FetchData/>
      <MouseTracker/>
      <UpdateDoc/>
    </div>
  );
};


export default App;
