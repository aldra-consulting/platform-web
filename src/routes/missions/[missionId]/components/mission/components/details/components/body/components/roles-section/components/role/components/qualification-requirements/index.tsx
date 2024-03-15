import { component$, useStylesScoped$ } from '@builder.io/qwik';

import { useRoleContext } from '@project/hooks';

import QualificationRequirement from './components/qualification-requirement';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    role: { qualificationRequirements },
  } = useRoleContext();

  const mustRequirements = qualificationRequirements.filter(
    ({ level }) => level === 'must'
  );
  const shouldRequirements = qualificationRequirements.filter(
    ({ level }) => level === 'should'
  );

  return qualificationRequirements.length > 0 ? (
    <div data-root>
      <h4>Kvalifikasjonskrav</h4>
      <div data-slot='requirements'>
        {mustRequirements.map((requirement) => (
          <QualificationRequirement
            key={requirement.id}
            requirement={requirement}
          />
        ))}
        {shouldRequirements.map((requirement) => (
          <QualificationRequirement
            key={requirement.id}
            requirement={requirement}
          />
        ))}
      </div>
    </div>
  ) : null;
});
