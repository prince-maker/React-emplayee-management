import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeList from './components/EmployeeList';
import Footer from './components/Footercomponent';
import HeaderComponent from './components/Headercomponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div >
      <Router>
        <div  >
      <HeaderComponent/>
       <div className="container">
         <Switch>
           <Route path="/employees"  exact component={EmployeeList}></Route>
          <Route path="/add-employee" component={AddEmployee}></Route>
          <Route path="/home" exact component={AddEmployee}></Route>
          <Route path="/view-employee/:id" component={ViewEmployee}></Route>
          <Route path="/edit-employee/:id" component={UpdateEmployee}></Route>

       <EmployeeList />
       </Switch>
       </div> 
       <Footer/>
  </div>
  </Router>
    </div>
  );
}

export default App;
