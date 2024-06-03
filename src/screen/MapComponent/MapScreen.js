import React, { useState } from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import ICurrentLocation from '../../assets/gps-user-loc-24px.svg';

const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: -6.16379825738526,
    longitude: 106.8410530310208,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  // Calculate zoom level based on latitude delta (This is an approximation)
  const zoomLevel = Math.log2(360 / region.latitudeDelta);

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
