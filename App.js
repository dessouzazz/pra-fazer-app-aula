import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons} from '@expo/vector-icons'
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import Tasks from './src/screens/Tasks'
import Account from './src/screens/Account'
import About from './src/screens/About'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
            // Abri a página inicial
            initialRouteName="Login"
            // Aplica estilo na barra de navegação
            screenOptions={{
                headerTitleAlign: 'center',
                headerTintColor: '#FFF',
                headerStyle: { backgroundColor: '#F60' }
            }}
            >

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} options={{ title: 'Cadastro de Usuário'}} />

                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Cria o menu do rodapé do aplicativo
function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#FFF", //Cor de ícones ativos
                tabBarInactiveTintColor: "#F60", //Cor de ícones inativos
                tabBarActiveBackgroundColor: "#F60", //Ativa a cor de fundo
                tabBarStyle: { backgroundColor: "#070A52"}, //Formata a cor de fundo da Tab Navigation
                headerTitleAlign: 'center', // ajusta o alinhamento do texto do header navigation 
                headerTintColor: "#FFF", // mudar a cor do texto do header navigation
                headerStyle: { backgroundColor: "#F60"} // Aplica cor a header do tab navigation
            }}      
        >
            <Tab.Screen name="Tasks" component={Tasks} 
                options={{
                    title: 'Tarefas',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="check-bold" color= {color} size={32} />
                    ),
                }} 
            />

            <Tab.Screen name="Account" component={Account} 
                options={{
                    title: 'Dados do Usuário',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color= {color} size={32} />
                    ),
                }} 
            />

            <Tab.Screen name="About" component={About} 
                options={{ 
                    title: 'Sobre o aplicativo',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="information-outline" color= {color} size={32} />
                    ),
                }} 
            />
        </Tab.Navigator>
    );
}