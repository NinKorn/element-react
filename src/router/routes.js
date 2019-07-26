import Home from '../pages/Home/Home'
import Cities from '../pages/City/Cities'
import Login from '../pages/Login/Login'
const routes = [
    {
        path: '/', exact: true, component: Cities
    },
    {
        path: '/Home', exact: true, component: Home
    },
    {
        path: '/login', exact: true, component: Login
    },
]
export default routes;