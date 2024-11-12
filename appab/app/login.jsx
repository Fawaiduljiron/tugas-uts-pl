import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View>
      <Text style={{
        fontSize:20,
        textAlign:'center',
        marginTop:250,
      }}>Log in</Text>
      <TouchableOpacity style={{
        backgroundColor:'#a7b1b5',
        width:320,
        height:50,
        marginHorizontal:"auto",
        borderRadius:10,
        marginTop:50
      }}>
        <Text style={{
          textAlign:'center',
          marginTop:13,
          color: 'white'
        }}
        >User Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        backgroundColor:'#a7b1b5',
        width:320,
        height:50,
        marginHorizontal:"auto",
        borderRadius:10,
        marginTop:10
      }}>
        <Text style={{
          textAlign:'center',
          marginTop:13,
          color: 'white'
        }}
        >Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        backgroundColor:'#4dd1e8',
        width:320,
        height:50,
        marginHorizontal:"auto",
        borderRadius:10,
        marginTop:70
      }}>
        <Text style={{
          textAlign:'center',
          marginTop:13,
          color: 'white'
        }}
        >Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
      }}>
        <Text style={{
          textAlign:'center',
          marginTop:13,
        }}
        >Batalkan</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index