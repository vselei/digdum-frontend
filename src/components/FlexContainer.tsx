import styled from '@emotion/styled';

const FlexContainer = ({
  children,
  justifyContent,
  alignItems,
  gap,
  flex,
  width,
  minHeight,
  media
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
  minHeight?: string;
  media?: [
    {
      size: number;
      css: string;
    }
  ];
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

    ${media?.length &&
    media.map(
      query => `
      @media (min-width: ${query.size}px) {
        ${query.css}
      }
    `
    )}
  `;

  return <Flex>{children}</Flex>;
};

export default FlexContainer;
