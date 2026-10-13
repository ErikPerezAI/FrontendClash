import { StyleSheet, View } from 'react-native';

import { colors } from '../constants/theme';

/**
 * Contenedor base de cada pantalla. Por ahora las secciones no tienen contenido.
 */
export function ScreenContainer() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

