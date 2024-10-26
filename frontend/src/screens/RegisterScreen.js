import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [photos, setPhotos] = useState(['']);
  const [location, setLocation] = useState({ type: 'Point', coordinates: [0, 0] });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email,
        age,
        gender,
        bio,
        photos,
        location,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput placeholder="Gender" value={gender} onChangeText={setGender} />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
