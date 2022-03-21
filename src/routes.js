import Home from './pages/Home.vue';
import EmployeeList from './pages/EmployeeList.vue';
import AppError404 from './pages/404.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
	  {
        path: '/employee',
        name: 'Employee List',
        component: EmployeeList
    },
	{
        path: '/*',
        name: 'Secret',
        component: AppError404
    }
];

export default routes;
