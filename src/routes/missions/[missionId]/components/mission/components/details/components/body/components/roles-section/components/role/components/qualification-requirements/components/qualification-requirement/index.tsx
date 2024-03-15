import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Card from '@project/components/card';
import { type Entity, type Flatten } from '@project/types';

import styles from './styles.css?inline';

interface Props {
  requirement: Flatten<Entity.Role['qualificationRequirements']>;
}

export default component$<Props>(({ requirement }) => {
  useStylesScoped$(styles);

  switch (requirement.level) {
    case 'must':
      return (
        <Card>
          <Card.Body q:slot='body'>
            <div data-root>
              <span data-slot='level' data-level='must'>
                MÅ
              </span>
              <p data-slot='description'>{requirement.description}</p>
            </div>
          </Card.Body>
        </Card>
      );
    case 'should':
      return (
        <Card>
          <Card.Body q:slot='body'>
            <div data-root>
              <span data-slot='level' data-level='should'>
                BØR
              </span>
              <p data-slot='description'>{requirement.description}</p>
              {requirement.weight ? (
                <span data-slot='weight'>{`${requirement.weight}%`}</span>
              ) : null}
            </div>
          </Card.Body>
        </Card>
      );
    default:
      return null;
  }
});
