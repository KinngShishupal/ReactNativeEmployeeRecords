import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import uuid from 'react-uuid'
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [complete,setComplete]=useState([]);
  const [employee,setEmployee]=useState({firstname:"",
                                        lastname:"",
                                        email:"",
                                        phone:""   });
  
  const onSubmithandler=()=>{
    if(employee.firstname&&employee.lastname&&employee.email&&employee.phone){
      setComplete([...complete,{...employee,id:uuid()}])
      Alert.alert("Sucess","Data entered successfully",[{text:"close"}])
      setEmployee({firstname:"",
                lastname:"",
                email:"",
                phone:""   });
    }

    else{
      Alert.alert("Ooops","Please fill out all fields",[{text:"close"}])
    }
        
  }                                    

  return (
    <View style={styles.container}>
      <TextInput style={styles.field}placeholder="Please Enter Your First Name..." value={employee.firstname} onChangeText={(val)=>setEmployee({...employee,firstname:val})} />
      <TextInput style={styles.field}placeholder="Please Enter Your Last Name..."  value={employee.lastname} onChangeText={(val)=>setEmployee({...employee,lastname:val})} />
      <TextInput style={styles.field}placeholder="Please Enter Your Email Address..." 
      keyboardType="email-address" value={employee.email} onChangeText={(val)=>setEmployee({...employee,email:val})} />
      <TextInput style={styles.field}placeholder="Please Enter Your Phome Name..." 
      keyboardType="phone-pad" value={employee.phone} onChangeText={(val)=>setEmployee({...employee,phone:val})} />
      <Button style={styles.button} title="Save" color="green" onPress={onSubmithandler}/>
      
      {complete?<Text>Employee Record</Text>:<Text>No Record</Text>}
     

      <FlatList 
      data={complete}
      renderItem={({item,index})=>(
         <View key={item.id} style={styles.singledata}>
           <Text style={styles.serialno}>{index + 1}</Text>
           <Text style={styles.firstname}>First Name : {item.firstname}</Text>
           <Text style={styles.lastname}>Last Name : {item.lastname}</Text>
           <Text style={styles.email}>Email : {item.email}</Text>
           <Text style={styles.phone}>Phone : {item.phone}</Text>
         </View>
      )}
     style={styles.listcontainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal:"auto",
    alignItems:"center",
    marginTop:50   
  },

  field:{
    width:"80%",
    height:50,
    borderColor:"red",
    borderWidth:1,
    marginBottom:10,
    padding:10

  },
  button:{
  padding:50
  },

  listcontainer:{
  width:"80%",
  marginTop:10
    },

  singledata:{
    borderWidth:1,
    borderColor:"green",
    borderRadius:4,
    marginBottom:5,
    padding:5
  },
  serialno:{
  fontSize:20,
  textAlign:"center",
  borderWidth:1,
  borderRadius:50,
  width:50,
  alignSelf:"center"
  },
  firstname:{
    marginBottom:2,
    textTransform:"capitalize",
  },
  lastname:{
    marginBottom:2,
    textTransform:"capitalize",
  },
  email:{
    marginBottom:2
  }
  
});
