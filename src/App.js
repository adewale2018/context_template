import React from "react";
import { Route, Switch } from "react-router-dom";

import { GlobalProvider } from "./contexts/globalState";
import Header from "./components/Header";
import AddProfile from "./components/AddProfile";
import EditProfile from "./components/EditProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Switch>
        <Route exact path='/profiles' component={Home} />
        <Route exact path='/profile/new' component={AddProfile} />
        <Route exact path='/profile/edit/:id' component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
