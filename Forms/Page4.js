



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import Header from '../Screens/Header';
// import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native'; 
// import { useAppContext } from './AppContext'; 
// const { width, height } = Dimensions.get('window');

// export default function Page4() {
//   const navigation = useNavigation(); 
//   const { setFormData } = useAppContext();
//   // State for form fields
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');

//   // Handle next button click
//   const handleNext = () => {
//     setFormData(prevData => ({
//       ...prevData,
//       firstName,
//       lastName,
//       phone,
//       email,
//       address,
//     }));
//     navigation.navigate('form5');
//   };

//   return (
//     <View style={{ backgroundColor: "#264782", paddingBottom: 110 }}>
//       <Header />
//       <KeyboardAvoidingView 
//         behavior={Platform.OS === 'android' ? 'padding' : 'height'}
//         style={{ flex: 0 }}
//       >
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
//           <View style={styles.container}>
//             <View style={{ paddingTop: width * 0.05 }}>
//               <Text style={styles.title}>Personal Details</Text>
//             </View>
//             <View style={styles.inputview}>
//               <PaperInput
//                 label="First Name"
//                 value={firstName}
//                 onChangeText={text => setFirstName(text)}
//                 mode="outlined"
//                 style={styles.input}
//               />
//             </View>
//             <View style={styles.inputview}>
//               <PaperInput
//                 label="Last Name"
//                 value={lastName}
//                 onChangeText={text => setLastName(text)}
//                 mode="outlined"
//                 style={styles.input}
//               />
//             </View>
//             <View style={styles.inputview}>
//               <PaperInput
//                 label="Phone"
//                 value={phone}
//                 onChangeText={text => setPhone(text)}
//                 mode="outlined"
//                 style={styles.input}
//                 keyboardType="numeric"
//               />
//             </View>
//             <View style={styles.inputview}>
//               <PaperInput
//                 label="Email"
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//                 mode="outlined"
//                 style={styles.input}
//               />
//             </View>
//             <View style={styles.inputview}>
//               <PaperInput
//                 label="Address"
//                 value={address}
//                 onChangeText={text => setAddress(text)}
//                 mode="outlined"
//                 style={styles.input}
//               />
//             </View>
//             <View style={styles.buttonview}>
//               <TouchableOpacity onPress={() => navigation.goBack()}>
//                 <Text style={styles.buttontext}>Back</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={handleNext}>
//                 <Text style={styles.buttontext}>Next</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 0,
//   },
//   inputview: {
//     paddingHorizontal: width * 0.10,
//     paddingVertical: width * 0.01,
//     marginVertical: width * 0.00
//   },
//   buttontext: {
//     fontSize: width * 0.04,
//     fontWeight: '400',
//     color: 'black',
//     backgroundColor: 'white',
//     textAlign: 'center',
//     paddingVertical: width * 0.02, 
//     paddingHorizontal: width * 0.10,
//     borderRadius: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//     elevation: 20
//   },
//   buttonview: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: width * 0.10,
//     marginBottom: width * 0.05
//   },
//   container: {
//     backgroundColor: 'white',
//     marginHorizontal: width * 0.06,
//     marginTop: width * 0.23,
//     marginBottom: width * 0.08,
//     elevation: 10,
//     borderRadius: 20
//   },
//   title: {
//     fontSize: width * 0.05,
//     marginVertical: width * 0.03,
//     marginLeft: width * 0.09
//   },
// });









import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Header from '../Screens/Header';
import { Provider as PaperProvider, TextInput as PaperInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { useAppContext } from './AppContext'; 
import { Modalize } from 'react-native-modalize';
import Page5 from './Page5'; // Import the Page5 component

const { width, height } = Dimensions.get('window');

export default function Page4() {
  const navigation = useNavigation(); 
  const { setFormData } = useAppContext();
  const modalizeRef = useRef(null);

  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  // Handle next button click
  const handleNext = () => {
    setFormData(prevData => ({
      ...prevData,
      firstName,
      lastName,
      phone,
      email,
      address,
    }));

 
    modalizeRef.current?.open();
  };

  return (
    <View style={{ backgroundColor: "#264782", paddingBottom: 110 }}>
      <Header />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={{ flex: 0 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={{ paddingTop: width * 0.05 }}>
              <Text style={styles.title}>Personal Details</Text>
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="First Name"
                value={firstName}
                onChangeText={text => setFirstName(text)}
                mode="outlined"
                style={styles.input}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Last Name"
                value={lastName}
                onChangeText={text => setLastName(text)}
                mode="outlined"
                style={styles.input}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Phone"
                value={phone}
                onChangeText={text => setPhone(text)}
                mode="outlined"
                style={styles.input}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode="outlined"
                style={styles.input}
              />
            </View>
            <View style={styles.inputview}>
              <PaperInput
                label="Address"
                value={address}
                onChangeText={text => setAddress(text)}
                mode="outlined"
                style={styles.input}
              />
            </View>
            <View style={styles.buttonview}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.buttontext}>Back</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext}>
                <Text style={styles.buttontext}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Sheet */}
      <Modalize
        ref={modalizeRef}
        snapPoint={900}
        modalHeight={height * 0.9}
        handlePosition="inside"
        modalStyle={styles.modal}
       
      >
        <Page5 /> 
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
  },
  inputview: {
    paddingHorizontal: width * 0.10,
    paddingVertical: width * 0.01,
    marginVertical: width * 0.00
  },
  buttontext: {
    fontSize: width * 0.04,
    fontWeight: '400',
    color: 'black',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingVertical: width * 0.02, 
    paddingHorizontal: width * 0.10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    elevation: 20
  },
  buttonview: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: width * 0.10,
    marginBottom: width * 0.05
  },
  container: {
    backgroundColor: 'white',
    marginHorizontal: width * 0.06,
    marginTop: width * 0.23,
    marginBottom: width * 0.08,
    elevation: 10,
    borderRadius: 20
  },
  title: {
    fontSize: width * 0.05,
    marginVertical: width * 0.03,
    marginLeft: width * 0.09
  },
  modal:{
  borderTopLeftRadius:40,
  borderTopRightRadius:40,
    
  }
});


