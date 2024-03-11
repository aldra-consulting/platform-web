import { $, component$, useStylesScoped$, Resource } from '@builder.io/qwik';

import Animated from '@project/components/animated';
import { useClientContext, useMissions } from '@project/hooks';
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

  const { resource } = useMissions(
    $(() =>
      service()
        .entity()
        .mission()
        .findManyForClient(id)
        .then((missions) =>
          missions.length > 0
            ? missions
            : Promise.reject(new Error('No missions found'))
        )
    )
  );

  return (
    <Resource
      value={resource}
      onPending={() => null}
      onResolved={(missions) => (
        <Section>
          <h1 q:slot='title'>Oppdrag</h1>
          <div q:slot='body' data-root>
            {missions.sort(byStatus).map((mission, index) => (
              <MissionProvider key={mission.id} mission={mission}>
                <Animated
                  animation='fade-in-up'
                  duration={CSSUtil.time.s(NumberUtil.positive(0.5))}
                  delay={CSSUtil.time.s(NumberUtil.positive(index / 10 + 0.5))}
                >
                  <Mission />
                </Animated>
              </MissionProvider>
            ))}
          </div>
        </Section>
      )}
      onRejected={() => null}
    />
  );
});
