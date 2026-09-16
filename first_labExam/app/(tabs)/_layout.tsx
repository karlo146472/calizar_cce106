import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8576A8",
        tabBarInactiveTintColor: "#999CA2",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#E5E1DD",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
        }}
      />

      <Tabs.Screen
        name="tasks"
        options={{
          title: "Tasks",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}