import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { type Flatten, type Entity } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  detail: NonNullable<Flatten<Entity.Mission['details']>>;
}

export default component$<Props>(({ detail }) => {
  useStylesScoped$(styles);

  switch (detail.type) {
    case 'deadline':
      return (
        <div data-root>
          <p>Frist</p>
          <span>
            {new Intl.DateTimeFormat('no', {
              dateStyle: 'short',
              timeStyle: 'short',
            }).format(detail.value)}
          </span>
        </div>
      );
    case 'commencement':
      return (
        <div data-root>
          <p>Oppstart</p>
          <span>
            {new Intl.DateTimeFormat('no', {
              dateStyle: 'short',
            }).format(detail.value)}
          </span>
        </div>
      );
    case 'duration':
      return (
        <div data-root>
          <p>Varighet</p>
          <span>{detail.value}</span>
        </div>
      );
    case 'scope':
      return (
        <div data-root>
          <p>Omfang</p>
          <span>{`${detail.value}% stilling`}</span>
        </div>
      );
    case 'location':
      return (
        <div data-root>
          <p>Arbeidssted</p>
          <span>{detail.value}</span>
        </div>
      );
    default:
      return null;
  }
});
