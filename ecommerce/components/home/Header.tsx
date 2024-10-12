import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useCallback } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import OptimizedImageBackground from '@/components/ImagesComp/ImgBackground'
import { CustomSkeleton  } from '../Skeleton/CustomSkeleton';
const Header = React.memo(() => {
    //we using CallBack to memoize the handler
    const handlePress = useCallback(() => {
        // Your handler logic here
      }, []); // Add dependencies if necessary
    return (
      <View style={styles.header}>
          <TouchableOpacity style={styles.barHeader} onPress={handlePress}>
              <FontAwesome6
                    name="bars-staggered"
                    color="#334155"
                    size={20}
              />
          </TouchableOpacity>
          <OptimizedImageBackground
            source={require('@/assets/images/splashingLogo.png')}
            style={styles.logoIMG}
            containerStyle={styles.logo}
          />
          <OptimizedImageBackground
            source={require('@/assets/images/mustapha.jpeg')}
            style={styles.logoProfile}
            containerStyle={styles.avatar}
          />
      </View>
    )
  })



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


  export default Header