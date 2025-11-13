  document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'files/myfile.pdf'; // path to your PDF
    link.download = 'myfile.pdf';   // filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });