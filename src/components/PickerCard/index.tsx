import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  categories: CategoryType[];
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
};
const { Item } = Picker;

export function PickerCard({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const theme = useTheme();

  const handleSelectedCategory = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <Picker
      selectedValue={selectedCategory}
      mode="dropdown"
      dropdownIconColor={theme.colors.primary}
      onValueChange={(value) => handleSelectedCategory(value)}
      style={{
        color: `${theme.colors.shape}`,
        fontFamily: `${theme.fonts.regular}`,
        height: Platform.OS === "ios" ? 100 : 44,
      }}
      itemStyle={{
        fontFamily: theme.fonts.regular,
        fontSize: RFValue(18),
        color: theme.colors.shape,
        height: 120,
      }}
    >
      {categories.map((category) => {
        return (
          <Item
            key={category.value}
            label={category.label}
            value={category.value}
            style={{
              color: theme.colors.primary,
            }}
          />
        );
      })}
    </Picker>
  );
}
