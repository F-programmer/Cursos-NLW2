import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';

function Routes() {
  return(
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route exact path='/study' component={TeacherList} />
      <Route exact path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  )
}

export default Routes;