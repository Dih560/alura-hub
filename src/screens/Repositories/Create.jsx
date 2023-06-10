import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles/create';
import {createRepo} from '../../services/requests/repos';

export default function CreateRepository({route, navigation}) {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const handleCreateRepo = async () => {
    let response = await createRepo({
      name,
      data,
      postId: route.params.postId,
    });
    if (response === 500) {
      Alert.alert(
        'Erro',
        'Não foi possível criar o repositório. Tente novamente mais tarde!',
      );
      return;
    }

    Alert.alert('Sucesso', 'Respositório criado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={styles.input}
        value={data}
        onChangeText={value => setData(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateRepo}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}
