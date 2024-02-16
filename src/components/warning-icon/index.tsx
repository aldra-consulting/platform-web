import { type HTMLAttributes, component$ } from '@builder.io/qwik';

interface Props extends HTMLAttributes<SVGElement> {
  height?: number | string;
}

export default component$<Props>(({ height, ...props }) => (
  <svg
    {...props}
    height={height}
    focusable='false'
    aria-hidden='true'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 5.99 19.53 19H4.47zM12 2 1 21h22zm1 14h-2v2h2zm0-6h-2v4h2z' />
  </svg>
));
