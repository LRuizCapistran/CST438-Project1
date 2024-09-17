import React from 'react';
import { Image, View, Text, StyleSheet, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import { useEffect, useState } from 'react';


const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id:1 }]}
        keyExtractor={(item) => item.id.toString() }
        renderItem={({item}) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className='font-pmedium text-sm text-gray-100'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-white'>
                  Pokemon App
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={images.logo}
                  className='w-14 h-10'
                  resizeMode="contain"
                />
                <View></View>
              </View>
            </View>

            <SearchInput/>
          </View>

        )}
      />

    </SafeAreaView>

  );
};



export default Home;