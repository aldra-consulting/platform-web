import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useRoleContext } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    role: { description },
  } = useRoleContext();

  return description ? (
    <div data-root>
      <h4>Beskrivelse</h4>
      <p>{description}</p>
    </div>
  ) : null;
});
