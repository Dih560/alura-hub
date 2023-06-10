import React, {useCallback, useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import {getUserRepos} from '../../services/requests/repos';
import {useIsFocused} from '@react-navigation/native';

export default function Repositories({route, navigation}) {
  const [repo, setRepo] = useState([]);
  const update = useIsFocused();
  const {userId} = route.params;

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.repository}
      onPress={() => navigation.navigate('InfoRepository', {repository: item})}>
      <Text style={styles.nameRepository}>{item.name}</Text>
      <Text style={styles.dateRepository}>Atualizado em {item.data}</Text>
    </TouchableOpacity>
  );

  const handleGetRepos = useCallback(async () => {
    let results = await getUserRepos(userId);
    setRepo(results);
  }, [userId]);

  useEffect(() => {
    handleGetRepos();

    return setRepo([]);
  }, [handleGetRepos, update]);

  return (
    <View style={styles.container}>
      <Text style={styles.textRepositories}>
        {repo.length} repositórios criados
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('CreateRepository', {postId: userId})
        }>
        <Text style={styles.buttonText}>Adicionar novo repositório</Text>
      </TouchableOpacity>

      <FlatList
        data={repo}
        style={styles.list}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
