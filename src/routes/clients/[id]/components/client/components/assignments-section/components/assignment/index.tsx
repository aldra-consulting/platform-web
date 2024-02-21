import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import Link from '@project/components/link';
import { AssignmentContext } from '@project/context';

import Bookmark from './components/bookmark';
import Status from './components/status';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { id, name },
  } = useContext(AssignmentContext);

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
