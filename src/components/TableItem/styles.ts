import styled from 'styled-components';

export const TableLine = styled.tr`
  
`;

export const TableColumn = styled.td`
  padding: 8px 0;
`;

export const Category = styled.div<{color: string}> `
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  color: #fff;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{color: string}>`
  color: ${props => props.color};
`;