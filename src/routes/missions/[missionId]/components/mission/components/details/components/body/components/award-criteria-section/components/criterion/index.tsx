import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { type Entity } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  awardCriterion: Entity.AwardCriterion;
}

export default component$<Props>(
  ({
    awardCriterion: {
      criterion: { label },
      weight,
    },
  }) => {
    useStylesScoped$(styles);

    return (
      <div data-root>
        <p>{label}</p>
        <p>{`${weight}%`}</p>
        <span style={{ '--weight': weight / 100 }} />
      </div>
    );
  }
);
