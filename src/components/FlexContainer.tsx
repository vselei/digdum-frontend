import styled from '@emotion/styled';

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  width,
  maxWidth
}: {
  children: React.ReactElement[];
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  maxWidth?: string;
}) => {
  const Flex = styled.div`
    display: flex;
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    width: ${width || 'auto'};
    max-width: ${maxWidth || 'auto'};
  `;

  return <Flex>{children}</Flex>;
};

export default FlexContainer;
