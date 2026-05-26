export const MacEmulator = ({ children, style }) => {
  return (
    <div className="mac-window" style={style}>
      <div className="title-bar">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      {children}
    </div>
  );
};
