import PropTypes from 'prop-types';
import { Item, Label, Percentage } from './Stat.styled';

export const Stat = ({ stat: { label, percentage } }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

Stat.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
