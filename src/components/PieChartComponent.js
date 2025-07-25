import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function PieChartComponent({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return <Text>No data to show in Pie Chart</Text>;
  }

  const cleanedData = data
    .filter(
      item =>
        item &&
        typeof item.name === 'string' &&
        typeof item.population === 'number' &&
        typeof item.color === 'string' &&
        typeof item.legendFontColor === 'string' &&
        typeof item.legendFontSize === 'number'
    );

  if (cleanedData.length === 0) {
    return <Text>No valid Pie Chart data</Text>;
  }

  return (
    <View>
      <PieChart
        data={cleanedData}
        width={screenWidth - 60}
        height={180}
        chartConfig={{
          color: () => `rgba(0,0,0,1)` 
        }}
        accessor="population"
        backgroundColor="transparent"
        absolute
      />
    </View>
  );
}

