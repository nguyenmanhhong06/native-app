import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/pages/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './app/pages/SignUp/SignUp';
import Home from './app/pages/Home/Home';
import MyTabs from './app/pages/MyTabs/MyTabs';
import Item from './app/pages/ProductItem/Item';
import Cart from './app/pages/Cart/Cart';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Payment"
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Signup" component={SignUp} /> */}
        <Stack.Screen name="Payment" component={Cart} />
        {/* <Stack.Screen name="MyTabs" component={MyTabs} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: "center",
    // justifyContent: "center",
  },
});
