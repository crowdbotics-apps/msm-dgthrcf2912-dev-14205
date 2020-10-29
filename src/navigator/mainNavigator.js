import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth313480Navigator from '../features/EmailAuth313480/navigator';
import BlankScreen013479Navigator from '../features/BlankScreen013479/navigator';
import BlankScreen113478Navigator from '../features/BlankScreen113478/navigator';
import BlankScreen213477Navigator from '../features/BlankScreen213477/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth313480: { screen: EmailAuth313480Navigator },
BlankScreen013479: { screen: BlankScreen013479Navigator },
BlankScreen113478: { screen: BlankScreen113478Navigator },
BlankScreen213477: { screen: BlankScreen213477Navigator },

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
