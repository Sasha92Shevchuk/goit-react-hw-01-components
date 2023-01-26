import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  width: 400px;
  padding: 10px;
`;

const statusColor = function getStatusColor(props) {
  return props.isOnline ? 'green' : 'red';
};

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${statusColor};
`;
export const Avatar = styled.img`
  display: block;
  width: 80px;
  height: auto;
  border-radius: 5%;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
