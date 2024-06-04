import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Text, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import ICurrentLocation from '../../assets/gps-user-loc-24px.svg';
import Modal from 'react-native-modal';
import BottomSheet from '../SmallComponents/BottomSheet';
import colors from '../../utils/Colors';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -6.16379825738526,
    longitude: 106.8410530310208,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dummyData = [
    { id: '1', name: 'Device 1', location: 'Location 1' },
    { id: '2', name: 'Device 2', location: 'Location 2' },
    { id: '3', name: 'Device 3', location: 'Location 3' },
    { id: '4', name: 'Device 4', location: 'Location 4' },
    { id: '5', name: 'Device 5', location: 'Location 6' },
    { id: '6', name: 'Device 6', location: 'Location 7' },
    { id: '7', name: 'Device 7', location: 'Location 8' },
  ];

  // Calculate zoom level based on latitude delta (This is an approximation)
  const zoomLevel = Math.log2(360 / region.latitudeDelta);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        <Marker
          coordinate={{
            latitude: -6.16379825738526,
            longitude: 106.8410530310208,
          }}
        >
          <View style={{ transform: [{ scale: Math.min(Math.max(1, zoomLevel / 10), 3) }] }}>
            <ICurrentLocation width={20} height={20} />
          </View>
        </Marker>
      </MapView>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Tap for Details</Text>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}
      >
        <View style={styles.bottomSheet}>
          <BottomSheet data={dummyData} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: '48%',
    transform: [{ translateX: -50 }],
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheet: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default MapScreen;
