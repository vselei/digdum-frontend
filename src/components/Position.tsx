import styled from '@emotion/styled';

const Position = ({
  children,
  pos,
  top,
  right,
  bottom,
  left,
  media
}: {
  children: React.ReactElement;
  pos: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  media?: [
    {
      size: number;
      css: string;
    }
  ];
}) => {
  const Pos = styled.div`
    position: ${pos || 'relative'};
    top: ${top || 'auto'};
    right: ${right || 'auto'};
    bottom: ${bottom || 'auto'};
    left: ${left || 'auto'};

    ${media?.length &&
    media.map(
      query => `
      @media (min-width: ${query.size}px) {
        ${query.css}
      }
    `
    )}
  `;

  return <Pos>{children}</Pos>;
};

export default Position;
