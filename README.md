Demo of react "file upload" using [react-dropzone](https://github.com/react-dropzone/react-dropzone)


See their readme for info about getting file contents using [FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)

```
onDrop: acceptedFiles => {
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
            // do whatever you want with the file content
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        reader.readAsBinaryString(file);
    });
}
```