import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { useClientContext } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { label },
  } = useClientContext();

  return (
    <Card.Header.Title>
      <div data-slot='title'>
        <span>{label}</span>
      </div>
    </Card.Header.Title>
  );
});
