import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { RoleContext } from '@project/context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const context = useContext(RoleContext);

  const { description } = context.role;

  return description ? (
    <div data-root>
      <h4>Beskrivelse</h4>
      <p>{description}</p>
    </div>
  ) : null;
});
