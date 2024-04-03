import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Icon, Text } from "@rneui/base";
import telaFormulario from './src/screens/telaFormulario';
import telaLista from './src/screens/telaLista';

const { Navigator, Screen } = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="TelaList"
        screenOptions={{
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
        }}
      >
        <Screen
          name="TelaList"
          component={telaLista}
          options={({ navigation }) => {
            return {
              title: "Tela Listagem",
              headerRight: () => (
                <Button
                  type="clear"
                  icon={<Icon name="add" color="white" size={30} />}
                  onPress={()=> navigation.navigate('TelaForm')}
                  />
              ),
            };
          }}
        />
 
        <Screen 
          name="TelaForm" 
          component={telaFormulario} 
          options={{title:'TELA FORMULÁRIO'}} 
        />

      </Navigator>
    </NavigationContainer>
  );
}
 