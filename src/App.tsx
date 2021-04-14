import { Switch, Route, Redirect } from "react-router-dom";
import AddCard from "./Components/AddCard";
import EditCard from "./Components/EditCard";
import ListCards from "./Components/ListCards";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact from="/" to="/cards" />
        <Route path="/cards/add">
          <AddCard />
        </Route>

        <Route path="/cards/:id/edit">
          <EditCard />
        </Route>

        <Route path="/cards">
          <ListCards />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
