import HomePage from './pages/home/index';
import SearchPage from './pages/search/index';
import PetDetailsPage from './pages/detail/index';
import PetDetailsNotFound from './pages/petDetailsNotFound/index';
import Navigation from './components/navigation/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div>
            <Router>
                <Navigation />
                <Switch>
                    <Route path='/pet-details-not-found'>
                        <PetDetailsNotFound/>
                    </Route>
                    <Route path='/search/'>
                        <SearchPage />
                    </Route>
                    <Route path='/:type/:id'>
                        <PetDetailsPage />
                    </Route>
                    <Route path='/:type?'>
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
