import { component$, useContext, useStylesScoped$ } from '@builder.io/qwik';

import Avatar from '@project/components/avatar';
import Card from '@project/components/card';
import EmailIcon from '@project/components/email-icon';
import Link from '@project/components/link';
import PhoneIcon from '@project/components/phone-icon';
import { AssignmentContext } from '@project/context';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    assignment: { representative },
  } = useContext(AssignmentContext);

  return representative ? (
    <Card>
      <Card.Header q:slot='header'>
        <Card.Header.Title>Din kontaktperson</Card.Header.Title>
      </Card.Header>
      <Card.Body q:slot='body'>
        <section>
          <Card>
            <Card.Body q:slot='body'>
              <div data-slot='representative'>
                <Avatar
                  title={representative.name}
                  image={representative.imageUrl}
                />
                <p>{representative.name}</p>
              </div>
            </Card.Body>
          </Card>
        </section>
        {representative.phone ?? representative.email ? (
          <section>
            <Card>
              <Card.Body q:slot='body'>
                <div data-slot='contact-information'>
                  {representative.phone ? (
                    <div>
                      <PhoneIcon height={24} />
                      <span>
                        <Link href='mailto:+4793660618' color='blue'>
                          {representative.phone}
                        </Link>
                      </span>
                    </div>
                  ) : null}
                  {representative.email ? (
                    <div>
                      <EmailIcon height={24} />
                      <span>
                        <Link
                          href='mailto:alexander.zakharov@aldra.no'
                          color='blue'
                        >
                          {representative.email}
                        </Link>
                      </span>
                    </div>
                  ) : null}
                </div>
              </Card.Body>
            </Card>
          </section>
        ) : null}
      </Card.Body>
    </Card>
  ) : null;
});
