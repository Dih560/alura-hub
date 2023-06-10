import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import styles from './styles';

import {getUser} from '../../services/requests/users';

export default function Main({navigation}) {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState({});

  const handleGetUser = async () => {
    const result = await getUser(userName);

    if (Object.keys(result).length === 0) {
      Alert.alert(
        'Usuário não encontrado',
        `Não foi possível encontrar o usuário ${userName}`,
      );
    }

    setUserName('');
    setUser(result);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.keys(user).length > 0 && (
          <>
            <View style={styles.background} />
            <View style={styles.imageArea}>
              <Image
                source={{
                  uri: user.avatar_url,
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.nameText}>{user.name}</Text>
            <Text style={styles.emailText}>{user.email}</Text>
            <View style={styles.followersArea}>
              <View style={styles.followers}>
                <Text style={styles.followersNumber}>{user.followers}</Text>
                <Text style={styles.followersText}>Seguidores</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.followersNumber}>{user.following}</Text>
                <Text style={styles.followersText}>Seguindo</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Repositories', {userId: user.id})
              }>
              <Text style={styles.repositories}>Ver os repositórios</Text>
            </TouchableOpacity>
          </>
        )}

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={styles.input}
          value={userName}
          onChangeText={value => setUserName(value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleGetUser}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
