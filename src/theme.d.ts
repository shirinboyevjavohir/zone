import { PaletteColorOptions, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    white?: PaletteColor
  }
  interface PaletteOptions {
    white?: PaletteColorOptions
  }
  interface PaletteOptions {
    black?: PaletteColorOptions
  }
  interface SimplePaletteColorOptions {
    light?: string
  }
  interface SimplePaletteColorOptions {
    main?: string
  }
}
