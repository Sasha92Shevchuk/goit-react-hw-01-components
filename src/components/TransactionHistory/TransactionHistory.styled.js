import styled from '@emotion/styled';

export const Table = styled.table`
  table-layout: fixed;
  width: 900px;
  border-collapse: collapse;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  font-family: sans-serif;
`;

export const Thead = styled.thead`
  background-color: #1dcbd9;
  font-size: 20px;
  text-transform: uppercase;
  tr {
    color: white;
  }
  th {
    padding: 20px;
    :not(:last-child) {
      border-right: 1px solid white;
    }
  }
  th:first-of-type {
    border-top-left-radius: 10px;
  }
  th:last-of-type {
    border-top-right-radius: 10px;
  }
`;

export const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: #fff;
  }
  tr:nth-of-type(even) {
    background-color: #3ad6e31a;
  }
  tr:last-of-type td:first-of-type {
    border-bottom-left-radius: 10px;
  }
  tr:last-of-type td:last-of-type {
    border-bottom-right-radius: 10px;
  }
`;
