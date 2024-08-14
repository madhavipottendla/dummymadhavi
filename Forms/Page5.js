import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from './AppContext';
import Header from '../Screens/Header';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const { width } = Dimensions.get('window');

export default function Page5() {
  const { formData } = useAppContext();
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      {/* <Header /> */}
      {/* <ScrollView contentContainerStyle={styles.scrollContainer}> */}
        <View style={styles.container}>
          <View style ={{display:'flex',flexDirection:'row',gap:130}}>
          <Text style={styles.title1}>Preview Details</Text>
          <Icon name="download-outline" size={24} color="black" style={styles.icon} />
          </View>
          <Text style = {{fontSize:20,paddingVertical:20}}>Preview Details</Text>
          <View style={styles.cont1}>
            <Text style={styles.title}>Shop Details</Text>
            <View style={{flexDirection:'row'}}>
            <Entypo name="shop" size={20} style={styles.icons}></Entypo>
            <Text style={styles.text}>{formData.shopname}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Entypo name="location-pin" size={20} style={styles.icons}></Entypo>
            <Text style={styles.text}>{formData.district},{formData.mandal},  </Text>
            </View>
            <View style={{paddingLeft:width*0.07,
              marginTop:width*-0.02
            }}>
            <Text style={styles.text}> {formData.village} ,{formData.pincode}.</Text>
            </View>
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Personal Details</Text>
            <View style={{flexDirection:'row'}}>
            <Icon name="person" size={20} color="black" style={styles.icons} />
            <Text style={styles.text}>{formData.firstName}{formData.lastName}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name="call" size={20} color="black" style={styles.icons} />
            <Text style={styles.text}>{formData.phone}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Icon name="mail" size={20} color="black" style={styles.icons} />
            <Text style={styles.text}>{formData.email}</Text>
            </View>
            <View style={{flexDirection:'row'}} >
            <Entypo name="location-pin" size={20} style={styles.icons}></Entypo>
             <Text style={styles.text}>{formData.address}</Text>
             </View>
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Complaint Details</Text>
            <View style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="clipboard-text" size={20} color="black" style={styles.icons} />
            <Text style={styles.text}>{formData.complaintText}{formData.complaintType}</Text>
            
            </View>
            
            <Text style={styles.text}></Text>
            {formData.recordedURI && (
              <Text style={styles.detail}>{formData.recordedURI}</Text>
            )}
          </View>
          <View style={styles.cont1}>
            <Text style={styles.title}>Attachments</Text>
            {formData.imageUri && (
              <Image
                source={{ uri: formData.imageUri }}
                style={styles.image}
              />
            )}
          </View>
          <View style={styles.btnview}>
          <View>
          <TouchableOpacity>
                  <Text style={styles.btntext} onPress={()=>navigation.navigate('form4')}>Back</Text>
              </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity>
                  <Text style={styles.btntext} onPress={()=>navigation.navigate('last')}>Submit</Text>
              </TouchableOpacity>
          </View>
          </View>
        </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,  
  

  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: width * 0.05,
    
    elevation: 0,
    // marginHorizontal: width * 0.05,
    // marginVertical: width * 0.03,
    // borderRadius: 10,

  },
  title: {
    fontSize: width * 0.05,
    marginBottom: width * 0.03,
    paddingLeft: width * 0.04,
  },
  title1: {
    fontSize: width * 0.05,
    marginBottom: width * 0.03,
    paddingLeft: width * 0.04,
    color:'white',
    fontWeight:'600'
  },

  image: {
    width: width * 0.60,
    height: width * 0.28,
    alignSelf: 'start',
    borderRadius: 5,
    marginTop: width * 0.0,
    marginLeft: width * 0.05,
    marginBottom: width * 0.03,
  },
  text: {
    fontSize: width * 0.042,
    paddingLeft: width * 0.04,
    paddingBottom: width * 0.02,
    fontWeight:'500',
    marginLeft:-5
  },
  cont1: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation:20,
    marginBottom: width * 0.03,
  },
  btntext:{
    fontSize:width*0.05,
    paddingHorizontal:width*0.05,
    paddingVertical:width*0.02,
    borderWidth:0,
    textAlign:'center',
    borderRadius:20,
    elevation:20,
    backgroundColor:'whitesmoke'
  },
  btnview:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:width*0.04
    
  },
  icon:{
    color:'white'
  },
  icons:{
    marginLeft:width*0.03
  }
});
