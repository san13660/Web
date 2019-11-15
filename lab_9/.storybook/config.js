import { configure, addParameters } from '@storybook/react'
import { themes } from '@storybook/theming';

addParameters({
    options: {
      theme: themes.dark,
    },
  });

configure(require.context('../src/stories', true, /\.stories\.js$/), module);