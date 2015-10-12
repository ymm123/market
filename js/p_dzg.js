window.onload=function(){
	var bo=document.getElementsByTagName("body")[0];
	var P_oTex = document.getElementById("ptex");
	P_oTex.onclick=function(){
		P_oTex.value="";
	}
	var P_clear =document.getElementById("p_clear");
	var P_p_banner= document.getElementById("_p_banner")
	var P_clearf=0;
	P_clear.onclick=function(){
		if(P_clearf==0)
		{P_p_banner.style.display="none";
		 P_clear.className="p_clearimg";
		 P_clearf=1;
	    }else{
         P_p_banner.style.display="block";
		 P_clear.className="_p_clearimg";
		 P_clearf=0;
	    }
	}

	var P_sidebar_a =document.getElementById("sidebar_a");
	var P_a_back = P_sidebar_a.getElementsByTagName("li");
	var P_a_backsp=P_sidebar_a.getElementsByTagName("span");
	var P_a_backa=P_sidebar_a.getElementsByTagName("a");
	var p_sp_a =document.getElementById("sp_a");
	var p_sidebar_abj=document.getElementsByClassName("sidebar_abj");
    var p_menu= document.getElementById("pmenu");
    var sidebar_aul1=document.getElementById("sidebar_aul1");
	var p_menu_div=document.getElementById("pmenu_div");
	var p_index=0,ptime2=null;;
    p_sp_a.style.display="none";
	for(var m=0;m<p_sidebar_abj.length;m++){
		p_sidebar_abj[m].style.left=190+"px";
		p_sidebar_abj[m].Ptime=null;
		p_sidebar_abj[m].style.top=33*m+"px";
		p_sidebar_abj[m].pLe=190;
	}
	// for(var h=0;h<P_a_backsp.length;h++){
	// 	P_a_backsp[h].onmouseover=function(){
 //                  console.log(1)
	// 	}
	// }
	// for(var n=0;n<P_a_backa.length;n++){
	// 	P_a_backa[n].onmouseover=function(){
	// 		console.log(1)
	// 	}
	// }
	for( var i=0;i<P_a_back.length;i++){
		P_a_back[i].index=i;
		P_a_back[i].onmouseover=function(){
			for(j=0;j<P_a_back.length;j++){	
				P_a_back[j].className="";
			}
			P_a_back[this.index].className="_p_dqli";
			p_sp_a.style.display="block";
			p_sp_a.className="sp_a";
			p_sp_a.style.top=(this.index)*33+10+"px";
			pfn(this.index,-2,1);
			ppfn(this.index,1);
			p_menu_div.style.display="block";
			ptur(this.index);
		}
		P_a_back[i].onmouseout=function(event){
			P_a_back[this.index].className="";
			p_sp_a.className="sp_a sp_a_1"
			pfn(this.index,2,2);
			ppfn(this.index,2);
			ptuc(this.index);
		}
	}
	// sidebar_aul1.onmouseout=function(){
	// 	p_menu_div.style.display="none";
	// }

	// 背景移入移出
	p_sp_a.onmouseover=function(){
		p_sp_a.style.display="block";
	    p_sp_a.className="sp_a";
		var m=(parseInt(p_sp_a.style.top)-10)/33;
	        pfn(m,-2,1);
			ppfn(m,1)
		P_a_back[m].className="_p_dqli";
	}
	p_sp_a.onmouseout=function(){
		p_sp_a.className="sp_a sp_a_1";
		var m=(parseInt(p_sp_a.style.top)-10)/33;
	        pfn(m,2,2);
			ppfn(m,2);
			P_a_back[m].className="";
	}
	// 移入移出函数
	function ppfn(b,c){
		var P_a_a=P_a_back[b].getElementsByTagName("a");
		    for(var na=0; na<P_a_a.length; na++){
		    	if(c=="1"){
		    		P_a_a[na].className="p_bigbanner_a";
		    	}else{
		    		P_a_a[na].className="";
		    	}

		    }
	}
	// 文字属性改变
	function pfn(s,a,c){
	 clearInterval(p_sidebar_abj[s].Ptime)
		p_sidebar_abj[s].Ptime=setInterval(function(){
		p_sidebar_abj[s].pLe+=parseInt(a);
				if(c=="1"){
				if(p_sidebar_abj[s].pLe<=0){
					p_sidebar_abj[s].pLe=0;
					clearInterval(p_sidebar_abj[s].Ptime);
				}
			   }
			   if(c=="2"){
				if(p_sidebar_abj[s].pLe>=190){
					p_sidebar_abj[s].pLe=190;
					clearInterval(p_sidebar_abj[s].Ptime);
				}
			}
				p_sidebar_abj[s].style.left=p_sidebar_abj[s].pLe+"px";
			},1)
	}

	// 左右侧边栏开始
	var p_ptupian=document.getElementById("ptupian");
	var poFix=document.getElementById("p_cebianlan");
	var p_cebianlan=document.getElementById("p_cebianlan").getElementsByTagName("p");
	var p_cebianlantu=document.getElementById("p_cebianlantu").getElementsByTagName("li");;
	var p_sidebar_r_img1=document.getElementById("sidebar_r_img1");
	var p_sidebar_r_img2=document.getElementById("sidebar_r_img2");
	var p_p_bigbanner=document.getElementById("p_bigbanner");
	var tpdz=["../image/shouye_lbt1.jpg","../image/shouye_lbt2.jpg","../image/shouye_lbt3.jpg","../image/shouye_qbt1.jpg","../image/shouye_qbt2.jpg","../image/shouye_qbt3.jpg",
	"../image/shouye_qbt4.jpg","../image/shouye_qbt5.jpg","../image/shouye_qbt6.jpg","../image/shouye_qbt7.jpg","../image/shouye_qbt8.jpg","../image/shouye_qbt9.jpg","../image/shouye_qbt10.jpg","../image/shouye_qbt11.jpg"];
	var _sidebar_r_img=["../image/sy_sider_r1.png","../image/sy_sider_r2.png","../image/sy_sider_r3.png","../image/sy_sider_r4.png"];
	var bjdz=["#daf898","#fff1e4","#52cb7e","#ffd801","#e9eee8","#f8bcc8","#ffe401","#95e3bb","#66759e","#cce6dd","#ffb9c4","#f5f5f5","#d6c2dd","#adfbfd"];	
	var mmm=NaN,p_time2=null,timep=null;
	var p_p_cebianlan_r=document.getElementById("p_cebianlan_r");
	var p_odiv=p_p_cebianlan_r.getElementsByTagName("div");
	var p_flag0=0;
	function ptur (t){
		 p_menu.style.left=-10+"px";
		 p_menu.style.opacity=100;
		 p_menu.style.display="none";
		 p_time2=setTimeout(function(){
        p_ptupian.className="tupian1";
        p_menu.style.display="block";
        startMove(p_menu,{left:0},function(){
        })
        },100)
		if(mmm!=t){
		mmm=parseInt(t)
        p_ptupian.className="tupian2";
        p_ptupian.style.opacity=100;
        p_ptupian.src=tpdz[t];
        p_p_bigbanner.style.backgroundColor=bjdz[t];
        var xb=t%4
        var xb1=t%4+1
        if(xb1==4){
        	xb1=0
        }
        p_sidebar_r_img1.src=_sidebar_r_img[xb];
        p_sidebar_r_img2.src=_sidebar_r_img[xb1];
        }
	}
	clearTimeout(p_time2)
	function ptuc(t){
	    var mm=t;
    setTimeout(function(){
         if(mm==t){

         	 startMove(p_menu,{opacity:0},function(){
		     p_menu.style.display="none";
	     })	
         }else{
         	 p_menu.style.opacity=100;
         }
        },30)	
		p_ptupian.style.opacity=90;
		
	}
	for(var k=0; k<p_cebianlantu.length; k++){
		  p_cebianlantu[k].index=k;
		p_cebianlantu[k].onmouseover=function(){
			for(var j=0; j<p_cebianlan.length; j++){
				p_cebianlan[j].style.backgroundColor="#bbbbbb";
			}
			   p_cebianlan[this.index].style.backgroundColor="#b70000";
		}
		window.onscroll=function(){
			var oToP = document.body.scrollTop||document.documentElement.scrollTop;
			if(oToP>1460){
				poFix.style.display="block";
			
			}else{
				poFix.style.display="none";
			}
			if(oToP>730){
				p_p_cebianlan_r.style.display="block";
			}else{
				p_p_cebianlan_r.style.display="none";
			}
			p_odiv[0].onclick=function(){
				timep=setInterval(function(){
					oToP-=oToP/20;
					document.body.scrollTop=oToP;
					document.documentElement.scrollTop=oToP;
					
				},0.1)
			}
			if(oToP==0){
				clearInterval(timep);
			}
			p_odiv[3].onclick=function(){
				if(p_flag0==0){
					p_p_cebianlan_r.style.display="none";
					p_p_cebianlan_r.style.opacity=0;
					p_flag0=0;
				}
				
			}
		}
	}
	//大图滚动
	  var box=document.getElementsByClassName('p_dtgdbox')[0];
	  var inner=document.getElementsByClassName('p_dtgdinner')[0];
	  var zuo=document.getElementsByClassName('p_dtgdan1')[0];
	  var you=document.getElementsByClassName('p_dtgdan2')[0];
	  var time=null,time1=null;
	  var p=0
        function b (){
        		 box.scrollLeft-=2;
        		 if(box.scrollLeft<=0){
        		 	 box.scrollLeft=1600
        		 }
        		  if(box.scrollLeft%800==0){
	          	   clearInterval(time1)
	              setTimeout(function(){
	              	    if(p==0){outmove()}
	              	    	else{out()}
	              },1000)             
             }
       }
	   function a (){
                 box.scrollLeft+=2;
         if(box.scrollLeft>=1600){
             box.scrollLeft=0
             }
          if(box.scrollLeft%800==0){
          	   clearInterval(time)
              setTimeout(function(){
              	  if(p==1){out()}
	              	else{outmove()}
              },1000)   
          }
         }
	   outmove()
	   zuo.onclick=function(){
	   	    clearInterval(time1);
            clearInterval(time);
	   	 outmove()
	   }
	   you.onclick=function(){
	   	    clearInterval(time1);
            clearInterval(time);
           out()
	   }
        function out(){
        	clearInterval(time1);
            clearInterval(time);
        	time1=setInterval(b,1)
        	p=1;
        }
        function outmove(){
	   	    clearInterval(time);
	   	    clearInterval(time1);
           time=setInterval(a,1);
           p=0;
	   }
	// 首页左右侧边栏
	if(bo.id=="aaa" || bo.id=="grxx" || bo.id=="zhuye"){	
		var oRadio1=document.getElementsByClassName("G_li_anniu");
		var oRad=document.getElementsByClassName("G_table_huan");
		 if(bo.id=="zhuye"){
    	oRadio1[0].style.backgroundColor="#17b4bb"; 
    	oRadio1[3].style.backgroundColor="#73939e"; 
    	oRadio1[6].style.backgroundColor="#674941"; 
		            }
		z_qiehuan()
		function z_qiehuan(){
		    for(var q=0;q<oRadio1.length;q++){
		    	oRadio1[q].index=q;
		    	oRadio1[q].onclick=function () {
		            if(bo.id=="aaa"){
		        	   aaa_tab(this.index);
		              }
		            if(bo.id=="grxx"){
		            	sss_tab(this.index)
		            }
		            if(bo.id=="zhuye"){ 
		            	zhuye_tab(this.index)
		            }
		    	}
		    }
		 }
		 function aaa_tab (b){
		 for(var p=0;p<oRad.length;p++){
		       oRad[p].style.display="none";
		       oRadio1[p].className="G_li_anniu";
		   }
		      if(oRadio1[b].index==0){
		        oRadio1[b].className="G_li_anniu G_li1";
		       }else{
		        oRadio1[b].className="G_li_anniu G_li2";
		        	   	      } 
			   oRad[b].style.display="block";     
		 }
		 function sss_tab(b){
		 	for(var p=0;p<oRad.length;p++){
		 	 oRad[p].style.display="none";
		 	 oRadio1[0].className="z_grxuanka1 z_grxuanka4 z_grxuanka6 G_li_anniu";
		 	 oRadio1[1].className="z_grxuanka1 z_grxuanka3 z_grxuanka5 G_li_anniu";
		 	}
		 	 if(b==1){
		 	 	
		 	 	oRadio1[0].className="z_grxuanka1 z_grxuanka4 z_grxuanka6 G_li_anniu";
		 	 	oRadio1[1].className="z_grxuanka1 z_grxuanka3 z_grxuanka5 G_li_anniu";
		 	 }else{
		 	 	
		 	 	oRadio1[0].className="z_grxuanka1 z_grxuanka3 z_grxuanka6 G_li_anniu";
		 	 	oRadio1[1].className="z_grxuanka1 z_grxuanka4 z_grxuanka5 G_li_anniu";
		 	 }
		     oRad[1-b].style.display="block";
		 }
        function zhuye_tab(b){
        	var m=0,n=0,clr="";
        	if(b<=2){
        		m=0;
        		n=2;
        		clr="#17b4bb";
        	}
        	if(b>2&&b<=5){
        		m=3;
        		n=5;
        		clr="#73939e";
        	}
        	if(b>5){
        		m=6;
        		n=8;
        		clr="#674941";
        	}
        	for(var p=m;p<=n;p++){
        		console.log(p)
        	oRadio1[p].style.backgroundColor="" 
		    oRad[p].style.display="none";
		     }
		   oRad[b].style.display="block";
		   oRadio1[b].style.backgroundColor=clr; 
        }
	}
	var oScrtop=document.body.scrollTop||document.documentElement.scrollTop;
     for(var b=0;b<p_cebianlantu.length;b++){
	p_cebianlantu[b].index=b;
	p_cebianlantu[b].onclick=function(){
	if(this.index%3==0){
	oScrtop=1438;
	}
	if(this.index%3==1){
	oScrtop=2040;
	}
	if(this.index%3==2){
	oScrtop=3050;
	}
	document.body.scrollTop=oScrtop;
	document.documentElement.scrollTop=oScrtop;
	}
	}
}