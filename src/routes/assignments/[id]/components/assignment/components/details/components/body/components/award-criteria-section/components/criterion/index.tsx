import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { type Entity } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  criterion: Entity.AwardCriterion;
}

export default component$<Props>(({ criterion: { name, weight } }) => {
  useStylesScoped$(styles);

  return (
    <div data-root>
      <p>{name}</p>
      <p>{`${weight}%`}</p>
      <span style={{ '--weight': weight / 100 }} />
    </div>
  );
});
