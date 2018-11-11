import { createStackNavigator } from 'react-navigation';

import Login from './Pages/Login';
import Timeline from './Pages/Timeline';
import New from './Pages/New'; 

const Routes = createStackNavigator({
    Login,
    Timeline,
    New
});

export default Routes;
