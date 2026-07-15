function downloadPDF() {
  const link = document.createElement("a");
  link.href = "pdf/MVVM_MVI Article.pdf";
  link.download = "pdf/MVVM_MVI_Article.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
