function ExternalCall(json)
{	
	var h=eval('(' + json + ')').url;
	if(h=="q1"){$(function(){$("#prev").click()})}
   	 		else if(h=="q2"){$(function(){$("#next").click()})}
   	 			else if(h=="q3"){$(function(){$("#prev1").click()})}
   	 				else if(h=="q4"){$(function(){$("#next1").click()})}
   	 					else if(h=="q5"){$(function(){$("#prev2").click()})}
								else{location.href =h}
}