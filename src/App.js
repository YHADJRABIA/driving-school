import "./styles/app.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Contexts
import { DataProvider } from "./contexts/DataContext";
// Components
import Loading from "./components/Loading";
import Header from "./components/Header/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// Pages

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
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
