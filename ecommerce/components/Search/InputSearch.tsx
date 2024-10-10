import { StyleSheet, Animated, TextInput, TextInputProps, ViewStyle } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

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
  const [isFocused, setIsFocused] = useState(false);
  const borderColorAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(borderColorAnim, {
        toValue: isFocused ?  1 : 0, // 1 when focused, 0 when unfocused
        duration: 200, //Duration for the smooth transition
        useNativeDriver: true, //
    }).start()
  }, [isFocused, borderColorAnim])

  //Interpolate the animation value to map 0 -> 'gray ' (unfocused) and 1 -> '#007AFF' (focused)
  const borderColor = borderColorAnim.interpolate({
    inputRange: [0,1],
    outputRange: ['transparent', 'red']
  });
  return (
    <Animated.View style={[styles.container, { borderColor }, style]}>
        <TextInput
            style={[styles.input]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeHolder}
            placeholderTextColor="#888"
            keyboardType="default"
            returnKeyType="done"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)} 
            onSubmitEditing={onSubmitEditing} // Action on submit
            {...rest} // Pass any other TextInput props (e.g., autoCapitalize, multiline)
        />
    </Animated.View>
  )
}

export {InputSearch}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 5,
        elevation: 2, // Android shadow
        shadowColor: 'gray', // iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 0.5, // Initial border width
    },
    input: {
        height: 44,
        paddingHorizontal: 40,
        borderRadius: 5,
    },
})