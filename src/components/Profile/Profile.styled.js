import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 280px;
  background-color: #fff;
  padding: 20px;
  padding-bottom: 0;
  border-radius: 10px;
  margin-top: 30px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #222222d1;
  font-size: 20px;
`;

export const Location = styled.p`
  color: #222222d1;
  font-size: 20px;
`;

export const Stats = styled.ul`
  display: flex;

  justify-content: center;
  align-items: center;
  /* list-style: none; */
  /* padding: 0; */
  background-color: rgba(128, 128, 128, 0.63);
  border: 1px solid rgba(128, 128, 128, 0.63);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 24px;
  border-right: 1px solid rgba(128, 128, 128, 0.63);
  :last-child {
    border-right: none;
  }
`;

export const Label = styled.span`
  color: #222222d1;
  font-size: 18px;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: black;
`;
