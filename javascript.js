    var topButton = document.getElementById('toTop') ;
window.onscroll = function () { toTopScroll()};
function toTopScroll() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
		topButton.style.display="block" ;
	}
	else {
		topButton.style.display="none";
	}
}
function toTopButton() {
	document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    function modalHide() {
      modal.style.display = "none";
    }
    setTimeout(modalHide, 5000);

    var topButton = document.getElementById('toTop'); window.onscroll = function () { toTopScroll() }; function toTopScroll() { if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) { topButton.style.display = "block"; } else { topButton.style.display = "none"; } } function toTopButton() { document.body.scrollTop = 0; document.documentElement.scrollTop = 0; }