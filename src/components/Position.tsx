import styled from '@emotion/styled';

const Position = ({
  children,
  pos,
  top,
  right,
  bottom,
  left
}: {
  children: React.ReactElement,
  pos: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
}) => {
  const Pos = styled.div`
    position: ${pos || 'relative'};
    top: ${top || 'auto'};
    right: ${right || 'auto'};
    bottom: ${bottom || 'auto'};
    left: ${left || 'auto'};
  `;

  return <Pos>{children}</Pos>;
};

export default Position;
