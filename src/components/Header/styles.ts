import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  background: #d73035;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: #fff;

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 16px;
    }
  }
`;
