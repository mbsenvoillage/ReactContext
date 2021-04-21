import './App.css';
import { EmployeeList} from "./components/EmployeeList";
import { GlobalProvider } from "./context/GlobalState";
import { Route, Switch } from 'react-router-dom';
import { AddEmployee } from "./components/AddEmployee";

function App() {



  return (
      <GlobalProvider>
          <div className="App">
              <Switch>
                  <Route path="/" component={EmployeeList} exact/>
                  <Route path="/add" component={AddEmployee} exact />
              </Switch>
          </div>
      </GlobalProvider>
  );
}

export default App;
