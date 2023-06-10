import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, TextInput, Alert} from 'react-native';
import styles from './styles/info';
import {deleteRepo, updateRepo} from '../../services/requests/repos';

export default function InfoRepository({route, navigation}) {
  const [name, setName] = useState('');
  const [data, setData] = useState('');

  const {repository} = route.params;

  const handleUpdateRepo = async () => {
    let response = updateRepo(repository.id, {...repository, name, data});
    if (response === 500) {
      Alert.alert(
        'Erro',
        'Não foi possível atualizar o repositório. Tente novamente mais tarde!',
      );
      return;
    }

    Alert.alert('Sucesso', 'Respositório atualizado com sucesso!');
    navigation.goBack();
  };

  const handleDeleteRepo = async () => {
    let response = deleteRepo(repository.id);
    if (response === 500) {
      Alert.alert(
        'Erro',
        'Não foi possível excluir o repositório. Tente novamente mais tarde!',
      );
      return;
    }

    navigation.goBack();
  };

  useEffect(() => {
    setName(repository.name);
    setData(repository.data);
  }, [repository]);

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
      <TouchableOpacity style={styles.button} onPress={handleUpdateRepo}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonDelete]}
        onPress={handleDeleteRepo}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}
