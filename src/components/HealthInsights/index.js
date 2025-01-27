import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';

const { width } = Dimensions.get('window');

const HealthInsights = ({ selectedDate }) => {
  const insights = [
    { id: '1', title: "Today's chance of pregnancy", content: 'Whether you’re experiencing the whirlwind of early pregnancy symptoms or navigating the later stages, remember to prioritize self-care.' },
    { id: '2', title: 'February 14: Symptoms to expect', content: 'Show forecast' },
    { id: '3', title: 'Cycle day', content: `Day ${selectedDate - 13}` },
  ];

  const renderInsight = ({ item }) => (
    <View style={styles.insightCard}>
      <Text style={styles.insightTitle}>{item.title}</Text>
      <Text style={styles.insightContent}>{item.content}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.insightsHeader}>My daily insights</Text>
      <FlatList
        data={insights}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderInsight}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.insightsList}
      />
    </View>
  );
};

export default HealthInsights;
