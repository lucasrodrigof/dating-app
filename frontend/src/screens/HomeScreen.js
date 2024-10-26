// frontend/src/screens/HomeScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Button } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ userId }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/nearby?userId=${userId}`).then((response) => {
      setUsers(response.data);
    });
  }, [userId]);

  const handleLike = (likedUserId) => {
    axios.post(`http://localhost:3000/like`, { userId, likedUserId });
  };

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View>
          <Image source={{ uri: item.photos[0] }} style={{ width: 200, height: 200 }} />
          <Text>{item.name}</Text>
          <Button title="Like" onPress={() => handleLike(item._id)} />
        </View>
      )}
    />
  );
};

export default HomeScreen;
