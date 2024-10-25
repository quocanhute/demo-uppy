import * as uppyUpload from ".././assets/javascript/uppy/uppy.min.js"
import English from '@uppy/locales/lib/en_US';
import German from '@uppy/locales/lib/de_DE';
import Vietnam from '@uppy/locales/lib/vi_VN';
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
const uppy = new uppyUpload.Uppy({
  restrictions: {
    maxFileSize: 10000000,
    minFileSize: 100,
    allowedFileTypes: ['image/*', '.jpg', '.jpeg', '.png', '.gif']
  }
})
uppy.use(uppyUpload.XHRUpload, {
  endpoint: "http://localhost:3000/file?path=uppy",
  fieldName: "file",
});
uppy.use(uppyUpload.Webcam);
uppy.use(uppyUpload.ImageEditor, {
  quality: 0.8,
});
uppy.use(uppyUpload.Dashboard, optionUppy)

document.getElementById("language").addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  // Update the message based on the selected language
  if (selectedLanguage === "default") {
    uppy.setOptions({
      locale: English
    });
  } else if (selectedLanguage === "vi_VN") {
    uppy.setOptions({
      locale: Vietnam
    });
  } else if (selectedLanguage === "de_DE") {
    uppy.setOptions({
      locale: German
    });
  }
});
