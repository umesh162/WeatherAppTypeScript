import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParams} from '../App';
import {useDispatch} from 'react-redux';
import {AppDispatch} from './redux/store';
import {fetchWether} from './redux/userListSlice';
const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState<string>('');
  const [isLoad, setIsLoad] = useState<boolean>(false);
  return (
    <SafeAreaView>
      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          marginHorizontal: '15%',
        }}>
        <TextInput
          label={'Enter Country'}
          style={{
            marginBottom: '10%',
          }}
          onChangeText={e => setText(e.toLowerCase())}
        />
        <Button
          onPress={async () => {
            setIsLoad(true);
            await dispatch(fetchWether({name: text}));
            setIsLoad(false);
            setText('');
            navigation.navigate('Country');
          }}
          disabled={text === '' || isLoad}
          loading={isLoad}
          mode="contained"
          uppercase={false}>
          Press Me
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Home;
