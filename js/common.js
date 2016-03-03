
function getWindowHeight(){
    return window.innerHeight?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:640}
function adapterPage(a){
	var b=18;a>=720&&(a=720,b=30),
	document.getElementsByTagName("html")[0].style.fontSize=(a/b).toFixed(0)+"px",
	document.body.style.minHeight=getWindowHeight()+"px"}
	var _hmt=_hmt||[];
	
    var oc_width;
    document.body.onload=function(){
    oc_width=document.body.clientWidth,adapterPage(oc_width)},
  
    oc_width=document.body.clientWidth,adapterPage(oc_width),
        Date.prototype.format=function(a){
        	var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a},String.prototype.format||(String.prototype.format=function(){var a=arguments;return this.replace(/{(\d+)}/g,function(b,c){return"undefined"!=typeof a[c]?a[c]:b})});

