// var x = tinymce.init({selector:'textarea'});

var quill = new Quill('#editor', {
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline'],
        ['image', 'code-block'],
        [{'color': ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00"]}]
      ]
    },
    theme: 'snow'
  });


  function email(){
    //var mailHtm = "<h1>Sample Email</h1>";
    var mailHtm = quill.container.firstElementChild.innerHTML;
    var emailTo = "abc@test.com";
    var emailSubject = "test email";
    var emlCont = 'To: ' + emailTo + '\n';
    emlCont += 'Subject: ' + emailSubject + '\n';
    emlCont += 'X-Unsent: 1' + '\n';
    emlCont += 'Content-Type: text/html' + '\n';
    emlCont += '' + '\n';
    emlCont += '<!DOCTYPE html><html><head></head><body>' + mailHtm + '</body></html>';
  
    console.log(emlCont);             
  
  
    var textFile = null;
    var data = new Blob([emlCont], {type: 'text/html'});
    if(textFile !== null){
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
  
    var a = document.createElement('a');
    var linkText = document.createTextNode('fileLink');
    a.appendChild(linkText)
    a.href = textFile;
    a.id = 'fileLink';
    a.download = emailSubject + '.eml';
    a.style.visibility = 'hidden';
    document.body.appendChild(a);
    document.getElementById('fileLink').click();
  }
