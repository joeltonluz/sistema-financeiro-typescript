import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 8px #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-top: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
  gap: 8px;
  align-items: center;

  .area {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;

    p {
      font-weight: bold;
      margin: 0;
    }

    button {
      width: 100%;
      background: blue;
      outline: none;
      cursor: pointer;
      color: #fff;
      padding: 4px;
      font-weight: bold;
    }
  }
`;