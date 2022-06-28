import React from "react";

export const SimpleUploadVideo = ({buttonName="Upload video"}) => {
    const inputRef = React.useRef();

    const [file, setFile] = React.useState();

    const handleFileChange = event => {
        const file = event.target.files[0];
        console.log("file", file);
        setFile(file);
    };

    const handleChoose = event => {
        inputRef.current.click();
    };

    return (
        <div>
            <div className="VideoInput_footer">{file?.name}</div>
            <div id="range"/>
            <input
                ref={inputRef}
                className="VideoInput_input"
                type="file"
                onChange={handleFileChange}
                accept=".mov,.mp4"
                style={{display: "none"}}
            />
            {!file && <button className="btn btn-primary" onClick={handleChoose}>{buttonName}</button>}
            {file && (
                <video
                    className="VideoInput_video"
                    width="100%"
                    height={300}
                    controls
                    src={`${URL.createObjectURL(file)}`}
                />
            )}
        </div>
    );
};
