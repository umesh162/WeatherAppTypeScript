import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from './redux/store';

const Weather = () => {
  const screenState: any = useSelector((state: RootState) => state.userList);
  return (
    <SafeAreaView>
      <View style={{margin: '10%', alignItems: 'center'}}>
        <Text style={{fontSize: 24, fontWeight: '600', color: 'black'}}>
          Weather Details
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: '10%',

          height: '100%',
          paddingVertical: '40%',
        }}>
        <View style={{}}>
          <Image
            source={{
              uri: `${screenState.wether.wether.current.weather_icons[0]}`,
              width: 110,
              height: 110,
            }}
          />
          <Text style={style.font}>
            Temperature: {screenState.wether.wether.current.temperature} °C
          </Text>
          <Text style={style.font}>
            Precipitation: {screenState.wether.wether.current.precip} %
          </Text>
          <Text style={style.font}>
            Wind speed: {screenState.wether.wether.current.wind_speed} kmph
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  font: {
    fontSize: 20,
    marginVertical: '4%',
    color: 'black',
  },
});

export default Weather;
