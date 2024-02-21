import { component$, useVisibleTask$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

interface Props {
  to: string;
}

export default component$<Props>(({ to }) => {
  const navigate = useNavigate();

  useVisibleTask$(async () => {
    await navigate(to);
  });

  return null;
});
