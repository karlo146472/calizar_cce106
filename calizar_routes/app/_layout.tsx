import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="transactions/index"
        options={{
          title: 'All Transactions',
          headerStyle: {
            backgroundColor: '#B8A9E8',
          },
          headerTintColor: '#FFFFFF',
        }}
      />

      <Stack.Screen
        name="transaction/[id]"
        options={{
          title: 'Transaction Details',
          headerStyle: {
            backgroundColor: '#B8A9E8',
          },
          headerTintColor: '#FFFFFF',
        }}
      />
    </Stack>
  );
}