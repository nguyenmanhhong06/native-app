import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import arrowLeft from '../../../assets/arrow-left.png';
import superman from '../../../assets/superman.png';
import clock from '../../../assets/clock.png';
import location from '../../../assets/location.png';
import videoplay from '../../../assets/video-play.png';
import zalo from '../../../assets/zalo.png';
import momo from '../../../assets/momo.png';
import discountshape from '../../../assets/discount-shape.png';
import shopee from '../../../assets/shopee.png';
import atmcard from '../../../assets/atmcard.png';
import visacard from '../../../assets/visacard.png';
import arrowRight from '../../../assets/arrow-right.png';
function Cart() {
  const viewRef = useRef();
  const onPressFunction = () => {
    viewRef.current.setNativeProps({
      style: {
        borderColor: '#FCC434',
        borderWidth: 1,
        borderRadius: 10,
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Image source={arrowLeft} style={{ height: 40, width: 40 }}></Image>
          <View
            style={{
              flex: 5,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 28, fontWeight: '700', color: '#F2F2F2', marginRight: 40 }}>
              Payment
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#1C1C1C',
            borderRadius: 8,
            marginBottom: 10,
          }}>
          <Image source={superman} style={{ borderRadius: 8 }}></Image>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FCC434' }}>
              Avengers: Infinity War
            </Text>
            <View style={{ marginTop: 5 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={videoplay}></Image>
                <Text style={{ color: '#E6E6E6' }}>Acton, adventure, sci-fi</Text>
              </View>
            </View>
            <View style={{ marginTop: 5 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={location}></Image>
                <Text style={{ color: '#E6E6E6' }}>Vincom Ocean Park CGV</Text>
              </View>
            </View>
            <View style={{ marginTop: 5 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                <Image source={clock}></Image>
                <Text style={{ color: '#E6E6E6' }}>10.12.2022 • 14:15</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#F2F2F2', fontWeight: '400', fontSize: 16 }}>Oder ID</Text>
          <Text style={{ color: '#F2F2F2', fontWeight: '700', fontSize: 16 }}>78889377726</Text>
        </View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#F2F2F2', fontWeight: '400', fontSize: 16 }}>Seat</Text>
          <Text style={{ color: '#F2F2F2', fontWeight: '700', fontSize: 16 }}>H7, H8</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            backgroundColor: '#1C1C1C',
            borderRadius: 8,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image source={discountshape}></Image>
            <TextInput
              style={{ height: 40, color: '#949494' }}
              placeholderTextColor={'#949494'}
              placeholder="discount code"></TextInput>
          </View>
          <View
            style={{
              backgroundColor: '#FCC434',
              paddingVertical: 10,
              borderRadius: 10,
              paddingHorizontal: 25,
            }}>
            <Text style={{ color: '#949494', color: '#000', fontWeight: 'bold' }}>Apply</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#595959',
            borderBottomWidth: 0.5,
            marginTop: 15,
          }}></View>
        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#F2F2F2', fontWeight: '400', fontSize: 16, marginBottom: 10 }}>
            Total
          </Text>
          <Text style={{ color: '#F2F2F2', fontWeight: '700', fontSize: 16 }}>189.000 VND</Text>
        </View>
        <View>
          <Text style={{ color: '#F2F2F2', fontWeight: '700', fontSize: 16, marginBottom: 10 }}>
            Payment Method
          </Text>
        </View>
        <View>
          <View
            // ref={viewRef}
            // onPress={onPressFunction}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Image source={zalo}></Image>
              <Text style={{ color: '#F2F2F2', fontWeight: '700', fontSize: 16 }}>Zalo Pay</Text>
            </View>
            <View>
              <Image source={arrowRight}></Image>
            </View>
          </View>
          <View
            // ref={viewRef}
            // onPress={onPressFunction}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Image source={momo}></Image>
              <Text style={{ color: '#F2F2F2', fontWeight: '500', fontSize: 16 }}>MoMo</Text>
            </View>
            <View>
              <Image source={arrowRight}></Image>
            </View>
          </View>
          <View
            // ref={viewRef}
            // onPress={onPressFunction}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Image source={shopee}></Image>
              <Text style={{ color: '#F2F2F2', fontWeight: '500', fontSize: 16 }}>Shopee Pay</Text>
            </View>
            <View>
              <Image source={arrowRight}></Image>
            </View>
          </View>
          <View
            // ref={viewRef}
            // onPress={onPressFunction}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Image source={atmcard}></Image>
              <Text style={{ color: '#F2F2F2', fontWeight: '500', fontSize: 16 }}>ATM Card</Text>
            </View>
            <View>
              <Image source={arrowRight}></Image>
            </View>
          </View>
          <View
            // ref={viewRef}
            // onPress={onPressFunction}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              alignItems: 'center',
              backgroundColor: '#1C1C1C',
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
              <Image source={visacard}></Image>
              <View>
                <Text style={{ color: '#F2F2F2', fontWeight: '500', fontSize: 16 }}>
                  International payments
                </Text>
                <Text style={{ color: '#F2F2F2', fontWeight: '400', fontSize: 12 }}>
                  (Visa, Master, JCB, Amex)
                </Text>
              </View>
            </View>
            <View>
              <Image source={arrowRight}></Image>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#261D08',
            marginTop: 10,
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: '#F2F2F2', fontWeight: '500', fontSize: 16 }}>
            Complete your payment in
          </Text>
          <Text style={{ color: '#FCC434', fontWeight: '700', fontSize: 16 }}>15:00</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#FCC434',
          padding: 10,
          borderRadius: 10,
          marginTop: 10,
          alignItems: 'center',
        }}>
        <Text style={{ color: '#000000', fontWeight: '600', fontSize: 20 }}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
});
export default Cart;
