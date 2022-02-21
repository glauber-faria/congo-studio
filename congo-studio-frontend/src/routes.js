import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path='/' element={<Home />} />
        </BrowserRouter>
    )
}

export default Routes;