import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import Link from '@project/components/link';
import { useAssignmentContext } from '@project/hooks';

import Bookmark from './components/bookmark';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { id, name },
  } = useAssignmentContext();

  return (
    <Card>
      <Card.Body q:slot='body'>
        <div data-root>
          <Link href={`/assignments/${id}`} color='blue'>
            {name}
          </Link>
          <Status />
          <Bookmark />
        </div>
      </Card.Body>
    </Card>
  );
});
