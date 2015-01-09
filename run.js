// Simple Chrome etention to format bookstrap formatting which currently has an
// issue with the help button overlapping the text and flat formatting of lists.

document.addEventListener('DOMContentLoaded', (function() {

	setTimeout(function() {
		document.body.style.padding="0px 30px";
		var lists = document.getElementsByTagName("ul");
		for (var i=0; i<lists.length; i++) {
			lists[i].style.padding="0px 20px";
		}
	}, 4000);

	setTimeout(function() {
		document.body.style.padding="0px 30px";
		var lists = document.getElementsByTagName("ul");
		for (var i=0; i<lists.length; i++) {
			lists[i].style.padding="0px 20px";
		}
	}, 6000);

	setTimeout(function() {
		document.body.style.padding="0px 30px";
		var lists = document.getElementsByTagName("ul");
		for (var i=0; i<lists.length; i++) {
			lists[i].style.padding="0px 20px";
		}
	}, 8000);
	
})());
