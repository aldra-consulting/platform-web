import { component$, useStylesScoped$ } from '@builder.io/qwik';

import Avatar from '@project/components/avatar';
import Card from '@project/components/card';
import EmailIcon from '@project/components/email-icon';
import Link from '@project/components/link';
import PhoneIcon from '@project/components/phone-icon';
import { useMissionContext } from '@project/hooks';

import styles from './styles.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  const {
    mission: {
      representative: { fullName, emailAddress, phoneNumber, profilePhoto },
    },
  } = useMissionContext();

  return (
    <Card>
      <Card.Header q:slot='header'>
        <Card.Header.Title>Din kontaktperson</Card.Header.Title>
      </Card.Header>
      <Card.Body q:slot='body'>
        <section>
          <Card>
            <Card.Body q:slot='body'>
              <div data-slot='representative'>
                <Avatar title={fullName} image={profilePhoto} />
                <p>{fullName}</p>
              </div>
            </Card.Body>
          </Card>
        </section>
        {phoneNumber || emailAddress ? (
          <section>
            <Card>
              <Card.Body q:slot='body'>
                <div data-slot='contact-information'>
                  {phoneNumber ? (
                    <div>
                      <PhoneIcon height={24} />
                      <span>
                        <Link href={`mailto:${phoneNumber}`} color='blue'>
                          {phoneNumber}
                        </Link>
                      </span>
                    </div>
                  ) : null}
                  {emailAddress ? (
                    <div>
                      <EmailIcon height={24} />
                      <span>
                        <Link href={`mailto:${emailAddress}`} color='blue'>
                          {emailAddress}
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
  );
});
