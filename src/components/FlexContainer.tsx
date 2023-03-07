import styled from '@emotion/styled';

const FlexContainer = ({
  justifyContent,
  alignItems
}: {
  justifyContent: string;
  alignItems: string;
}) => styled.div`
  display: flex;
  justify-content: ${justifyContent || 'flex-start'};
  align-items: ${alignItems || 'flex-start'};
`;

export default FlexContainer;
