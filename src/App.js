import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './router/routes'
function App() {
  return (
    <Router>
      <div className="App">
        {
          routes.map((router,key)=>{
            return(<Route key={key} path={router.path} component={router.component}></Route>)
          })
        }
      </div>
    </Router>
  );
}

export default App;
