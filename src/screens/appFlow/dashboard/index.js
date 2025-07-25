import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, StatusBar, FlatList } from 'react-native';
import axios from 'axios';
import Header from '../../../components/Header';
import PieChartComponent from '../../../components/PieChartComponent';
import LineChartComponent from '../../../components/LineChartComponent';
import BarChartComponent from '../../../components/BarChartComponent';
import ComponentsSection from '../../../components/ComponentsSection';
import FinancesComponents from '../../../components/FinancesListComp';
import { styles } from './style';
import ActionRequiredList from '../../../components/ActionRequiredList';
import TransactionCard from '../../../components/TransactionCard';

export default function Dashboard({ navigation }) {
  const [chartIndex, setChartIndex] = useState(0);
  const [pieData, setPieData] = useState([]);
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/carts')
      .then(res => {
        const carts = res.data.carts;

        // Pie Chart: Product-wise
        const productMap = {};
        carts.forEach(cart => {
          cart.products.forEach(product => {
            const title = product.title;
            if (!productMap[title]) {
              productMap[title] = { population: 0, color: getRandomColor() };
            }
            productMap[title].population += product.quantity;
          });
        });

        const pieChartData = Object.keys(productMap).slice(0, 5).map(title => {
          const item = productMap[title];
          return {
            name: title,
            population: item.population,
            color: item.color,
            legendFontColor: '#000',
            legendFontSize: 12
          };
        });
        setPieData(pieChartData);

        // Line Chart: Monthly Sales
        const lineChartData = {
          labels: carts.map((_, i) => `Cart ${i + 1}`),
          datasets: [{ data: carts.map(cart => cart.total), strokeWidth: 2 }]
        };
        setLineData(lineChartData);

        // Bar Chart: Top 5 Customers by cart total
        const sortedCustomers = [...carts]
          .sort((a, b) => b.total - a.total)
          .slice(0, 5);

        const barChartData = {
          labels: sortedCustomers.map(c => `User ${c.userId}`),
          datasets: [{ data: sortedCustomers.map(c => c.total) }]
        };
        setBarData(barChartData);
      })
      .catch(err => console.error('Error:', err));
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
  };

  const renderChart = () => {
    if (chartIndex === 0) return pieData.length > 0 && <PieChartComponent data={pieData} />;
    if (chartIndex === 1) return lineData && <LineChartComponent data={lineData} />;
    if (chartIndex === 2) return barData && <BarChartComponent data={barData} />;
    return null;
  };

  const getChartTitle = () => {
    if (chartIndex === 0) return 'Product Wise Sales';
    if (chartIndex === 1) return 'Monthly Sales';
    if (chartIndex === 2) return 'Top 5 Customers';
    return '';
  };
const financeModules = [
  {
    id: '1',
    title: 'AED 540000.00',
    subtitle: 'Sales FY-24',
  },
  {
    id: '2',
    title: 'AED 540000.00',
    subtitle: 'Epenses FY-24',
  },
  {
    id: '3',
    title: 'AED 540000.00',
    subtitle: 'Cash & Cash',
    description: 'Eqivalents',
  },
  {
    id: '4',
    title: 'AED 540000.00',
    subtitle: 'Inventry in Hand',
    description: 'Inventry',
  },
  {
    id: '5',
    title: 'AED 540000.00',
    subtitle: 'Total Reciable',
  },
  {
    id: '6',
    title: '540000.00',
    subtitle: 'Total Payables',
  }
];

const actionItems = [
  {
    id: '1',
    title: 'Open Invoices',
    currentAmount: 'AED 5,400.00',
    currentCount: 54,
    previousAmount: 'AED 50,400.00',
    previousCount: 124,
  },
  {
    id: '2',
    title: 'Outstanding Bills',
    currentAmount: 'AED 3,200.00',
    currentCount: 30,
    previousAmount: 'AED 45,000.00',
    previousCount: 100,
  },
  {
    id: '3',
    title: 'Goods Receipt Memo',
    currentAmount: 'AED 9,800.00',
    currentCount: 67,
    previousAmount: 'AED 62,000.00',
    previousCount: 150,
  },
  {
    id: '4',
    title: 'Pending Approvals',
    currentAmount: 'AED 2,500.00',
    currentCount: 20,
    previousAmount: 'AED 7,200.00',
    previousCount: 40,
  },
];

const transactions = [
  {
    id: '1',
    company: 'ABC Corporation LLC.',
    type: 'Supplier - Bill Payment',
    amount: '-AED 54,000.00',
    color: 'red',
    date: '24-July-2024 02:24 am',
    user: 'aqeel92',
  },
  {
    id: '2',
    company: 'XYZ Enterprises',
    type: 'Customer - Invoice Payment',
    amount: 'AED 54,000.00',
    color: 'green',
    date: '24-July-2024 01:24 am',
    user: 'aqeel92',
  },
  {
    id: '3',
    company: 'ABC Corporation LLC.',
    type: 'Supplier - Unallocated Cash',
    amount: '-AED 54,000.00',
    color: 'red',
    date: '24-July-2024 12:24 am',
    user: 'aqeel92',
  },
];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={styles.titleRow}>
          <Text style={styles.sectionTitle}>Favorites ⭐</Text>
          <View style={styles.swipiconstyle}>
            <TouchableOpacity onPress={() => setChartIndex((chartIndex + 2) % 3)}>
              <Text style={styles.icon}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setChartIndex((chartIndex + 1) % 3)}>
              <Text style={styles.icon}>{">"}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chart Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{getChartTitle()}</Text>
          {renderChart()}
          <ComponentsSection/>
        </View>
        <View>
          <FinancesComponents data={financeModules}/>
        </View>
        <View style={styles.card}>
  <Text style={styles.cardTitle}>Top Product of the Month</Text>
  {pieData && pieData.length > 0 && <PieChartComponent data={pieData} />}
</View> 

<View style={styles.card}>
  <Text style={styles.cardTitle}>Top 5 Customer by Recievable</Text>
  {barData && barData.datasets && barData.datasets.length > 0 && (
    <BarChartComponent data={barData} />
  )}
</View>

<View style={styles.card}>
  <Text style={styles.cardTitle}>Top 5 Suppliers by Payables</Text>
  {barData && barData.datasets && barData.datasets.length > 0 && (
    <BarChartComponent data={barData} />
  )}
</View>

        <View>
         < ActionRequiredList data={actionItems} />
        </View>

         <View style={styles.transact}>
      <Text style={styles.cardTitle}>Recent Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TransactionCard item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
      </ScrollView>
    </View>
  );
}

