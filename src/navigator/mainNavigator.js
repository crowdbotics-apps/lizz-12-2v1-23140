import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2181979Navigator from '../features/BlankScreen2181979/navigator';
import BlankScreen1181976Navigator from '../features/BlankScreen1181976/navigator';
import BlankScreen0181241Navigator from '../features/BlankScreen0181241/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2181979: { screen: BlankScreen2181979Navigator },
BlankScreen1181976: { screen: BlankScreen1181976Navigator },
BlankScreen0181241: { screen: BlankScreen0181241Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
