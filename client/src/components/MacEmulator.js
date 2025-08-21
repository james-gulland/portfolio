export const MacEmulator = ({ children }) => {
  return (
    <div className="mac-window">
      <div className="title-bar">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
      </div>
      {children}
    </div>
  );
};
