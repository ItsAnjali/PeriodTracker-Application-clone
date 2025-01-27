import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import HealthInsights from '../HealthInsights';
import styles from './styles';

const PeriodTracker = () => {
  const [selectedDate, setSelectedDate] = useState(14); 

  const renderDates = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
      const isSelected = selectedDate === date;
      const isInCircleRange = date >= 14 && date <= 19;

      return (
        <TouchableOpacity
          key={date}
          style={[styles.dateContainer, isInCircleRange && styles.circle]}
          onPress={() => setSelectedDate(date)}
        >
          <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>{date}</Text>
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Period Tracker</Text>
      <Text style={styles.subtitle}>Prediction: period</Text>
      <Text style={styles.dayIndicator}>Day {selectedDate - 13}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {renderDates()}
      </ScrollView>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit period dates</Text>
      </TouchableOpacity>

      <HealthInsights selectedDate={selectedDate} />
    </View>
  );
};

export default PeriodTracker;
