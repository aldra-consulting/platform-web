import { component$, useStylesScoped$ } from '@builder.io/qwik';
import sanitize from 'sanitize-html';
import Showdown from 'showdown';

import { useAssignmentContext } from '@project/hooks';

import Section from '../section';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { description },
  } = useAssignmentContext();

  return description ? (
    <Section>
      <h1 q:slot='title'>Oppdragsbeskrivelse</h1>
      <div q:slot='body'>
        <div
          data-slot='description'
          dangerouslySetInnerHTML={sanitize(
            new Showdown.Converter().makeHtml(description)
          )}
        />
      </div>
    </Section>
  ) : null;
});
