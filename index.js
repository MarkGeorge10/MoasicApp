/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import addProduct from './Screens/addProduct';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => addProduct);
