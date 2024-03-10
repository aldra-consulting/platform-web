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
    mission: { id, label },
  } = useMissionContext();

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-root>
          <Link href={`/missions/${id}`} color='blue'>
            {label}
          </Link>
          <Status />
          <Bookmark />
        </div>
      </Card.Body>
    </Card>
  );
});
