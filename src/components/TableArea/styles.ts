import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 16px;
  box-shadow: 0px 0px 8px #ccc;
  margin-top: 24px;
`;

export const TableHeadColumn = styled.th<{width?: number}>`
  padding: 8px 0;
  text-align: left;
  width: ${props => props.width ? `${props.width}px` : 'auto'}
`;