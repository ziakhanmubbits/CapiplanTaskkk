import React from 'react';
import { View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function BarChartComponent({ data }) {
  return (
    <View>
      <BarChart
        data={data}
        width={screenWidth - 40}
        height={220}
        fromZero
        showValuesOnTopOfBars
        chartConfig={{
          backgroundColor: '#FFFFFF',
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFf9d7',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => '#000',
        }}
        verticalLabelRotation={30}
      />
    </View>
  );
}
