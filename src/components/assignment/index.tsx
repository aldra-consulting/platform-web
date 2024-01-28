import {
  component$,
  useStylesScoped$,
  type HTMLAttributes,
} from '@builder.io/qwik';

import { type Assignment } from '@project/types';

import Card from '../card';

import styles from './styles.css?inline';

interface Props extends HTMLAttributes<HTMLElement> {
  assignment: Assignment;
}

export default component$<Props>(
  ({
    assignment: {
      id,
      role,
      client: { name: clientName },
    },
    ...props
  }) => {
    useStylesScoped$(styles);

    return (
      <Card {...props}>
        <Card.Header q:slot='header'>
          <div>
            <Card.Header.Title q:slot='title'>{role}</Card.Header.Title>
            <Card.Header.Subtitle q:slot='subtitle'>
              {clientName}
            </Card.Header.Subtitle>
          </div>
        </Card.Header>
        <Card.Body q:slot='body'>
          <div data-slot='assignment-body'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consequuntur quidem cum rerum reprehenderit numquam assumenda, qui
              similique aut ad, eius, quae debitis in est aperiam. A est
              incidunt assumenda.
            </p>
          </div>
        </Card.Body>
        <Card.Link q:slot='link' to={`/assignments/${id}`}>
          Les mer om oppdraget
        </Card.Link>
      </Card>
    );
  }
);
