import { $, component$, useStylesScoped$ } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import ClientResource from '@project/components/client-resource';
import { useClientContext, useClientResource } from '@project/hooks';
import { MissionProvider } from '@project/providers';
import { NumberUtil, CSSUtil, service } from '@project/utils';

import Section from '../section';

import Mission from './components/mission';
import styles from './styles.css?inline';
import { byStatus } from './utils';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    client: { id },
  } = useClientContext();

  const resource = useClientResource(
    $(() =>
      service()
        .entity()
        .mission()
        .findManyForClientWithBookmarks(id)
        .then((missions) =>
          missions.length > 0
            ? missions.sort(byStatus)
            : Promise.reject(new Error('No missions found'))
        )
    )
  );

  return (
    <ClientResource
      resource={resource}
      onPending={() => null}
      onRejected={() => null}
      onResolved={(missions) => (
        <Section>
          <h1 q:slot='title'>Oppdrag</h1>
          <div q:slot='body' data-root>
            {missions.map((mission, index) => (
              <MissionProvider key={mission.id} mission={mission}>
                <Animated
                  animation='fade-in-up'
                  duration={CSSUtil.time().s(NumberUtil.positive(0.5))}
                  delay={CSSUtil.time().s(
                    NumberUtil.positive(index / 10 + 0.25)
                  )}
                >
                  <Mission />
                </Animated>
              </MissionProvider>
            ))}
          </div>
        </Section>
      )}
    />
  );
});
