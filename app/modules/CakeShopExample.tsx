// import React, {useState} from 'react';
// import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {orderCake} from '../features/cake/cakeSlice';
// import {orderCookie} from '../features/cookies/cookieSlice';
// import {fetchUsers} from '../features/users/userSlice';

// const HomeScreen = () => {
//   const dispatch = useDispatch();

//   const cakeLeft = useSelector(state => state.cake.numberOfCakes);
//   const cookieLeft = useSelector(state => state.cookie.numberOfCookies);

//   const [countCake, setCountCake] = useState(0);
//   const [countCookie, setCountCookie] = useState(0);
//   return (
//     <View style={styles.container}>
//       <View style={{alignItems: 'center'}}>
//         <Text style={{fontSize: 20, fontWeight: '600'}}>
//           Total Cakes: {cakeLeft}
//         </Text>
//         <TouchableOpacity
//           onPress={() => {
//             dispatch(fetchUsers());
//           }}
//           style={{
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 200,
//             height: 60,
//             backgroundColor: 'pink',
//           }}>
//           <Text style={{fontSize: 20, fontWeight: '600'}}>Increase</Text>
//         </TouchableOpacity>
//         <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 30}}>
//           Cakes: {countCake}
//         </Text>
//         <TouchableOpacity
//           onPress={() => setCountCake(countCake - 1)}
//           style={{
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 200,
//             height: 60,
//             backgroundColor: 'pink',
//           }}>
//           <Text style={{fontSize: 20, fontWeight: '600'}}>decrease</Text>
//         </TouchableOpacity>
//       </View>
//       <Button
//         title="order"
//         onPress={() => {
//           dispatch(orderCake(countCake));
//         }}
//       />
//       <View style={{height: 50}}></View>
//       <Text style={{fontSize: 20, fontWeight: '600'}}>
//         Total Cookie: {cookieLeft}
//       </Text>
//       <View style={{alignItems: 'center'}}>
//         <TouchableOpacity
//           onPress={() => setCountCookie(countCookie + 1)}
//           style={{
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 200,
//             height: 60,
//             backgroundColor: 'beige',
//           }}>
//           <Text style={{fontSize: 20, fontWeight: '600'}}>Increase</Text>
//         </TouchableOpacity>
//         <Text style={{fontSize: 30, fontWeight: '700', marginVertical: 30}}>
//           Cookies: {countCookie}
//         </Text>
//         <TouchableOpacity
//           onPress={() => setCountCookie(countCookie - 1)}
//           style={{
//             borderRadius: 10,
//             justifyContent: 'center',
//             alignItems: 'center',
//             width: 200,
//             height: 60,
//             backgroundColor: 'beige',
//           }}>
//           <Text style={{fontSize: 20, fontWeight: '600'}}>decrease</Text>
//         </TouchableOpacity>
//       </View>
//       <Button
//         title="order"
//         onPress={() => {
//           dispatch(orderCookie(countCookie));
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#696969',
//   },
// });

// export default HomeScreen;
