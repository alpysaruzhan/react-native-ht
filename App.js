import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View> 
      <Text style={styles.title}>Welcome to ABank</Text>
    </View>
  )
}

function DetailsScreen() {
  return (
    <View style={styles.schet}>
      <Text style={styles.title}>Текущий счет:</Text>
      <Text style={styles.title}>157.000 KZT</Text>
    </View>
  )
}

function HelpScreen() {
  return (
    <View>
      <Text>Нужна помощь?</Text>
      <Text>Обратитесь к нам за полной помощью. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui animi nemo reprehenderit ab a accusantium alias rem expedita consequuntur! Facilis consectetur quisquam asperiores, exercitationem qui quaerat ipsa numquam pariatur excepturi.</Text>
      <Text>Email: bob24@gmail.com</Text>
      <Text>Phone: +7000 600 50 40</Text>
    </View>
  )
}

function TranslationsScreen() {
  return (
    <View>
      <Text style={styles.title}>Переводы</Text>
      <View style={styles.credit}>
        <Text>Перевод на сумму: 10.000 KZT</Text>
        <Text>Боб М.</Text>
      </View>
      <View style={styles.credit}>
        <Text>Перевод на сумму: 2500 KZT</Text>
        <Text>Алина Г.</Text>
      </View>
      <View style={styles.credit}>
        <Text>Перевод на сумму: 500 KZT</Text>
        <Text>Асем Ж.</Text>
      </View>
      <View style={styles.credit}>
        <Text>Перевод на сумму: 3000 KZT</Text>
        <Text>Алия Е.</Text>
      </View>
    </View>
  )
}

function CreditScreen() {
  return (
    <View>
      <Text>Кредитная информация</Text>
      <View style={styles.credit}>
        <Text>К оплате до 20.10.22.: 50.000 KZT</Text>
        <Text>Номер счета: 158159</Text>
        <Text>ИП Товары для дома</Text>
        <Button title="Погасить"></Button>
      </View> 
      <View style={styles.credit}>
        <Text>К оплате до 20.10.22.: 30.000 KZT</Text>
        <Text>Номер счета: 89759</Text>
        <Text>HouseDecor</Text>
        <Button title="Погасить"></Button>
      </View>
      <View style={styles.credit}>
        <Text>К оплате до 20.10.22.: 9758 KZT</Text>
        <Text>Номер счета: 78956</Text>
        <Text>ИП Мария</Text>
        <Button title="Погасить"></Button>
      </View>
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerStyle: { backgroundColor: 'green'}}}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={() => ({
              headerLeft: () => (
                <><Link style={styles.link} to={{ screen: 'Details' }}>Сurrent account</Link>
                <Link style={styles.link} to={{ screen: 'Translations' }}>Translations</Link>
                <Link style={styles.link} to={{ screen: 'Help' }}>Help</Link>
                <Link style={styles.link} to={{ screen: 'Credit' }}>Credit</Link></>
              ),
            })}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
          />
          <Stack.Screen
            name="Help"
            component={HelpScreen}
          />
          <Stack.Screen
            name="Translations"
            component={TranslationsScreen}
          />
          <Stack.Screen
            name="Credit"
            component={CreditScreen}
          />
        </Stack.Group>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  link:{
    marginLeft: 15
  },
  title:{
    marginLeft: 150,
    marginTop: 20
  
  },
  credit:{
    borderColor: "green",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20
  },
  schet:{
    borderWidth: 1,
    marginTop:15,
    borderColor: "green"
  }
});


export default App;