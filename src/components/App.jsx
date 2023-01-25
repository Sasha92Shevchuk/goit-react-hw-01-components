import { Profile } from 'components/Profile/Profile';
import user from './Profile/user.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
    </Container>
  );
};
