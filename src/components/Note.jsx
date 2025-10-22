import {forwardRef} from "react";

const Note = forwardRef(({content, initialPos, isChecked, onCheck, ...props}, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
        backgroundColor: "lightblue",
      }}
      {...props}
    >
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={onCheck} 
        style={{ marginRight: "10px" }} 
      />
      📌 {content}
    </div>
  );
});

export default Note;