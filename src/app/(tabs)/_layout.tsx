import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';

import { AppHeader } from '../../components/AppHeader';
import { BottomTabBar } from '../../components/BottomTabBar';
import { colors } from '../../constants/theme';

type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

const tabIcon =
  (active: IconName, inactive: IconName = active) =>
  ({ focused, color, size }: { focused: boolean; color: string; size: number }) => (
    <MaterialCommunityIcons name={focused ? active : inactive} color={color} size={size} />
  );

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        header: ({ options }) => <AppHeader title={options.title ?? ''} />,
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'ClashTactics', tabBarLabel: 'Inicio', tabBarIcon: tabIcon('bank', 'bank-outline') }}
      />
      <Tabs.Screen
        name="clanes"
        options={{ title: 'Clanes', tabBarLabel: 'Clanes', tabBarIcon: tabIcon('shield', 'shield-outline') }}
      />
      <Tabs.Screen
        name="comunidad"
        options={{ title: 'Comunidad', tabBarLabel: 'Comunidad', tabBarIcon: tabIcon('sword-cross') }}
      />
      <Tabs.Screen
        name="jugadores"
        options={{ title: 'Jugadores', tabBarLabel: 'Jugadores', tabBarIcon: tabIcon('account', 'account-outline') }}
      />
      <Tabs.Screen
        name="mas"
        options={{ title: 'Más', tabBarLabel: 'Más', tabBarIcon: tabIcon('dots-horizontal') }}
      />
    </Tabs>
  );
}

