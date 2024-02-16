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
    <path d='M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
  </svg>
));
