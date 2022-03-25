import React from "react";

export const SIMPLE_VIDEO_PLAYER = () => {
  const inputRef = React.useRef();

  const [file, setFile] = React.useState();

  const handleFileChange = event => {
    const file = event.target.files[0];
    console.log("file", file);
    //const url = URL.createObjectURL(file);
    setFile(file);
  };

  const handleChoose = event => {
    inputRef.current.click();
  };

  return (
    <>
      <div className="VideoInput_footer">{file?.name || "Nothing selectd"}</div>
      <div id="range"></div>
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!file && <button onClick={handleChoose}>upload video</button>}
      {file && (
        <video
          className="VideoInput_video"
          width="100%"
          height={300}
          controls
          src={`${URL.createObjectURL(file)}`}
        />
      )}
    </>
  );
};
