import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import { RoleContext } from '@project/context';

import QualificationRequirement from './components/qualification-requirement';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const context = useContext(RoleContext);

  const { qualificationRequirements } = context.role;

  const mustRequirements = qualificationRequirements.filter(
    ({ level }) => level === 'MUST'
  );
  const shouldRequirements = qualificationRequirements.filter(
    ({ level }) => level === 'SHOULD'
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
