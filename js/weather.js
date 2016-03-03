var localcity="北京",
date=new Date,dateStr=date.format("yyyy-MM-dd");
$(function(){
    $.ajax({
    	dataType:"jsonp",
    	async:!1,
    	timeout:1e3,
    	url:"http://api.map.baidu.com/location/ip?ak=qzIgYIRjVCS5DVd8A8j8GUGH",
    	success:function(b){
        b&&0==b.status&&(localcity=b.content.address_detail.city),
        a()},
        error:function(){
        	a()}});
    var a=function(){b()},
        b=function(){
        	$.ajax({
        		type:"post",
        		url:"http://api.1-blog.com/biz/bizserver/weather/list.do?more=2",
        		timeout:5e3,data:{city:localcity,beginDate:dateStr,more:0},
        		success:function(a){
        			if(a&&"000000"==a.status&&a.detail.length>=1)
        				{
        					var b=a.detail[0];$("#city").text(b.city),
        					$("#date").text(b.date);
        					var c=b.day_condition;
        					b.day_condition!=b.night_condition&&(c+="~"+b.night_condition);
        					var d=b.day_temperature+"~"+b.night_temperature,
        					e="<div>{0}</div><div>{1}</div><div>白天：{2}</div><div>夜间：{3}</div>",
        					f=e.format(c,d,b.day_wind,b.night_wind,new Date(b.update_time).format("MM-dd hh:mm"));
        					if($("#day").html(f),a.detail.length>1){
        						var g=a.detail[1];$("#date2").text(g.date);
        						var h=b.day_condition;g.day_condition!=g.night_condition&&(h+="~"+g.night_condition);
        						var i=g.day_temperature+"~"+g.night_temperature,
        						e="<div>{0}</div><div>{1}</div><div>白天：{2}</div><div>夜间：{3}</div>",
        						j=e.format(h,i,g.day_wind,g.night_wind,new Date(g.update_time).format("MM-dd hh:mm"));
        						$("#day2").append($(j)),$("#day2").css("display","block")
        					}}},
        						error:function(){}})}});