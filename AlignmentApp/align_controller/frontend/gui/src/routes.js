import React from 'react';
import { Route } from 'react-router-dom';
import SequenceList from './components/containers/SequenceListView';
import RecentList from './components/containers/RecentListView';
import CustomForm from './components/containers/Form';
import Login from './components/containers/Login';
import Signup from './components/Signup';
const BaseRouter = () =>(
    <div>
        <Route exact path='/History' component={SequenceList}/>
        <Route exact path='/Search' component={CustomForm}/>
        <Route exact path='/Recent' component={RecentList}/>
        <Route exact path='/login/' component={Login}/> 
        <Route exact path='/signup/' component={Signup}/> 
    </div>

);

export default BaseRouter;