import { ExtendedCustomColors, DefaultMantineColor, Tuple } from '@mantine/core'
import { darkTheme } from '../styles/themes/darkTheme'

type CustomColors = typeof darkTheme

type ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor | CustomColors;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors>;
  }
}
