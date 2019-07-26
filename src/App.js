import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from './router/routes'

function App() {
  return (
    <Router>
      <div className="App">
        {
          routes.map((router, key) => {
            if(router.exact){
              return (<Route exact key={key} path={router.path} component={router.component}></Route>)
            }else {
              return (<Route key={key} path={router.path} component={router.component}></Route>)
            }
          })
        }
      </div>
    </Router>
  );
}

export default App;
