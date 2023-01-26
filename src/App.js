import NavBar from "./NavBar";
import Main from "./Main";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetail";
import NotFound from "./NotFound";
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div> 
          <Switch>
            {/* 指定確切路徑 */}
            <Route exact path="/"> 
              <Main />
            </Route>

            <Route path="/create">
              <Create />
            </Route>

            <Route path ="/fruits/:id">
              <BlogDetails/>
            </Route>
            {/*  *除上述提過的 */}
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
