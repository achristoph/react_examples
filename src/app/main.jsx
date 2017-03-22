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
            data: []
        }
    }
    componentDidMount() {
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

render(<App />, document.getElementById('app'));
