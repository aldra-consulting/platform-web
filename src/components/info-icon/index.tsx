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
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z' />
  </svg>
));