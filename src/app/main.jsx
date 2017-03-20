import React, { Component } from 'react';
import { render } from 'react-dom';
import Header from './components/header';
import Footer from './components/footer';
import Nav from './components/nav';
import MainContent from './components/main_content';
import './css/main.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: null
        }
    }
    componentWillMount() {
        this.loadData();
    }

    loadData() {
        fetch("data/data.json").then((response) => {
            response.json().then((v) => {
                this.setState({
                    data: v
                });
            });
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Nav />
                    <Route path="/" exact render={({ match }) => <MainContent data={this.state.data} {...match} />} />
                    <Route path="/:sort" exact render={({ match }) => <MainContent data={this.state.data} {...match} />} />
                    <Route path={`/:category/:sort`} render={({ match }) => <MainContent data={this.state.data} {...match} />} />
                    <Footer />
                </div>
            </Router>
        );
    }
}

/*import React from 'react'
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
        </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
        </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)*/

render(<App />, document.getElementById('app'));
