// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {orderCake, orderIceCream, restockCake} from '../redux/actions';
// import Store from '../redux/store';

// const HomeScreen = () => {
//   const counter = useSelector(state => state.cake.numberOfCakes);
//   const iceCreamCounter = useSelector(
//     state => state?.iceCream.numberOfIceCreams,
//   );
//   const [cakes, setCakes] = useState(0);
//   const dispatch = useDispatch();
//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize: 20, fontWeight: '600'}}>
//         Total Cakes: {counter}{' '}
//       </Text>
//       <Text style={{fontSize: 20, fontWeight: '600'}}>
//         Total Ice-Cream: {iceCreamCounter}{' '}
//       </Text>
//       <View style={{flexDirection: 'row'}}>
//         <Button onPress={() => setCakes(cakes - 1)} title="decrease" />
//         <Text>{cakes}</Text>
//         <Button onPress={() => setCakes(cakes + 1)} title="increase" />
//       </View>
//       <Button onPress={() => dispatch(orderCake(cakes))} title="order cake" />
//       <Button
//         onPress={() => dispatch(orderIceCream())}
//         title="order ice cream"
//       />
//       <TouchableOpacity
//         onLongPress={() => dispatch(restockCake(20))}
//         delayLongPress={5000}
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: 100,
//           height: 100,
//           borderRadius: 50,
//           backgroundColor: 'pink',
//         }}>
//         <Text>+20</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         onLongPress={() => dispatch(restockCake(20))}
//         delayLongPress={5000}
//         style={{
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: 100,
//           height: 100,
//           borderRadius: 50,
//           backgroundColor: 'pink',
//         }}>
//         <Text>+20</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// export default HomeScreen;
