import "./styles/app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Contexts
import { DataProvider } from "./contexts/DataContext";
// Components
import Header from "./components/Header/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Pages

function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Header />
          <Body />
          <Switch>
            <Route path={["/", "/home"]} exact />
          </Switch>
          <Footer />
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
