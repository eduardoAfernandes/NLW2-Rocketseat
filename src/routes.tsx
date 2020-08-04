import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import landingPage from './pages/Landing/index'
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes() {
    return(
        <BrowserRouter>
            <Route exact path="/" component={landingPage} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;