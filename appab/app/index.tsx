import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const index = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Absensi Guru
      </Text>
      <View
        style={{
          width: 320,
          height: 70,
          backgroundColor: "#d7dbdb",
          borderRadius: 10,
          marginHorizontal: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            marginVertical: 17,
            marginLeft: 10,
            flexDirection: "column",
          }}
        >
          Royhan S.kom
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 160,
              marginTop: -35,
              borderRadius: 10,
            }}
          >
            <Text>Tidak Hadir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              backgroundColor: "#42c8f5",
              marginTop: -40,
              marginLeft: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginVertical: "auto",
                color: "white",
              }}
            >
              Hadir
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: 320,
          height: 70,
          backgroundColor: "#d7dbdb",
          borderRadius: 10,
          marginHorizontal: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            marginVertical: 17,
            marginLeft: 10,
            flexDirection: "column",
          }}
        >
          Nauval S.kom
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 160,
              marginTop: -35,
              borderRadius: 10,
            }}
          >
            <Text>Tidak Hadir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              backgroundColor: "#42c8f5",
              marginTop: -40,
              marginLeft: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginVertical: "auto",
                color: "white",
              }}
            >
              Hadir
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: 320,
          height: 70,
          backgroundColor: "#d7dbdb",
          borderRadius: 10,
          marginHorizontal: "auto",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            marginVertical: 17,
            marginLeft: 10,
            flexDirection: "column",
          }}
        >
          Ajay S.kom
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              marginLeft: 160,
              marginTop: -35,
              borderRadius: 10,
            }}
          >
            <Text>Tidak Hadir</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 30,
              backgroundColor: "#42c8f5",
              marginTop: -40,
              marginLeft: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                marginVertical: "auto",
                color: "white",
              }}
            >
              Hadir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default index;
