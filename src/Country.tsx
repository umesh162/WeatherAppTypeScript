import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-paper';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './redux/store';
import {fetchWether} from './redux/userListSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import {RootStackParams} from '../App';

const Country = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const screenState: any = useSelector((state: RootState) => state.userList);
  return (
    <SafeAreaView style={{}}>
      <View style={{marginHorizontal: '5%'}}>
        <View style={{margin: '10%', alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: '600', color: 'black'}}>
            Weather Details
          </Text>
        </View>

        <View
          style={{
            height: 450,
            justifyContent: 'space-between',
            marginBottom: '10%',
          }}>
          <Image
            source={{
              uri: `https://countryflagsapi.com/png/${screenState.wether.wether.location.country.toLowerCase()}`,
              width: 200,
              height: 200,
            }}
            style={{
              marginTop: '10%',
            }}
          />
          <View>
            <Text style={style.font}>
              Capital: <Text>{screenState.wether.wether.location.name}</Text>
            </Text>
            <Text style={style.font}>
              Latitude:{' '}
              <Text>
                {Math.round(screenState.wether.wether.location.lat)} deg
              </Text>
            </Text>
            <Text style={style.font}>
              Longitude:{' '}
              <Text>
                {Math.round(screenState.wether.wether.location.lon)} deg
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <Button
            mode="contained"
            uppercase={false}
            style={{
              width: '50%',
            }}
            onPress={() => navigation.navigate('Weather')}>
            Capital Weather
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  font: {
    fontSize: 20,
    marginVertical: '4%',
  },
});

export default Country;
