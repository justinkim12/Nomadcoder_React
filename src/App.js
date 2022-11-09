import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {

  return (
    <Router>
        <Switch>
            <Route path='/movie/:id'> 
            {/* path는 경로 컴포넌트로 사이트 띄우기 */}
              <Detail/>
            </Route>

            <Route path='/'>
            <Home/>
            </Route>
        </Switch>
    </Router>
  );
}
export default App;