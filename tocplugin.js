//<![CDATA[           
//*************TOC ebooksfree4u.com           
function mbtTOC() {var mbtTOC=i=headlength=gethead=0;           
headlength = document.getElementById("post-toc").getElementsByTagName("h2").length;for (i = 0; i < headlength; i++)           
{gethead = document.getElementById("post-toc").getElementsByTagName("h2")[i].textContent;document.getElementById("post-toc").getElementsByTagName("h2")[i].setAttribute("id", "point"+i);mbtTOC = "<li><a href='#point"+i+"'>"+gethead+"</a></li>";document.getElementById("mbtTOC").innerHTML += mbtTOC;}}function mbtToggle() {var mbt = document.getElementById('mbtTOC');if (mbt .style.display === 'none') {mbt .style.display = 'block';} else {mbt .style.display = 'none';}}           
//]]>         
