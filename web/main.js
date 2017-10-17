import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Index} from './page/index'
import {Shopping} from './page/shopping'

class DomBox extends React.Component{
    render(){
        return <Router>
            <div>
            <ul>
                <li><Link to="/">Index</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>

            <hr/>
            <Route exact path="/" component={Index}/>
            <Route path="/about" component={Shopping}/>
            </div>
        </Router>
    }
}

ReactDOM.render(
        <DomBox/>,
    document.getElementById('app')
);









