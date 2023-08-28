import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Logon} />
                <Route path='/register' Component={Register} />

                <Route path='/profile' Component={Profile} />
                <Route path='/incidents/new' Component={NewIncident} />
            </Routes>
        </BrowserRouter>
    )
}