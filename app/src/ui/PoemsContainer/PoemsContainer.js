//  @ flow
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Styles from './styles';

type Poem = {
  lines: string[],
  title: string,
  author: string,
};

type Data = {
  poem: Poem,
};
type Props = {
  data: Data,
  show: boolean,
  onClose: Function,
};

export default ({ data: { poem }, show, onClose }: Props) => {
  if (show) {
    return (
      <View style={Styles.overlayContainer}>
      
        <View style={Styles.topTextContainer}>
          <Text style={Styles.authorText}>{poem.author}</Text>
          <Text style={Styles.titleText}>{poem.title}</Text>
        </View>

        <TouchableOpacity style={Styles.icon}  onPress={onClose}>
          <MaterialIcons name="close" size={32} color="white"  />
        </TouchableOpacity>

        <View style={Styles.poemScrollContainer}>
          <ScrollView>
            <View style={Styles.poemContainer}>
              {poem.lines.map((line, index) => (
                <Text style={Styles.poemLine} key={index}>
                  {line}
                </Text>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
  return null;
};
