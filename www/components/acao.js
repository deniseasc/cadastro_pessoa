$document.on('click','#camera',function(){
  scanBarcode();
})

function scanBarcode() {
  cordova.plugins.barcodeScanner.scan(
    function (result) {
      alert("We got a barcode\n" +
            "Result: " + result.text + "\n" +
            "Format: " + result.format + "\n" +
            "Cancelled: " + result.cancelled);
      $('#codigo').val(result.text);
    }
  );
}