import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Header = () => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.barHeader}>
            <FontAwesome6
                  name="bars-staggered"
                  color="#334155"
                  size={20}
            />
        </TouchableOpacity>
        <View style={styles.logo}>
            <ImageBackground
                source={require('@/assets/images/splashingLogo.png')}
                resizeMode="cover"
                style={styles.logoIMG}
            />
            <Text style={styles.logoLabel}>Mu<Text style={styles.logoLabelSpan}>Gi</Text></Text>
        </View>
        <View style={styles.avatar}>
            <TouchableOpacity>
                    <ImageBackground 
                    source={require('@/assets/images/mustapha.jpeg')}
                    resizeMode="cover"
                    style={styles.logoProfile}
                    />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export {Header}

const styles = StyleSheet.create({
    header:{
        marginVertical:15,
        marginTop:30,

        //flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        //backgroundColor:'yellow',
        minHeight:25
    },
    barHeader: {
        backgroundColor:'#f3f4f6',
        padding:8,
        width:40,
        borderRadius:300,
        height:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
       
    },
    logoIMG:{
        width: 45,
        height:40,
        borderRadius:300,
    },
    logoProfile:{
        width: '100%',
        height:'100%',
        
    },
    logoLabel:{
        fontWeight:'700',
        color:'#dc2626'
    },
    logoLabelSpan:{
        color:'#facc15'
    },
    logo:{
      display:'flex',
      gap:1,
      flexDirection:'row',
      alignItems:'center'
    },
    avatar:{
        width:50,
        height:50,
        backgroundColor:'#f97316',
        display:'flex',
        overflow:'hidden',
        borderWidth:2,
        borderColor:'#f97316',
        borderRadius:300
    }
  });