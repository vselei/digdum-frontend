const FlexContainer = ({
  children,
  justifyContent,
  alignItems
}: {
  children: React.ReactElement;
  justifyContent: string;
  alignItems: string;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: justifyContent || 'flex-start',
        alignItems: alignItems || 'flex-start'
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
