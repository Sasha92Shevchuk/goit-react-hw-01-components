import PropTypes from 'prop-types';
import { Table, Tbody, Thead } from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem/TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>

      <Tbody>
        {items.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </Tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
