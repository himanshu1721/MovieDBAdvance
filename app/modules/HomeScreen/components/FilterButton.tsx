import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Images from '../../../assets/images';
import styles from './FilterButtonStyles';

interface Value {
  id: number;
  name: string;
}

interface FilterButtonProps {
  isTrailer?: boolean;
  elements: any;
  value: string;
  onSelect: (arg0: string) => void;
}

const FilterButton = ({
  isTrailer,
  elements,
  value,
  onSelect = () => {},
}: FilterButtonProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onSelectedItem = (val: string): void => {
    setOpen(false);
    onSelect(val);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.85} onPress={() => setOpen(!open)}>
        <View
          style={isTrailer ? styles.subContainerTrailer : styles.subContainer}>
          <Text
            style={isTrailer ? styles.titleStyleTrailer : styles.titleStyle}>
            {value}
          </Text>
          <View style={styles.containerBetweenTextAndIcon} />
          <Image
            style={styles.arrowStyles}
            source={isTrailer ? Images.expandArrowBlue : Images.expandArrow}
          />
        </View>
        {open && (
          <View
            style={
              isTrailer ? styles.containerBehindTrailer : styles.containerBehind
            }
          />
        )}
        {open && (
          <View style={isTrailer ? styles.dropdownTrailer : styles.dropdown}>
            {elements.map((val: Value, i: number) => {
              if (value !== val.name) {
                return (
                  <TouchableOpacity
                    style={styles.optionStyles}
                    onPress={() => {
                      onSelectedItem(val.name);
                    }}
                    activeOpacity={0.6}
                    key={String(i)}>
                    <Text style={styles.filterOptionsTextStyle}>
                      {val.name}
                    </Text>
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default FilterButton;
