import React from 'react';

class FileValidate extends React.Component {
    constructor(props) {
        super(props);

        this.maxFileSize = 1; // in MB
    }
    render() {
        let fileSize = this.props.fileSize;
        return (
            <div>
                {(fileSize > this.maxFileSize) ? <p>File is invalid</p>: <p>File is valid</p>}
            </div>
        )
    }
}
class FileSizeCalculator extends React.Component {
    toMB(fileSize) {
        return (fileSize/(1024*1024)).toFixed(2);
    }
    toKB(fileSize) {
        return (fileSize/1024).toFixed(2);
    }
    fileSizeConvert(fileSize,unit){
        let fileSizeFormatted;
        switch (unit) {
            case 'KB':
                fileSizeFormatted = this.toKB(fileSize)
                break
            case 'MB':
                fileSizeFormatted = this.toMB(fileSize)
                break
            default:
                fileSizeFormatted = fileSize
                break;
        }

        return fileSizeFormatted;
    }
    render() {
        let unit = this.props.unit;
        let fileSize = this.fileSizeConvert(this.props.fileSize,unit);
        return (
            <div>
                <p>File size: {fileSize} {unit}</p>
                {unit === 'MB' ? <FileValidate fileSize={fileSize} />: ''}
            </div>
        )
    }
}

class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileSize: 0
        };

        this.fileInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        let fileSize = this.fileInput.current.files[0].size;
        this.setState({fileSize: fileSize})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" ref={this.fileInput}/>
                    <button type="submit">Submit</button>
                </form>
                <FileSizeCalculator unit={'KB'} fileSize={this.state.fileSize} />
                <FileSizeCalculator unit={'MB'} fileSize={this.state.fileSize} />
            </div>
        );
    }
}

export default FileUpload;