import React, { Component } from "react";
import classNames from "classnames";
import Dropzone from "react-dropzone";

class App extends Component {
    state = {
        files: [],
        fileNames: []
    };

    onDrop = (acceptedFiles, rejectedFiles) => {
        console.log(acceptedFiles);
        const fileNames = acceptedFiles.map(f => f.name);
        this.setState({ ...this.state, files: acceptedFiles, fileNames: fileNames  });
    };

    render() {
        const fileNameList = (this.state.fileNames) ? (this.state.fileNames.map((f) => <li key={f}>{f}</li>)) : ''

        return (
            <div className="App">
                <Dropzone className="dropzone"  onDrop={this.onDrop}>
                    {({ getRootProps, getInputProps, isDragActive }) => {
                        return (
                            <div
                                {...getRootProps()}
                                className={classNames("dropzone", {
                                    "active": isDragActive
                                })}
                            >
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop files here...</p>
                                ) : (
                                    <p>
                                        Try dropping some files here, or click
                                        to select files to upload.
                                    </p>
                                )}
                            </div>
                        );
                    }}
                </Dropzone>
                <ul>{fileNameList}</ul>
            </div>
        );
    }
}

export default App;
