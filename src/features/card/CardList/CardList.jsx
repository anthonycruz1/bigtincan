import { useSelector } from 'react-redux';
import { selectUsersList } from '../../users/usersSlice';
import Card from '../Card/Card';

export default function CardList() {
  const users = useSelector(selectUsersList);

  const renderedCardList = users.map((user) => (
    <Card id={user.id} key={user.id} user={user} />
  ));
  return (
    <div data-testid="card-list" className="card-list">
      {renderedCardList}
    </div>
  );
}
