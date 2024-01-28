import Card from './components/card';
import Actions from './components/card-actions';
import Body from './components/card-body';
import Header from './components/card-header';
import HeaderSubtitle from './components/card-header-subtitle';
import HeaderTitle from './components/card-header-title';
import Link from './components/card-link';

export default Object.assign(Card, {
  Header: Object.assign(Header, {
    Title: HeaderTitle,
    Subtitle: HeaderSubtitle,
  }),
  Body,
  Actions,
  Link,
});
