import { View, Text, Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

const index = () => {
  return (
    <View style={{
      backgroundColor:'#42c8f5',
      flex :1
    }}>
      <StatusBar style='auto'/>
      <View style={{
        marginHorizontal:80,
        marginVertical: 90,
      }}>
        <Image source={require('../assets/images/1.png')}
        style = {{
          width: 200,
          height:200,
        }}/>
        <Text style={{
          fontSize:23,
          marginHorizontal:45
        }}>
          ABSENSI
        </Text>
        <Text style={{
          fontSize:15,
          marginHorizontal:65
          }}>
          ONLINE
        </Text>
      </View>
      <View style={{
        flex:1,
        flexDirection:'row',
        marginTop:170
      }}>
          <TouchableOpacity style={{
            width:250,
            height:50,
            backgroundColor:'white',
            borderRadius:10,
            marginLeft:15,
          }}>
            <Text style={{
              textAlign:'center',
              marginTop:15,
            }}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            width:50,
            height:50,
            borderRadius:10,
            marginLeft:20,
            backgroundColor:'white'
          }}></TouchableOpacity>
      </View>
    </View>
  )
}

export default index