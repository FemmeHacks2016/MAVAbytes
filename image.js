<HTML>
<HEAD>

<script type="text/javascript" language="JavaScript">
<!-- Copyright 2002 Bontrager Connection, LLC
//
// Type the number of images you are rotating.

NumberOfImagesToRotate = 3;

// Specify the first and last part of the image tag. 

FirstPart = '<img src="image';
LastPart = '.gif" height="150" width="200">';

function printImage() {
var r = Math.ceil(Math.random() * NumberOfImagesToRotate);
document.write(FirstPart + r + LastPart);
}
//-->
</script>

</HEAD>
