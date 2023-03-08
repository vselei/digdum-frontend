import styled from '@emotion/styled';

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  gap,
  flex,
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
  flex?: string;
  width?: string;
  maxWidth?: string;
  minHeight?: string;
}) => {
  const Flex = styled.div`
    display: flex;
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    gap: ${gap?.row || '0'} ${gap?.col || '0'};
    flex-wrap: wrap;

    width: ${width || 'auto'};
    min-height: ${minHeight || 'auto'};

    & > * {
      flex: ${flex || 'initial'};
    }

    @media (min-width: 128rem) {
      max-width: ${maxWidth || 'auto'};
    }
  `;

  return <Flex>{children}</Flex>;
};

export default FlexContainer;
