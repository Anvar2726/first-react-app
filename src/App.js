import { Fragment } from "react";
import Header from "./components/Header";
import {Home} from "./components/Home";
import {About} from "./components/About/About";
import {Services} from "./components/Services";
import {Articles} from "./components/Articles";
import {Contact} from "./components/Contact";


function App() {
  return (
    <Fragment>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Articles/>
      <Contact/>
    </Fragment>
  );
}

export default App;
