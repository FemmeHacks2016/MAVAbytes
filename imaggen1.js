<script type="text/javascript">
 var imlocation = "images/";
 var currentdate = 0;
 var image_number = 0;
 function ImageArray(n) {
   this.length = n;
   for (var i =1; i <= n; i++) {
     this[i] = ' '
   }
 }
 image = new ImageArray(3)
 image[0] = 'image1.gif'
 image[1] = 'image2.gif'
 image[2] = 'image3.gif'
 var rand = 60/image.length
 function randomimage() {
 	currentdate = new Date()
 	image_number = currentdate.getSeconds()
 	image_number = Math.floor(image_number/rand)
 	return(image[image_number])
 }
 document.write("<img src='" + imlocation + randomimage()+ "'>");
//-->
</script>