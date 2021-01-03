import { Route, BrowserRouter } from "react-router-dom";
import Register from "./Component/Register"
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <div style={{backgroundColor:"#EDF2F8"}}>
      <BrowserRouter>    
        <Route path="/" exact component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;