import {
  $,
  type HTMLAttributes,
  component$,
  useStylesScoped$,
  Slot,
  useStore,
  useSignal,
  useVisibleTask$,
  useOnWindow,
} from '@builder.io/qwik';
import Bricks, { type SizeDetail } from 'bricks.js';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLDivElement> {
  sizes: SizeDetail[];
}

export default component$<Props>(({ sizes, ...props }) => {
  useStylesScoped$(styles);

  const containerElement = useSignal<HTMLDivElement>();

  const size = useStore<Partial<SizeDetail>>({});

  useVisibleTask$(() => {
    if (containerElement.value) {
      new ResizeObserver((entries) => {
        entries.forEach(({ target }) => {
          Bricks({
            container: target,
            packed: 'packed',
            sizes,
            position: true,
          })
            .on('pack', () => {
              const { columns, gutter } = sizes
                .slice()
                .reverse()
                .filter(({ mq }) => mq)
                .find(
                  ({ mq }) => window.matchMedia(`(min-width: ${mq})`).matches
                ) ??
                sizes.slice().shift() ?? { columns: 1, gutter: 0 };

              size.columns = columns;
              size.gutter = gutter;
            })
            .on('resize', ({ columns, gutter }) => {
              size.columns = columns;
              size.gutter = gutter;
            })
            .pack();
        });
      }).observe(containerElement.value);

      window.dispatchEvent(new Event('resize'));
    }
  });

  useOnWindow(
    'resize',
    $(() => {
      if (containerElement.value) {
        Bricks({
          container: containerElement.value,
          packed: 'packed',
          sizes,
          position: true,
        }).pack();
      }
    })
  );

  return (
    <div
      {...props}
      ref={containerElement}
      style={{
        '--columns': size.columns,
        '--gutter': `${size.gutter}px`,
      }}
    >
      <Slot />
    </div>
  );
});
