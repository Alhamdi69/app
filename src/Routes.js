import React, { Component } from 'React';
import {Router, Stack, Scene, Actions} from 'react-native-router-flux';

import Login from './pages/Login'
import Signup from './pages/Signup'

export default class Routes extends Component{
    render(){
        return(
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login" initial={true} />
                <Scene key="Signup" component={Signup} title="Signup"/>
            </Stack>
        </Router>
        )
    }
}