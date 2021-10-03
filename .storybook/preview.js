import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const customViewports = {
  iPhone8: {
    name: 'iPhone 8',
    styles: {
      width: '375px',
      height: '667px',
    },
    type: 'mobile',
  },
  ultrawide: {
    name: 'ultra-wide desktop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
}
