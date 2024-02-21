import { component$ } from '@builder.io/qwik';

import NorwegianFlagIcon from '@project/components/flag-icon-no';
import { type LanguageCode } from '@project/types';

interface Props {
  code: LanguageCode;
}

export default component$<Props>(({ code }) => {
  switch (code) {
    case 'no':
      return <NorwegianFlagIcon height={24} />;
    case 'en':
    default:
      return null;
  }
});
