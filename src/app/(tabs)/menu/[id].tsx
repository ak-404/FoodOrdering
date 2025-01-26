import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function ProductDetailsScreen() {
  const {id} = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title: `Details: ${id}`}} />
      <Text style={{fontSize: 20}}>{id}</Text>
    </View>
  );
}