import { Item, Label, Percentage } from './Stat.styled';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <Item class="item">
      <Label class="label">{label}</Label>
      <Percentage class="percentage">{percentage}%</Percentage>
    </Item>
  );
};
