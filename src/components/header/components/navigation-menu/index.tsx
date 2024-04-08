import {
  type HTMLAttributes,
  component$,
  useStylesScoped$,
} from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

import Link from '@project/components/link';

import Item from './components/item';
import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {}

export default component$<Props>(() => {
  useStylesScoped$(styles);

  const {
    url: { pathname },
  } = useLocation();

  const items = [
    { label: 'Oppdrag', path: '/missions' },
    { label: 'Oppdragsgivere', path: '/clients' },
  ];

  return (
    <ul data-root>
      {items.map(({ label, path }) => (
        <li key={path}>
          <Item active={pathname.startsWith(path)}>
            <Link href={path} color='inherit' variant='plain'>
              {label}
            </Link>
          </Item>
        </li>
      ))}
    </ul>
  );
});
