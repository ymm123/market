function getByClass(oParent,sClass)
	{
		var aEle=oParent.getElementsByTagName('*');
		var aResult=[];
		for(var i=0; i<aEle.length; i++){
			if(aEle[i].className==sClass)
			{
				aResult.push(aEle[i]);
			}
		}
		return aResult
	}
function getStyle(ele,prop){
     	var value
     	if(prop in document.body.style){
     		if(window.getComputedStyle){
     			value=getComputedStyle(ele,null)[prop];

     		}else{
     			value=elecurrentStyle[prop];
     		}
     		value=parseFloat(value);
     	}else{
     		value=oBox[prop];
     	}
     	return value;
}
function startMove(obj,json,fnEnd)
    {

      clearInterval(obj.time);
      obj.time=setInterval(function(){

        var bStop=true;
        for(var attr in json)
        {
        var cur=0;
         if(attr=='opacity')
            {
             cur=Math.round(parseFloat(getStyle(obj,attr))*100);
            }
            else
            {
              cur=parseInt(getStyle(obj,attr)); 
            }
         var speed=(json[attr]-cur)/6;
         speed=speed>0?Math.ceil(speed):Math.floor(speed);
            if(cur!=json[attr]){
              bStop=false;
            }
       
            if(attr=='opacity')
            {
             obj.style.filter='alpha(opacity:'+(cur+speed)+')';
             obj.style.opacity=(cur+speed)/100;
            }
            else
            {
            obj.style[attr]=cur+speed+'px';
            }              
       }
       if(bStop){
        clearInterval(obj.time);
        if(fnEnd){
          fnEnd();
        }
       }
      },30)
    }
// function danxuan () {
//     var bo=document.getElementsByTagName("body")[0];
//     if(bo.id=="ffff"||"sss"){ 
//     var oRadio=document.getElementsByClassName("radio");
//     for(var q=0;q<oRadio.length;q++){
//         oRadio[q].flag=true;
//         oRadio[q].index=q;
//         oRadio[q].onclick=function () {
//             if(this.flag==true){
//                     y_fengzu(this.index);
//                     this.flag=false;    
//                     return;
//             }
//             if(this.flag==false){
//                     this.src="../image/jszx_radio1.png";
//                     this.flag=true;
//                     return; 
//             }
//         }
//     } 
//     function y_fengzu(b){
//     if(bo.id=="ffff"){
//         if(1<b<5){
//            y_xuanzhong(2,4,b) 
//         }
//         if(5<=b<=15){
//            y_xuanzhong(5,15,b) 
//         }
//         if(16<=b<=17){
//            y_xuanzhong(16,17,b)
//         }
//         if(17<b){
//            y_xuanzhong(18,19,b)
//         }
//     }
//     if(bo.id=="sss"){
        
//     }
//     }
//     function y_xuanzhong(start,end,d){
//         for(var m=start; m<=end;m++){
//             oRadio[m].src="../image/jszx_radio1.png";
//             oRadio[d].src="../image/jszx_radio2.png";
//             oRadio[m].flag=true;
//             oRadio[d].flag=false;
//         }

//     }
//        }
    
// }