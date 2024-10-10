import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'

interface InputSearchProps extends TextInputProps {
    value: string;
    onChangeText: (text:string) => void;
    placeHolder?: string;
    style?: ViewStyle;
    onSubmitEditing: () => void;
}

const InputSearch:React.FC<InputSearchProps> = ({
    value,
    onChangeText,
    placeHolder = 'Type here...',
    style,
    onSubmitEditing,
    ...rest //spread the rest of the props
}) => {
  return (
    <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeHolder}
        placeholderTextColor="#888"
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={onSubmitEditing} // Action on submit
        {...rest} // Pass any other TextInput props (e.g., autoCapitalize, multiline)
    />
  )
}

export {InputSearch}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 44,
        borderRadius: 5,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        elevation: 2, // For Android shadow
        shadowColor: '#000', // iOS shadow color
        shadowOffset: {
            width: 0, // Horizontal shadow offset
            height: 2, // Vertical shadow offset
        },
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 4, // Shadow blur radius
    },
})