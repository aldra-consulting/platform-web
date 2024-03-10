import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import Link from '@project/components/link';
import { useMissionContext } from '@project/hooks';

import Bookmark from './components/bookmark';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: {
      name,
      client: { id: clientId, name: clientName },
    },
  } = useMissionContext();

  return (
    <>
      <Card.Header.Title>
        <div data-slot='title'>
          <span>{name}</span>
          <div data-slot='actions'>
            <Status />
            <Bookmark />
          </div>
        </div>
      </Card.Header.Title>
      <Card.Header.Subtitle>
        <Link href={`/clients/${clientId}`} color='blue'>
          {clientName}
        </Link>
      </Card.Header.Subtitle>
    </>
  );
});
