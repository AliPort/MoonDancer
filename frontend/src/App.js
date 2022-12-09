import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Gallery from './gallery/GalleryIndex'
import Booking from './Booking'
import Navigation from './Navigation'
import Error404 from './Error404'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'
import About from './About'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/sign-up" component={SignUpForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/booking" component={Booking} />
            <Route path="/" component={Error404} />
          </Switch>
        </BrowserRouter>
      </CurrentUserProvider>
  );
}

export default App;