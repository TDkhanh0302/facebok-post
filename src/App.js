import { Route, Switch } from "react-router-dom";
import "./App.css";
import PostContextProvider from "./contexts/PostContext";
import AddPost from "./routes/AddPost";
import PostList from "./routes/PostList";

function App() {
  return (
    <div className="app">
      <PostContextProvider>
        <Switch>
          <Route path="/posts" exact component={PostList} />
          <Route path="/post/:id" exact component={AddPost} />
          <Route path="*" component={PostList} />
        </Switch>
      </PostContextProvider>
    </div>
  );
}

export default App;
