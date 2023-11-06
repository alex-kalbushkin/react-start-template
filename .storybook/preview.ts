import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../src/localization/settings';
import { LocaleLanguage } from '../src/localization/types';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// Wrap stories in the I18nextProvider component
const withI18next = (Story, context) => {
  const { locale } = context.globals;

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return React.createElement(
    React.Suspense,
    { fallback: React.createElement('div', null, 'loading translations...') },
    React.createElement(I18nextProvider, { i18n: i18n }, React.createElement(Story))
  );
};

// export decorators for storybook to wrap stories in
export const decorators = [withI18next];

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: LocaleLanguage.En, title: 'English' },
        { value: LocaleLanguage.Ru, title: 'Русский' },
      ],
      showName: true,
    },
  },
};
