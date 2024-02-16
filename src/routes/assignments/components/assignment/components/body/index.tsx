import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Alert from '@project/components/alert';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <div data-slot='status'>
        <Alert severity='info' compact>
          Vi leter aktivt etter nye kandidater
        </Alert>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
        consequuntur quidem cum rerum reprehenderit numquam assumenda, qui
        similique aut ad, eius, quae debitis in est aperiam. A est incidunt
        assumenda.
      </p>
    </>
  );
});
