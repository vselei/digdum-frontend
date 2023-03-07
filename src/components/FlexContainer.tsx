import styled from '@emotion/styled';

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  gap,
  width,
  maxWidth,
  minHeight
}: {
  children: React.ReactElement[];
  justifyContent?: string;
  alignItems?: string;
  gap?: {
    row?: string;
    col?: string;
  };
  width?: string;
  maxWidth?: string;
  minHeight?: string;
}) => {
  const Flex = styled.div`
    display: flex;
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    gap: ${gap?.row || '0'} ${gap?.col || '0'};

    width: ${width || 'auto'};
    max-width: ${maxWidth || 'auto'};
    min-height: ${minHeight || 'auto'};
  `;

  return <Flex>{children}</Flex>;
};

export default FlexContainer;
