// If you want to see all uers profile images, run this on your browser's console

var bodyT = "<body>\n<h1>GitHub users:</h1>\n";
for(i = 1; i < 99/*350000*/; i++) // decomment '350000', if you want (to crash your PC ;) ).
{
	bodyT += '<img src="https://avatars.githubusercontent.com/u/';
	bodyT += i;
	bodyT +='" style="height: 80px;" />\n';
}
bodyT += "</body>";
document.body.outerHTML = bodyT;