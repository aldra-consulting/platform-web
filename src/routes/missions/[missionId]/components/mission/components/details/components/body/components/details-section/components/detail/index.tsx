import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { type Flatten, type Entity } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  detail: NonNullable<Flatten<Entity.Mission['details']>>;
}

export default component$<Props>(({ detail: { type, name, value } }) => {
  useStylesScoped$(styles);

  switch (type) {
    case 'deadline':
      return (
        <div data-root>
          <p>{name}</p>
          <span>
            {new Intl.DateTimeFormat('no', { dateStyle: 'short' }).format(
              Date.parse(value)
            )}
          </span>
        </div>
      );
    case 'commencement':
      return (
        <div data-root>
          <p>{name}</p>
          <span>{value}</span>
        </div>
      );
    case 'duration':
      return (
        <div data-root>
          <p>{name}</p>
          <span>{value}</span>
        </div>
      );
    case 'scope':
      return (
        <div data-root>
          <p>{name}</p>
          <span>{`${value}% stilling`}</span>
        </div>
      );
    case 'location':
      return (
        <div data-root>
          <p>{name}</p>
          <span>{value}</span>
        </div>
      );
    default:
      return null;
  }
});
