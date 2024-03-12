import { component$, useStylesScoped$ } from '@builder.io/qwik';

import AwardCriteriaSection from './components/award-criteria-section';
import DescriptionSection from './components/description-section';
import DetailsSection from './components/details-section';
import LanguageRequirementsSection from './components/languages-requirements-section';
import RolesSection from './components/roles-section';
import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div data-root>
      <DescriptionSection />
      <DetailsSection />
      <AwardCriteriaSection />
      <LanguageRequirementsSection />
      <RolesSection />
    </div>
  );
});
