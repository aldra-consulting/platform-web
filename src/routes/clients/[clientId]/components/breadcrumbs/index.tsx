import { component$ } from '@builder.io/qwik';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';
import { useClientContext } from '@project/hooks';

export default component$(() => {
  const {
    client: { name },
  } = useClientContext();

  return (
    <Breadcrumbs q:slot='breadcrumbs'>
      <Breadcrumbs.Breadcrumb>
        <Link href='https://www.aldra.no' color='neutral'>
          Aldra
        </Link>
      </Breadcrumbs.Breadcrumb>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
      <Breadcrumbs.Breadcrumb>
        <Link href='/' color='neutral'>
          Plattform
        </Link>
      </Breadcrumbs.Breadcrumb>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
      <Breadcrumbs.Breadcrumb>
        <Link href='/clients' color='neutral'>
          Oppdragsgivere
        </Link>
      </Breadcrumbs.Breadcrumb>
      <Breadcrumbs.Separator>/</Breadcrumbs.Separator>
      <Breadcrumbs.Breadcrumb active>{name}</Breadcrumbs.Breadcrumb>
    </Breadcrumbs>
  );
});
