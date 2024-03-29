import { type HTMLAttributes, component$ } from '@builder.io/qwik';

import { Theme } from '@project/enums';

interface Props extends HTMLAttributes<SVGElement> {
  height?: number | string;
  theme?: Theme;
}

export default component$<Props>(
  ({ height, theme = Theme.LIGHT, ...props }) => {
    const fill = theme === Theme.LIGHT ? '#2D3741' : 'white';

    return (
      <svg
        {...props}
        height={height}
        focusable='false'
        aria-hidden='true'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10m0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3'
          fill={fill}
        />
      </svg>
    );
  }
);
