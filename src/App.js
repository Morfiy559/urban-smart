import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Route path='/' exact>
                        <Main/>
                    </Route>
                    <Route path='/profile'>
                        <Profile/>
                    </Route>
                </Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
