import styled from '@emotion/styled';

export const TbodyTr = styled.tr`
  td {
    text-transform: capitalize;
    font-size: 20px;
    color: grey;
    padding: 20px;
    text-align: center;
    :not(:last-child) {
      border-right: 1px solid lightgray;
    }
  }
`;
