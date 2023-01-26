import { Avatar, Item, Name, Status } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
