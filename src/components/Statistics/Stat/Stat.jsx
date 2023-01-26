import { Item, Label, Percentage } from './Stat.styled';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};
