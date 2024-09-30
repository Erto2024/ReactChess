import "./Files.css";


function Files(props) {

  const files = props.files
  return (
    <div className="files">
      {files.map((file,index) => <span key={index}>{file}</span>)}
    </div>
  )
}

export default Files;