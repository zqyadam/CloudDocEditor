import React, { useState, useEffect, useRef } from "react";

const FileSearch = ({ title, onFileSearch }) => {
  const [inputActive, setInputActive] = useState(false);
  const [value, setValue] = useState("");

  const closeSearch = e => {
    e.preventDefault();
    setInputActive(false);
    setValue("");
  };
  useEffect(() => {
    const handleInputEvent = event => {
      if (event.keyCode === 13 && inputActive) {
        onFileSearch(value);
      } else if (event.keyCode === 27 && inputActive) {
        closeSearch();
      }
    };

    document.addEventListener("keyup", handleInputEvent);

    return () => {
      document.removeEventListener("keyup", handleInputEvent);
    };
  });

  let node = useRef(null);
  useEffect(() => {
    if (inputActive) {
      node.current.focus();
    }
  }, [inputActive]);
  return (
    <div className="alert alert-primary">
      {!inputActive && (
        <div className="d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setInputActive(true)}
          >
            搜索
          </button>
        </div>
      )}
      {inputActive && (
        <div className="row">
          <input
            className="col-8 form-control"
            type="text"
            value={value}
            ref={node}
            onChange={e => setValue(e.target.value)}
          />
          <button className="col-4 btn btn-primary" onClick={closeSearch}>
            关闭
          </button>
        </div>
      )}
    </div>
  );
};

export default FileSearch;
