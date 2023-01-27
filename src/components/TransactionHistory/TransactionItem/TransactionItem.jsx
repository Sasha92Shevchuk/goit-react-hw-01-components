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
