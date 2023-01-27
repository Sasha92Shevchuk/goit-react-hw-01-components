import PropTypes from 'prop-types';
import { TbodyTr } from './TransactionItem.styled';

export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <TbodyTr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TbodyTr>
  );
};

TransactionItem.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
