
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const middle = Math.floor(state.routes.length / 2);

  return (
    <View style={{ position: 'absolute', bottom: 0, width }}>
      <Svg width={width} height={80} viewBox={`0 10 ${width} 50`}  style={{ position: 'absolute', top: 0 }}>
       <Path
    d={`M0 0 C${width * 0.32} 0 ${width * 0.37} 70 ${width / 2} 70 C${width * 0.63} 70 ${width * 0.68} 0 ${width} 0 L${width} 70 L0 70 Z`}
    fill="#f1f5f9"
  />
      </Svg>

      <View style={styles.tabContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          if (index === middle) {
            return (
              <TouchableOpacity
                key={route.key}
                onPress={() => navigation.navigate(route.name)}
                style={styles.floatingButton}
              >
                <Icon name="scan-outline" size={26} color="#fff" />
              </TouchableOpacity>
            );
          }

          const iconName = route.name === 'Reports' ? 'bar-chart-outline' : 'notifications-outline';

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tabItem}
            >
              <Icon name={iconName} size={22} color={isFocused ? '#000' : '#888'} />
              <Text style={{ fontSize: 12, color: isFocused ? '#000' : '#888' }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'E5EEF3',
    
  },
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
    top: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 6,
  },
});

export default CustomTabBar;
