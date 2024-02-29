import { component$ } from '@builder.io/qwik';

import Breadcrumbs from '@project/components/breadcrumbs';
import Link from '@project/components/link';

export default component$(() => (
  <Breadcrumbs>
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
    <Breadcrumbs.Breadcrumb active>Oppdrag</Breadcrumbs.Breadcrumb>
  </Breadcrumbs>
));
