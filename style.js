import * as uppyUpload from "./assets/javascript/uppy.min.js"
const optionUppy = {
  target: '#uppy', 
  inline: true,
  showProgressDetails: true,
  width: 500,
  height: 400,
  metaFields: [
    { 
      id: 'name', 
      name: 'Name', 
      placeholder: 'file name' 
    }
  ]
}
const uppy = new uppyUpload.Uppy()
uppy.use(uppyUpload.XHRUpload, {
  endpoint: "http://localhost:3000/file?path=uppy",
  fieldName: "file",
});
uppy.use(uppyUpload.Webcam);
uppy.use(uppyUpload.ImageEditor, {
  quality: 0.8,
});
uppy.use(uppyUpload.Dashboard, optionUppy)
