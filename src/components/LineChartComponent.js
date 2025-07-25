import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function LineChartComponent({ data }) {
  return (
    <View style={{ marginTop: 20 }}>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={220}
        yAxisLabel="AED "
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
        }}
        bezier
      />
    </View>
  );
}
