
window.onload=function () {
	var bo=document.getElementsByTagName("body")[0];
	//以下为头部下拉的js
	if(bo.id!="ddcg" && bo.id!="dl" && bo.id!="jszx" && bo.id!="wdgwc" && bo.id!="zcphone"){
		var y_zk=document.getElementById("z_zk")
		var y_sy_zk=document.getElementById("z_zk").getElementsByTagName("ul");
		var  y_sy_sj=document.getElementById("z_neiwen").getElementsByClassName("z_sy_a1");  
		for(var k=0;k<4;k++){
			y_sy_sj[k].index=k;
			y_sy_sj[k].onmouseover=function(){
				for(var i=0;i<4;i++){
					y_sy_zk[i].style.display="none";
					y_sy_zk[this.index].style.display="block";	
				}
			}
			y_sy_sj[k].onmouseout=function(){
	             y_sy_zk[this.index].style.display="none";
				 b(this.index)	 
			}
		}
	    function b(c){
	         y_sy_zk[c].onmouseover=function(){
	            y_sy_zk[c].style.display="block";
	         }
	          y_sy_zk[c].onmouseout=function(){
	            y_sy_zk[c].style.display="none";
	         }
	    }
	}
	if(bo.id=="jszx"){
     //结算中心js效果
	var y_jszx_xg=document.getElementsByClassName("y_jszx_xg");
	var y_jszx_text2=document.getElementsByClassName("y_jszx_text2");
	var y_jszx_bc=document.getElementsByClassName("y_jszx_bc");
	var y_jszx_text6=document.getElementsByClassName("y_jszx_text6");
	var y_jszx_li2=document.getElementsByClassName("y_jszx_li2");
	// 修改与保存
	for(var i=0;i<y_jszx_text2.length;i++){
		y_jszx_text2[i].index=i;
		y_jszx_text2[i].onclick=function () {
			y_jszx_xg[this.index].style.display="none";
			y_jszx_bc[this.index].style.display="block";
		}
	}
	for(var j=0;j<y_jszx_text6.length;j++){
		y_jszx_text6[j].index=j;
		y_jszx_text6[j].onclick=function () {
			y_jszx_xg[this.index].style.display="block";
			y_jszx_bc[this.index].style.display="none";
			y_js_getinform();
		}
	}
	for(var k=0;k<y_jszx_li2.length;k++){
		y_jszx_li2[k].index=k;
		y_jszx_li2[k].onclick=function () {
			y_jszx_xg[this.index].style.display="block";
			y_jszx_bc[this.index].style.display="none";
			y_js_getinform();
		}
	}
	//发票的修改与保存
	var y_jszx_fpxg=document.getElementById('y_jszx_xg1');
	var y_jszx_fpbc=document.getElementById('y_jszx_bc1');
	var y_jszx_xg1=document.getElementById('y_jszx_change4');
	var y_jszx_bc1=document.getElementById('y_jszx_change5');
	var y_jszx_li6=document.getElementsByClassName("y_jszx_li6")[0];
	var y_jszx_li7=document.getElementsByClassName("y_jszx_li7")[0];
	var y_js_br=document.getElementsByClassName("y_js_br")[0];
	function fpxg () {
		y_jszx_fpxg.style.display="none";
		y_jszx_fpbc.style.display="block";
		y_js_br.style.marginTop="-171px"
		y_js_br.style.marginBottom="121px"
	}
	function fpbc () {
		y_jszx_fpxg.style.display="block";
		y_jszx_fpbc.style.display="none";
		y_js_br.style.marginTop="4px"
		y_js_br.style.marginBottom="4px"
	}
	y_jszx_xg1.onclick=function  () {
		fpxg();
	}
	y_jszx_bc1.onclick=function  () {
		fpbc();
	}
	y_jszx_li6.onclick=function  () {
		fpbc();
		
	}
	y_jszx_li7.onclick=function  () {
		fpbc();
		

	}
	// 改变输入框字体颜色
	var y_jszx_co=document.getElementsByClassName("y_jszx_color");
	var y_arr_sz=["区号","电话号码","分机号"]
	for(var c=0;c<y_jszx_co.length;c++){
		y_jszx_co[c].flag1=true;  //保留输入的用户信息
		y_jszx_co[c].index=c;
		y_jszx_co[c].onfocus=function  () {
			if(this.flag1==true){
				y_jszx_co[this.index].value="";
				this.flag1=false;
			}
			y_jszx_co[this.index].style.color="#000";
		}
		y_jszx_co[c].onblur=function (){
			for(var i=0;i<y_jszx_co.length;i++){
				if(y_jszx_co[i].value==""){
					y_jszx_co[this.index].value=y_arr_sz[this.index];
					y_jszx_co[this.index].style.color="#c9c9c9";
				}
			}
		}
	}
	
	//获取用户数据	
	var y_js_input=document.getElementsByTagName("input");
	var y_js_txt=document.getElementsByClassName("text3");
	var y_js_dz=document.getElementsByClassName("y_js_dz");
	var y_js_zy=document.getElementById("y_js_zy");
	var y_js_sf=document.getElementById("y_js_sf");
	function y_js_getinform(){
		if(y_js_tf==true){
			y_js_txt[0].innerHTML=y_js_input[0].value;
			y_js_txt[1].innerHTML=y_js_input[2].value;
			y_js_dz[0].innerHTML=y_js_input[1].value;
		}
		y_js_zy.innerHTML=y_js_input[7].value;
		if(oRadio[16].flag==true){
			y_js_sf.innerHTML="否";
		}else{
			y_js_sf.innerHTML="是";
		}
	}
// 以上是结算中心的js效果	
}
    //单选框的改变
 if(bo.id=="grxx"||bo.id=="jszx"){
	var oRadio=document.getElementsByClassName("radio");
	var y_js_tf=false;
	for(var q=0;q<oRadio.length;q++){
        oRadio[q].flag=true;
		oRadio[q].index=q;
		oRadio[q].onclick=function () {
		y_js_tf=oRadio[this.index].flag;
			if(this.flag==true){
				  if(bo.id=="jszx"){
					y_fengzu(this.index);
				    }
				  if(bo.id=="grxx"){
				  	y_fengzugr(this.index);
				  }
					this.flag=false;	
					return;
			}
			if(this.flag==false){
				    this.src="../image/jszx_radio1.png";
					this.flag=true;
					return;	
			}

		}
	}
	function y_fengzu(b){
		if(b<=1){
			y_xuanzhong(0,1,b)
		}
		if(b>1&&b<5){
	       y_xuanzhong(2,4,b) 
	    }
	    if(b>=5&&b<=15){
	       y_xuanzhong(5,15,b) 
	    }
	    if(b>=16&&b<=17){
	       y_xuanzhong(16,17,b)
	    }
	    if(17<b){
	       y_xuanzhong(18,19,b)
	    }
	}
	function y_fengzugr(b){
		if(b>=0&&b<=2){
			y_xuanzhong(0,2,b)
		}else if(b>2&&b<6){
			y_xuanzhong(3,5,b)
		}
	}
	function y_xuanzhong(start,end,d){
		for(var m=start; m<=end;m++){
			console.log(oRadio[0])
			oRadio[m].src="../image/jszx_radio1.png";
	        oRadio[d].src="../image/jszx_radio2.png";
	        oRadio[m].flag=true;
            oRadio[d].flag=false;
		}

	}
}
 //团购首页js效果
if(bo.id=="zhuye"||bo.id=="tgsy" || bo.id=="G_tx"){
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
	var p_index=0,ptime2=null;
	if(bo.id=="tgsy"){
	  var sjkuan=55;
	  var sjtop=22;
   }else if(bo.id=="zhuye"|| bo.id=="G_tx"){
      var sjkuan=33;
      var sjtop=10;
   }
    p_sp_a.style.display="none";
	for(var m=0;m<p_sidebar_abj.length;m++){
		p_sidebar_abj[m].style.left=190+"px";
		p_sidebar_abj[m].style.height=sjkuan+"px";
		p_sidebar_abj[m].Ptime=null;
		p_sidebar_abj[m].style.top=sjkuan*m+"px";
		p_sidebar_abj[m].pLe=190;
	}
	for( var i=0;i<P_a_back.length;i++){
		P_a_back[i].index=i;
		P_a_back[i].onmouseover=function(){
			for(j=0;j<P_a_back.length;j++){	
				P_a_back[j].className="";
			}
			P_a_back[this.index].className="_p_dqli";
			p_sp_a.style.display="block";
			p_sp_a.className="sp_a";
			p_sp_a.style.top=(this.index)*sjkuan+sjtop+"px";
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
    
	// 背景移入移出
   p_sp_a.onmouseover=function(){
		p_sp_a.style.display="block";
	    p_sp_a.className="sp_a";
		var m=(parseInt(p_sp_a.style.top)-sjtop)/parseInt(sjkuan);
	        pfn(m,-2,1);
			ppfn(m,1)
		P_a_back[m].className="_p_dqli";
	}
	p_sp_a.onmouseout=function(){
		p_sp_a.className="sp_a sp_a_1";
		var m=(parseInt(p_sp_a.style.top)-sjtop)/parseInt(sjkuan);
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
	var p_ptupian=document.getElementById("ptupian");
	var poFix=document.getElementById("p_cebianlan");
	var p_sidebar_r_img1=document.getElementById("sidebar_r_img1");
	var p_sidebar_r_img2=document.getElementById("sidebar_r_img2");
	var p_p_bigbanner=document.getElementById("p_bigbanner");
	var tpdz=["../image/shouye_lbt1.jpg","../image/shouye_lbt2.jpg","../image/shouye_lbt3.jpg","../image/shouye_qbt1.jpg","../image/shouye_qbt2.jpg","../image/shouye_qbt3.jpg",
	"../image/shouye_qbt4.jpg","../image/shouye_qbt5.jpg","../image/shouye_qbt6.jpg","../image/shouye_qbt7.jpg","../image/shouye_qbt8.jpg","../image/shouye_qbt9.jpg","../image/shouye_qbt10.jpg","../image/shouye_qbt11.jpg"];
	var _sidebar_r_img=["../image/sy_sider_r1.png","../image/sy_sider_r2.png","../image/sy_sider_r3.png","../image/sy_sider_r4.png"];
	var bjdz=["#daf898","#fff1e4","#52cb7e","#ffd801","#e9eee8","#f8bcc8","#ffe401","#95e3bb","#66759e","#cce6dd","#ffb9c4","#f5f5f5","#d6c2dd","#adfbfd"];	
	var mmm=NaN,p_time2=null;
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
	window.onscroll=function(){
			var oToP = document.body.scrollTop||document.documentElement.scrollTop;
			if(oToP>1460){
				poFix.style.display="block";
			
			}else{
				poFix.style.display="none";
			}
		}
	}
	if(bo.id=="zhuye"){
	var p_cebianlan=document.getElementById("p_cebianlan").getElementsByTagName("p");
	var p_cebianlantu=document.getElementById("p_cebianlantu").getElementsByTagName("li");;
	for(var k=0; k<p_cebianlantu.length; k++){
		  p_cebianlantu[k].index=k;
		p_cebianlantu[k].onmouseover=function(){
			for(var j=0; j<p_cebianlan.length; j++){
				p_cebianlan[j].style.backgroundColor="#bbbbbb";
			}
			   p_cebianlan[this.index].style.backgroundColor="#b70000";
		}
	  }
	}


		 if(bo.id=="dzgl"){
		    	var Z_dzglxz=document.getElementById("z_dzglxz");
		    	var Z_zhe=document.getElementById("z_zhezhao111");
		    	var Z_rshdzsz=document.getElementById("z_rshdzsz");
		    	var Z_grzhezhao=document.getElementById("z_grzhezhao");
		    	Z_dzglxz.onclick=function (){
		              Z_grzhezhao.style.display="block";
		    	};
		    	Z_zhe.onclick=function(){
		    		Z_grzhezhao.style.display="none";
		    	};
		    	Z_rshdzsz.onclick=function(){
		    		Z_grzhezhao.style.display="none";
		    	};
		    }
    //头像编辑
    if(bo.id=="G_bjtx"){
        var z_szt=document.getElementById("z_sheztxwzd");
        var G_t_sud=document.getElementById("G_t_succeed"); 
		var y_lbig=document.getElementById("y_lbig");
		var y_lmid=document.getElementById("y_lmid");
		var y_lsml=document.getElementById("y_lsml");
		var y_tx_ul=document.getElementById("y_tx_ul");
		var y_rout=y_tx_ul.getElementsByTagName("div");
		var y_rimg=y_tx_ul.getElementsByTagName("img");
		var y_ltx=document.getElementsByClassName("y_tx")[0];
		size(4.76,4.76);
		z_szt.onclick=function(){
			G_t_sud.style.display="block"
		}
		y_lsml.onmousedown=function(event){
			var event =window.event||event;
			event.stopPropagation();
			event.cancleBubble=true;
			var startX=event.clientX-y_lsml.clientWidth-y_lmid.clientWidth-y_lsml.offsetLeft;
			var startY=event.clientY-y_lsml.clientHeight-y_lmid.clientHeight-y_lsml.offsetTop;
			var sW=y_lmid.offsetWidth;
			var sH=y_lmid.offsetHeight;
			window.onmousemove=function(event){
				var event =window.event||event;
				var endX=event.clientX-startX;
				var endY=event.clientY-startY;
				y_lmid.style.width=endX-sW+"px";
				y_lmid.style.height=endY-sH+"px";
			}
		}
		y_lsml.onmouseup=function(){
			window.onmousemove=null;
			var NumX=232/y_lmid.offsetWidth;
			var NumY=232/y_lmid.offsetHeight;
			size(NumX,NumY);
		}
		function size(x,y){
			console.log(x,y_rout[1].clientWidth)
			for(var i=0;i<4;i++){
				y_rimg[i].style.width=x*y_rout[i].clientWidth+"px";
				y_rimg[i].style.height=y*y_rout[i].clientHeight+"px";
			}
		}
		y_lbig.onmouseover=function(){
			y_lmid.style.display="block";
		}
		y_lbig.onmouseout=function(){
			y_lmid.style.display="none";
		}
		y_lmid.onmousedown=function(event){
			var event=window.event||event;
			var maxW=y_lbig.clientWidth-y_lmid.clientWidth;
			var maxH=y_lbig.clientHeight-y_lmid.clientHeight;
			var propX0=y_rimg[0].clientWidth/y_lbig.clientWidth;
			var propY0=y_rimg[0].clientHeight/y_lbig.clientHeight;
			var propX1=y_rimg[1].clientWidth/y_lbig.clientWidth;
			var propY1=y_rimg[1].clientHeight/y_lbig.clientHeight;
			var propX2=y_rimg[2].clientWidth/y_lbig.clientWidth;
			var propY2=y_rimg[2].clientHeight/y_lbig.clientHeight;
			var propX3=y_rimg[3].clientWidth/y_lbig.clientWidth;
			var propY3=y_rimg[3].clientHeight/y_lbig.clientHeight;
			var y_lmid_W=y_lmid.clientWidth/2+471+17;
			var y_lmid_H=y_lmid.clientHeight/2+283+120-bo.scrollTop;
			window.onmousemove=function(event){
				var event=window.event||event;
				var nowX=event.clientX-y_lmid_W;
				var nowY=event.clientY-y_lmid_H;
				if(nowX<0){
					nowX=0;
				}
				if(nowX>maxW){
					nowX=maxW;
				}
				if(nowY<0){
					nowY=0;
				}
				if(nowY>maxH){
					nowY=maxH;
				}
				y_lmid.style.left=nowX+"px";
				y_lmid.style.top=nowY+"px";
				y_rimg[0].style.left=-(nowX*propX0)+"px";
				y_rimg[0].style.top=-(nowY*propY0)+"px";
				y_rimg[1].style.left=-(nowX*propX1)+"px";
				y_rimg[1].style.top=-(nowY*propY1)+"px";
				y_rimg[2].style.left=-(nowX*propX2)+"px";
				y_rimg[2].style.top=-(nowY*propY2)+"px";
				y_rimg[3].style.left=-(nowX*propX3)+"px";
				y_rimg[3].style.top=-(nowY*propY3)+"px";
			}
		}
		y_lmid.onmouseup=function(){
				window.onmousemove=null;
			}
		var y_gb=document.getElementById("y_tx_gb");
		y_gb.onclick=function(){
			 G_t_sud.style.display="none";
		}
    }
	

	//商品类表的js
	if(bo.id=="G_tx"){
		var G_gwc=document.getElementById("G_gwc");
		var G_gw=document.getElementById("G_gw");
		var G_Li_jf=document.getElementById("G_li_jf");
		var G_Li_xf=document.getElementById("G_li_xf");
		var G_Li_gz=document.getElementById("G_li_gz");
		var G_Table1=document.getElementById("G_table1");
		var G_Table2=document.getElementById("G_table2");
		var G_Table3=document.getElementById("G_table3");
		var G_Text=document.getElementById("G_text");
		var G_Arise=document.getElementById("G_ arise");
		var G_Cld=document.getElementById("G_cld");
		var G_Button=document.getElementsByClassName("G_y_1");
		var G_Continue=document.getElementById("G_Continue");
		var G_succeed=document.getElementById("G_succeed");
		var G_dd=document.getElementsByClassName("G_s");
		var G_X=document.getElementsByClassName("G_x");
		var G_Nm=document.getElementsByClassName("G_Nm");
		var G_Img=document.getElementById("G_Screening").getElementsByTagName("img");
		var G_IMG=document.getElementById("G_m").getElementsByTagName("img");
		var G_Ipt=document.getElementById("G_m").getElementsByTagName("input");

        // 购物车的显示与消除
           var G_flag=0;
           G_gw.onclick=function(){
           	if(G_flag==0){
           	  G_gwc.style.display="block";
           	  G_flag=1;	
           	}else if(G_flag==1){
           
           	  G_gwc.style.display="none";
           	  G_flag=0;	
           	}
           }

		//改变品牌里的图片
		for(var i=0;i<G_Img.length;i++){
			G_Img[i].onclick=function(){
				this.src="../image/G_sp09.jpg";
				G_Img[0].src="../image/G_sp08.jpg";
			}
		}


		//改变筛选里的图片
		for(var i=0;i<G_IMG.length;i++){
			G_IMG[i].onclick=function(){
				this.src="../image/G_sp09.jpg";
			}
		}


		//改变筛选里的按钮
		for(var i=0;i<G_Ipt.length;i++){
			G_Ipt[i].onclick=function(){
				this.style.background="url(../image/icons.png) no-repeat -457px -134px";
				G_Ipt[0].style.background="url(../image/icons.png) no-repeat -457px -203px";
			}
		}


		//加入购物车成功
		for(var i=0;i<G_Button.length;i++){
			G_Button[i].onclick=function(){
				G_succeed.style.display="block";
			}
		}


		//改变物品的个数
		for (var i = 0; i<G_dd.length; i++){
			G_dd[i].index = i;
			G_X[i].index = i;
			G_dd[i].onclick = function(){
				G_Nm[this.index].innerHTML = Number(G_Nm[this.index].innerHTML)+1;
				if(G_Nm[this.index].innerHTML>=1){
					G_X[this.index].style.background="url(../image/G_sp19x.jpg)";
				}
			}
			G_X[i].onclick = function(){
				G_Nm[this.index].innerHTML = Number(G_Nm[this.index].innerHTML)-1;
				if(G_Nm[this.index].innerHTML<=1){
					G_Nm[this.index].innerHTML=1;
					G_X[this.index].style.background="url(../image/G_sp19.jpg)";
				}
			}
		}
		//点击继续购物的效果
		G_Continue.onclick=function(){
			G_succeed.style.display="none";
			for(var i=0;i<G_S.length;i++){
				G_Nm[i].innerHTML="0";
			}
		}
	}

//头部下拉菜单效果
	// var y_zk=document.getElementById("z_zk")
	// var y_sy_zk=document.getElementById("z_zk").getElementsByTagName("li");
	// var  y_sy_sj=document.getElementById("z_neiwen").getElementsByClassName("z_sy_a1");
	//console.log(y_sy_zk);
	// for(var k=0;k<4;k++){
	// 	y_sy_sj[k].index=k;
	// 	y_sy_sj[k].onmouseover=function(){
	// 		for(var i=0;i<4;i++){
	// 			y_sy_zk[i].style.display="none";
	// 			y_sy_zk[this.index].style.display="block";
	// 		}
	// 	}
	// 	y_sy_zk[k].onmouseout=function(e){
			//y_sy_sj[k].onmouseover = null;
// 			for(var i=0;i<4;i++){
// 				y_sy_zk[i].style.display="none";
// 			}
// 		}

// }
	// 文章列表的js效果

//以下为我的订单的js
  if(bo.id=="woddd"){
  	var p_woddd_sr=document.getElementById("p_woddd_sr");
  	     p_woddd_sr.style.color="#ccc";
  	     p_woddd_sr.onfocus=function(){
  	     	p_woddd_sr.value="";
  	     }
  }
	// 文章列表的js效果
    //tab 切换
 if(bo.id=="aaa" || bo.id=="grxx" || bo.id=="zcphone" || bo.id=="yhj" || bo.id=="tgsy" || bo.id=="jf"){	
		var oRadio1=document.getElementsByClassName("G_li_anniu");
		var oRad=document.getElementsByClassName("G_table_huan"); 
		z_qiehuan()
		function z_qiehuan(){
		    for(var q=0;q<oRadio1.length;q++){
		    	oRadio1[q].index=q;
		    	oRadio1[q].onclick=function () {
		            if(bo.id=="aaa"){
		        	   aaa_tab(this.index);
		              }
		            if(bo.id=="grxx"){
		            	sss_tab(this.index);
		            }
		            if(bo.id=="zcphone"){
		            zcphone_tab(this.index);
		            }
		            if(bo.id=="yhj"){
		            	yhj_tab(this.index);
		            }
		            if(bo.id=="jf"){
		            	jf_tab(this.index);
		            }
		    	}
		    }
		 }
         function jf_tab(b){
           for(var p=0;p<oRad.length;p++){
		      oRad[p].style.display="none";
		      oRadio1[p].className="G_li_anniu";
		      }
		      if(b==0){
               oRadio1[b].className="G_li1 G_li_anniu";
		      }else{
		      	oRadio1[b].className="G_li2 G_li_anniu";
		      }
		     oRad[b].style.display="block";
         }
		 function zcphone_tab(b){
		var p_ztabtu=document.getElementById("p_zcphone_bian");
		 	 for(var p=0;p<oRad.length;p++){
		      oRad[p].style.display="none";
		      }
           oRad[b].style.display="block";
           if(b=="0"){
            p_ztabtu.style.left=0+"px";
           }else{
           	 p_ztabtu.style.left=268+"px";
           }
		 }
		 function yhj_tab(b){
		 	 for(var p=0;p<oRad.length;p++){
		       oRad[p].style.display="none";
		       oRadio1[p].className="G_Q G_li_anniu";
		      }
              oRad[b].style.display="block";
               if(b>0){
                 oRadio1[b].className="G_Y G_li_anniu";	
               }else{
               	 oRadio1[b].className="G_W G_li_anniu";
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
		if(bo.id=="tgsy"){
				var y_tgsy_tab=document.getElementsByClassName("y_tgsy_tab_li");
				var y_tgsy_fenlei_ul=document.getElementById("y_tgsy_fenlei").getElementsByTagName("ul");
				var y_tgsy_cnt=document.getElementsByClassName("y_tgsy_content_cnt");
				var y_tgsy_a=0;
				y_tgsy_tab[0].style.background="url(../image/tgsy_check2.png)";
				y_tgsy_tab[0].style.color="#c53232";
				y_tgsy_tab[0].style.display="block";
				y_tgsy_cnt[0].style.display="block"
				for(var i=0;i<y_tgsy_tab.length;i++){
					y_tgsy_tab[i].index=i;
					y_tgsy_tab[i].onclick=function(){
						y_tgsy_zk.src="../image/tgsy_sanjiao2.png";
						flag2=true;
						for(var j=0;j<y_tgsy_tab.length;j++){
							y_tgsy_fenlei_ul[j].className="y_tgsy_feilei_ul";
							y_tgsy_tab[j].style.background="url(../image/tgsy_check1.png)";
							y_tgsy_tab[j].style.color="#b4b4b4";
							y_tgsy_fenlei_ul[j].style.display="none";
							y_tgsy_cnt[j].style.display="none"
							this.style.background="url(../image/tgsy_check2.png)";
							this.style.color="#c53232";
							y_tgsy_fenlei_ul[this.index].style.display="block";
							y_tgsy_cnt[this.index].style.display="block"
							y_tgsy_a=this.index;
						}
					}
				}
				var y_tgsy_zk=document.getElementById("y_tgsy_zk");
				var flag2=true;
					y_tgsy_zk.onclick=function(){
						if(flag2==true){
							y_tgsy_fenlei_ul[y_tgsy_a].className="";
							y_tgsy_zk.src="../image/tgsy_sanjiao.png"
							flag2=false;
						}else if(flag2==false){
							y_tgsy_fenlei_ul[y_tgsy_a].className="y_tgsy_feilei_ul";
							y_tgsy_zk.src="../image/tgsy_sanjiao2.png"
							flag2=true;
					}
				}
				
				var y_tgsy_cnt_li_up=document.getElementsByClassName("y_tgsy_cnt_li_up");
				var y_tgsy_cnt_li_dz=document.getElementsByClassName("y_tgsy_cnt_li_dz");
				var  y_tg_bd=document.getElementById("y_tgsy_bd").getElementsByTagName('li');
				for(var f=0;f<y_tg_bd.length;f++){
					y_tg_bd[f].index=f;
					y_tg_bd[f].className="";
					y_tg_bd[f].onmouseover=function(){
						for(var i=0;i<y_tg_bd.length;i++){
							y_tg_bd[i].className="";
							y_tgsy_cnt_li_dz[i].style.display="none"
						}
						y_tg_bd[this.index].className="y_tgsy_cnt_li";
						y_tgsy_cnt_li_dz[this.index].style.display="block"
					}
				}
			}
		 }
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
  // 账户登录页面
  if(bo.id=="dl"){
  	var d_Icon = document.getElementById('d_dicon').getElementsByTagName('i');
	var d_Dyy = document.getElementById('d_dyy');
	var d_flag =0;
	var d_Dms = document.getElementById('d_dmouse');
	function dl_dipt(){
		if (d_flag==0) {
			d_Dyy.style.opacity = 0.5;
		}
		else if(d_flag==1){
			d_Dyy.style.opacity = 1;
		}
		d_flag = !d_flag;
	}
	setInterval(dl_dipt,1000);
	for (var i = 0; i < d_Icon.length; i++) {
		d_Icon[i].index = i;
		d_Icon[i].onmouseover = function(){
			for (var j = 0; j < d_Icon.length; j++) {
				d_Icon[j].className = 'd_di'+(j+1);
			};
			d_Icon[this.index].className = 'd_di1'+(this.index+1);
			d_Dms.style.display = 'block';
		}
	};
  }
 // 账户余额
	if(bo.id=="zhye"){
         var d_zhye_oSpa = document.getElementById('d_zhye_rt').getElementsByTagName('span');
	     var d_zhye_oDiv = document.getElementById('d_zhye_ctt').children;
		console.log(d_zhye_oDiv);
		for (var i = 0; i < d_zhye_oSpa.length; i++) {
			d_zhye_oSpa[i].index = i;
			d_zhye_oSpa[i].onclick = function(){
				for (var j = 0; j < d_zhye_oSpa.length; j++) {
					d_zhye_oSpa[j].className = "";
					d_zhye_oDiv[j].style.display="none";
				}
				this.className = "d_zhye_mspa";
				d_zhye_oDiv[this.index].style.display ="block";
			}
		};
	}
   if(bo.id=="spxq"){
   	//商品详情页
		var D_spxq_ys = document.getElementById('d_spxq_ys').getElementsByTagName('li');
		for (var i = 0; i < D_spxq_ys.length; i++) {
			D_spxq_ys[i].index = i;
			D_spxq_ys[i].onmouseover = function(){
				for (var j = 0; j < D_spxq_ys.length; j++) {
					D_spxq_ys[j].className='';
					if (j==5) {
						D_spxq_ys[j].className='d_li';
					}
				}
				if (this.index==5) {
					this.className='d_mswli';
				}
				else{
					this.className = 'd_spxq_msli';
				}
				var event = event||window.event;
				var D_spxq_mpstx = event.clientX;
				var D_spxq_mpsty = event.clientY;
				var D_spxq_cns = document.getElementById('d_spxq_cns');
				D_spxq_cns.style.Left = D_spxq_mpstx+'px';
				D_spxq_cns.style.Top = (D_spxq_mpsty-30)+'px';
				D_spxq_cns.style.display = 'block';
				
			}
		}
		var D_spxq_cm = document.getElementById('d_spxq_cm').getElementsByTagName('li');
		for (var k = 0; k < D_spxq_cm.length; k++) {
			D_spxq_cm[k].index = k;
			D_spxq_cm[k].onmouseover = function(){
				for (var j = 0; j < D_spxq_cm.length; j++) {
					D_spxq_cm[j].className='';
				}

				this.className = 'd_spxq_mscm';
			}
		}
		var D_spxq_txt_tp = document.getElementById('d_txt_tp');
		var D_spxq_txt_bt = document.getElementById('d_txt_bt');
		D_spxq_txt_tp.onclick = function(){

			var D_spxq_sl = document.getElementById('d_spxq_sl');
			var D_i =Number(D_spxq_sl.value);
			D_spxq_sl.value =D_i+1;
		}
		D_spxq_txt_bt.onclick = function(){
			var D_spxq_sl = document.getElementById('d_spxq_sl');
			var D_i =Number(D_spxq_sl.value);
			if (D_i>1) {
				D_spxq_sl.value =D_i-1;
			}
		}
		var D_gwc = document.getElementById('d_gwc');
		D_gwc.onclick = function(){
			if (d_spxq_sl.innerHTML!=0) {
				alert("商品已经在购物车等您喽！");
			};
			d_spxq_sl.innerHTML = 1;
			
		} 
		var D_spxq_sc = document.getElementById('d_sc');
		var D_spxq_tsc = document.getElementsByClassName('d_spxq_tsc');
		var time;
		D_spxq_sc.onclick = function(){
			D_spxq_tsc[0].style.display = 'block';
			time = setTimeout(function(){
				D_spxq_tsc[0].style.display='none';
			},1000);
		}

		var D_spxq_manz = document.getElementById('d_spxq_manz').getElementsByTagName('li');
		var D_spxq_sj = document.getElementsByClassName('d_sj');
		for (var a = 0; a < D_spxq_manz.length;a++) {
			D_spxq_manz[a].index = a;
			D_spxq_manz[a].onmouseover = function(){
				for (var i = 0; i < D_spxq_manz.length; i++) {
					D_spxq_manz[i].style.background = '';
					D_spxq_manz[i].style.color='';
					D_spxq_sj[i].style.display='none';
				}
				this.style.background = '#ce1018';
				this.style.color='white';
				D_spxq_sj[this.index].style.display="block";
			}
		}
// //人气组合
	var D_spxq_rq_tp = document.getElementById('d_rqzh_tp').getElementsByTagName('span');
	var D_spxq_rq_bt = document.getElementsByClassName('d_rqzh_bt');
		for (var b = 1; b < D_spxq_rq_tp.length-1; b++) {
			D_spxq_rq_tp[b].index = b;
			D_spxq_rq_tp[b].onmouseover = function(){
				for (var i = 1; i < D_spxq_rq_tp.length-1; i++) {
					D_spxq_rq_tp[i].className='';
					D_spxq_rq_bt[i-1].style.display = 'none';
				}
				this.className = 'd_rqzh_tpms';
				D_spxq_rq_bt[this.index-1].style.display ='block';
		}
	}
	var D_spxx_tp = document.getElementById('d_spxx_tp').getElementsByTagName('span');
	var D_spxx_bt = document.getElementsByClassName('d_spxx_bt');
		for (var c = 1; c < D_spxx_tp.length-1; c++) {
			D_spxx_tp[c].index = c;
			D_spxx_tp[c].onmouseover = function(){
				for (var i = 1; i < D_spxx_tp.length-1; i++) {
					D_spxx_tp[i].className='';
					D_spxx_bt[i-1].style.display = 'none';
				}
				this.className = 'd_rqzh_tpms';
			D_spxx_bt[this.index-1].style.display ='block';
		}
	}
	//有用
	var D_yy = document.getElementsByClassName('d_sppj_yy');
	var D_y_b = document.getElementsByClassName('d_spj_yy');
	for (var c = 0; c < D_yy.length; c++) {
		D_yy[c].index = c;
		D_yy[c].onclick = function(){
			D_y_b[this.index].innerHTML = Number(D_y_b[this.index].innerHTML)+1;
		}
	};
	//放大镜
	var D_fdj = document.getElementById('d_spxq_fdj');
	var D_imgb = document.getElementById('d_spxq_imgb');
	var D_img = document.getElementById('d_spxq_img');
	var D_btn = document.getElementById('d_spxq_midd').getElementsByTagName('li');
	console.log
	D_img.onmouseover = function(){
		D_fdj.style.display = 'block';
		D_imgb.style.display = 'block';
		var D_maxWidth = D_img.clientWidth- D_fdj.offsetWidth;
		var D_maxHeight = D_img.clientHeight - D_fdj.offsetHeight;
		var Num = 450/225;
		var D_spxq_ctt = document.getElementById('d_spxq_ctt');
		document.onmousemove = function(){
			var event = event || window.event;
			var fdX = event.clientX - D_fdj.offsetWidth/2-D_img.offsetLeft-D_spxq_ctt.offsetLeft;
			var fdY = event.clientY - D_fdj.offsetHeight/2-100;
			if (fdY<0) {
				fdY = 0;
			}
			if (fdY>D_maxHeight) {
				fdY = D_maxHeight;
			}
			if (fdX<0) {
				fdX = 0;
			}
			if (fdX>D_maxWidth) {
				fdX = D_maxWidth;
			}
			D_fdj.style.top = fdY+'px';
			D_fdj.style.left = fdX+'px';
			D_imgb.scrollLeft = fdX*Num;
			D_imgb.scrollTop = fdY*Num;
		}
	}
	D_img.onmouseout = function(){
		document.onmousemove = null;
		D_fdj.style.display = 'none';
		D_imgb.style.display = 'none';
	}
	for (var d = 0; d < D_btn.length; d++) {
		D_btn[d].index = d;
		D_btn[d].onclick = function(){
			for (var i = 0; i <D_btn.length; i++) {
				D_btn[i].className='';
			}
		D_btn[this.index].className = 'd_ykli';
		}
	}
   } 
   if(bo.id=="zhaq2"){
		var D_zhaq_spa = document.getElementById('d_sctt').children;
		var D_zhaq_div = document.getElementById('d_bddiv').children;
		for (var e = 0; e < D_zhaq_spa.length-1; e++) {
			D_zhaq_spa[e].index = e;
			D_zhaq_spa[e].onmousemove = function(){
				for (var i = 0; i < D_zhaq_spa.length-1; i++) {
					D_zhaq_spa[0].className='d_sdls';
					D_zhaq_spa[1].className='d_sphones';
					D_zhaq_spa[2].className='d_semails';
					D_zhaq_spa[3].className='d_szhifs';
					D_zhaq_spa[i].children.className ='';
					D_zhaq_div[i].style.display = 'none';
				}
				D_zhaq_spa[this.index].className='d_sdls1';
				D_zhaq_spa[this.index].children.className = 'd_i';
				D_zhaq_div[this.index].style.display = 'block';
			}
		var D_changph = document.getElementById('d_changph');
		var D_bdphone = document.getElementById('d_sphone');
		var D_sphone_head_spa = document.getElementById('d_sphone_head').getElementsByTagName('span');
		var D_sphone_yz = document.getElementById('d_sphone').children;
		var D_schange = document.getElementsByClassName('d_schange');

		D_changph.onclick = function(){
			D_schange[0].style.display = 'none';
			D_bdphone.style.display = 'block';
			D_sphone_head_spa[0].style.background="url(../image/zhaq_phonebd1_2.jpg) no-repeat";
			D_sphone_head_spa[0].style.color="white";
			D_sphone_yz[1].style.display = 'block';
		}
		};
		var D_sphone_tj1 = document.getElementById('d_sphone_tj1');
		D_sphone_tj1.onclick = function(){
			D_sphone_head_spa[0].style.background = 'url(../image/zhaq_phonebd1.jpg) no-repeat';
			D_sphone_head_spa[1].style.background = 'url(../image/zhaq_phonebd2_2.jpg) no-repeat';
			D_sphone_head_spa[0].style.color="#a4a4a4";
			D_sphone_head_spa[1].style.color="white";
			D_sphone_yz[1].style.display = 'none';
			D_sphone_yz[2].style.display = 'block';
		}
		var D_sphone_tj2 = document.getElementById('d_sphone_tj2');
		D_sphone_tj2.onclick = function(){
			D_sphone_head_spa[1].style.background = 'url(../image/zhaq_phonebd1.jpg) no-repeat';
			D_sphone_head_spa[2].style.background = 'url(../image/zhaq_phonebd3_2.jpg) no-repeat';
			D_sphone_head_spa[1].style.color="#a4a4a4";
			D_sphone_head_spa[2].style.color="white";
			D_sphone_yz[2].style.display = 'none';
			D_sphone_yz[3].style.display = 'block';
		}
		var D_sphone_head_spa1 = document.getElementById('d_sphone_head1').getElementsByTagName('span');
		var D_sphone_yz1 = document.getElementById('d_sphone1').children;
		var D_syx_tj1 = document.getElementById('d_syx_tj1');
		D_syx_tj1.onclick = function(){
			D_sphone_head_spa1[0].style.background = 'url(../image/zhaq_phonebd1.jpg) no-repeat';
			D_sphone_head_spa1[1].style.background = 'url(../image/zhaq_phonebd2_2.jpg) no-repeat';
			D_sphone_head_spa1[0].style.color="#a4a4a4";
			D_sphone_head_spa1[1].style.color="white";
			D_sphone_yz1[1].style.display = 'none';
			D_sphone_yz1[2].style.display = 'block';
		}
		var D_syx_tj2 = document.getElementById('d_syx_tj2');
		D_syx_tj2.onclick = function(){
			D_sphone_head_spa1[1].style.background = 'url(../image/zhaq_phonebd2.jpg) no-repeat';
			D_sphone_head_spa1[2].style.background = 'url(../image/zhaq_phonebd3_2.jpg) no-repeat';
			D_sphone_head_spa1[1].style.color="#a4a4a4";
			D_sphone_head_spa1[2].style.color="white";
			D_sphone_yz1[2].style.display = 'none';
			D_sphone_yz1[3].style.display = 'block';
		}
		var D_zf_spa = document.getElementById('d_szf1').children;
		var D_szhi_bd1 = document.getElementById('d_szhi_bd1');
		var D_zhix_xg = document.getElementById('d_szhif_xg_sf');
		var D_szhif_sz = document.getElementById('d_szhif_sz');
		var D_szhif_spa = document.getElementById('d_szhif_spa').getElementsByTagName('span');
		D_szhi_bd1.onclick = function(){
			D_zhix_xg.style.display = 'block';
			D_szhif_sz.style.display = 'none';
			D_szhif_spa[0].style.background = 'url(../image/zhaq_xgzfsf1_2.png)';
			D_szhif_spa[0].style.color = 'white';

		}
		var D_hqyzm = document.getElementById('d_hqyzm');
		var D_bcxg1 = document.getElementById('d_bcxg1');
		var D_bcxg2 = document.getElementById('d_bcxg2');
		var D_szhif_sfyz = document.getElementById('d_szhif_sfyz');
		var D_szhif_mm1 = document.getElementById('d_szhif_mm1');
		var D_szhif_mm2 = document.getElementById('d_szhif_mm2');
		D_hqyzm.onclick = function(){
			D_szhif_spa[0].style.background = 'url(../image/zhaq_xgzfsf1.png)';
			D_szhif_spa[0].style.color = '#393939';
			D_szhif_spa[1].style.background = 'url(../image/zhaq_xgzfmm1_2.png)';
			D_szhif_spa[1].style.color = 'white';
			D_szhif_sfyz.style.display = 'none';
			D_szhif_mm1.style.display = 'block';
		}
		D_bcxg1.onclick = function(){
			D_szhif_mm1.style.display = 'none';
			D_szhif_mm2.style.display = 'block';
		}
		var D_szhif_zh_d = document.getElementById('d_szhif_zh_d');
		var D_szhif_xg_d = document.getElementById('d_szhf_xg_d')
		D_bcxg2.onclick = function(){
			D_szhif_mm2.style.display = 'none';
			D_zhix_xg.style.display = 'none';
			D_zf_spa[1].className = 'd_szhif_xg';
			D_zf_spa[0].className = 'd_szhif_zh';
			D_szhif_zh_d.style.display = 'block';
			D_szhif_xg_d.style.display = 'none';
		}
	 }

    //日历
    if (bo.id=="jf"||bo.id=="zhye") {
    if(bo.id=="jf"){
				var G_Text=document.getElementById("G_text");
				var G_Arise=document.getElementById("G_ arise");
				var G_Cld=document.getElementById("G_cld");
				var G_jfriguan=document.getElementById("G_jfriguan");
				G_Text.onclick=function(){
					G_Cld.style.display="none";
					G_Cld.style.top=380+"px";
					G_Cld.style.left=450+"px";
					G_Cld.style.display="block";
				}

				G_Arise.onclick=function(){
					G_Cld.style.display="none";
				    G_Cld.style.top=380+"px";
					G_Cld.style.left=660+"px";
					G_Cld.style.display="block";
				}
				G_jfriguan.onclick=function(){
				    G_Cld.style.display="none"; 
				}
				tili()
			}
	if(bo.id=="zhye"){
		        var G_Text=document.getElementById("G_text");
				var G_Arise=document.getElementById("G_ arise");
				var G_Cld=document.getElementById("G_cld");
				var G_jfriguan=document.getElementById("G_jfriguan");
				G_Text.onclick=function(){
					G_Cld.style.display="none";
					G_Cld.style.top=386+"px";
					G_Cld.style.right=306+"px";
					G_Cld.style.display="block";
				}

				G_Arise.onclick=function(){
					G_Cld.style.display="none";
				    G_Cld.style.top=386+"px";
					G_Cld.style.right=100+"px";
					G_Cld.style.display="block";
				}
				G_jfriguan.onclick=function(){
				    G_Cld.style.display="none"; 
				}
		       tili()
	} 
      function tili(){
      		var	G_jfrloSpan5=document.getElementById("G_jfrlspan5");
				var G_jfrloSpan4=document.getElementById("G_jfrlspan4");
				var G_jfrloSelect1=document.getElementById("G_jfrlselect1");
				var G_jfrloSelect2=document.getElementById("G_jfrlselect2");
				var G_jfrloSelect3=document.getElementById("G_jfrlselect3");
				var G_jfrloUl=document.getElementById("G_jfrlul1");
				var G_jfrltxt=document.getElementById('G_jfrltext');
				var G_jfrlxzrq=document.getElementById("G_jfrlxzrq");
				var G_jfrlxzrqk=document.getElementById("G_jfrlxzrqk");
				var G_jfrlnowyear,G_jfrlnowmonth,G_jfrlnowday,G_jfrloLi,G_jfrldays;
				var G_jfrlpan=1;
					G_jfrlnowmonth=parseInt(G_jfrloSelect2.value);
					G_jfrlnowyear=parseInt(G_jfrloSelect1.value);
				var G_jfrloSpan1=document.getElementById("G_jfrlspan1");
				var G_jfrloSpan2=document.getElementById("G_jfrlspan2");
				var G_jfrloSpan3=document.getElementById("G_jfrlspan3");
				for(var i=1870;i<2050;i++){
					G_jfrloSelect1.innerHTML+="<option>"+i+"年</option>";
				}
				for(var j=1;j<13;j++){
					G_jfrloSelect2.innerHTML+="<option>"+j+"月</option>";
				}
				var G_jfrltim=new Date().getMonth();
				var G_jfrltim4=new Date().getFullYear();
				var G_jfrltim1=new Date(G_jfrltim4,G_jfrltim,0);
				var G_jfrltim2=G_jfrltim1.getDate();
				for(var g=1; g<=G_jfrltim2;g++){
					G_jfrloSelect3.innerHTML+="<option>"+g+"日</option>";	
				}  

				G_jfrloSelect1.onchange=function(){
					G_jfrlnowday=parseInt(G_jfrloSelect3.value);
					G_jfrlnowmonth=parseInt(G_jfrloSelect2.value);
					G_jfrlnowyear=parseInt(G_jfrloSelect1.value);
					setYear(G_jfrlnowyear,G_jfrlnowmonth);
					dxNY(G_jfrlnowyear,G_jfrlnowmonth);
					movecolor(G_jfrlnowday);
				}
				G_jfrloSelect2.onchange=function(){
					G_jfrlnowday=parseInt(G_jfrloSelect3.value);
					G_jfrlnowmonth=parseInt(G_jfrloSelect2.value);
					G_jfrlnowyear=parseInt(G_jfrloSelect1.value);
					setMonth(G_jfrlnowyear,G_jfrlnowmonth);
					dxNY(G_jfrlnowyear,G_jfrlnowmonth);
					movecolor(G_jfrlnowday);
				}
				G_jfrloSelect3.onchange=function(){
					G_jfrlnowday=parseInt(G_jfrloSelect3.value);
					G_jfrlnowmonth=parseInt(G_jfrloSelect2.value);
					G_jfrlnowyear=parseInt(G_jfrloSelect1.value);
					setMonth(G_jfrlnowyear,G_jfrlnowmonth);
					dxNY(G_jfrlnowyear,G_jfrlnowmonth);
					movecolor(G_jfrlnowday);
				}
				G_jfrlxzrq.onclick=function(){
				if(G_jfrlpan==0){
					G_jfrlxzrqk.style.display="none";
					G_jfrlpan=1;
				}else{
					G_jfrlxzrqk.style.display="block";
					G_jfrlpan=0;
					}
				};

				function dxNY(y,m){
					var G_jfrla=["零","一","二","三","四","五","六","七","八","九"];
					var G_jfrlb=["十"];
					if(m-10>0){
					G_jfrltxt.value=G_jfrlb[0]+G_jfrla[m-10]+"月"+","+y+"年";
					}
					if(m==10){
					G_jfrltxt.value=G_jfrlb[0]+"月"+","+y+"年";
					}
					if(m<10){
					G_jfrltxt.value=G_jfrla[m]+"月"+","+y+"年";	
					}
				}
				function setYear(y,m){
				setDay(y,m);
				}
				function setMonth(y,m){
				setDay(y,m);
				}
				function setDay(year,month){
				G_jfrloUl.innerHTML="";
				var G_jfrltime1=new Date(year,month,0);
				var G_jfrltime2=G_jfrltime1.getDate();
				var G_jfrltime3=new Date(year,month-1,1);
				var G_jfrltime4=G_jfrltime3.getDay();
				G_jfrldays=G_jfrltime2;
				for(var i=0;i<42;i++){
					G_jfrloUl.innerHTML+="<li></li>";
					G_jfrloLi=G_jfrloUl.getElementsByTagName("li");
					G_jfrloLi[i].className="li";
				}
				for(var j=0;j<G_jfrltime4;j++){
					G_jfrloLi[j].innerHTML+="&nbsp";
				}
				for(var k=G_jfrltime4;k<(G_jfrltime2+G_jfrltime4);k++){
					G_jfrloLi[k].innerHTML+=k+1-G_jfrltime4;
				}
				}
				G_jfrloSpan1.onclick=function(){
					huanyue(1,-1,12,-1)
				}
				G_jfrloSpan2.onclick=function(){
					huanyue(12,1,1,1)
				}
				G_jfrloSpan4.onclick=function(){
					huanri(parseInt(G_jfrloSelect3.value),1,-1,G_jfrldays,-1);
					movecolor(G_jfrlnowday);
				}
				G_jfrloSpan5.onclick=function(){
					huanri(parseInt(G_jfrloSelect3.value),G_jfrldays,1,1,1);
					movecolor(G_jfrlnowday);
				}
				function huanri(e,a,b,c,d){
						if(e!=a){
							e=e-0+b;	
						}else{
							e=c;
							huanyue(1,b,12,b);
						}
					G_jfrloSelect3.value=e+"日";
					movecolor(e);

				}

				function huanyue(a,b,c,d){
				if(G_jfrlnowmonth!=a){
					G_jfrlnowmonth=G_jfrlnowmonth+b;
					G_jfrlnowyear=G_jfrlnowyear;
				}else{
					G_jfrlnowmonth=c;
					G_jfrlnowyear=G_jfrlnowyear+d;
				}
					G_jfrloSelect2.value=G_jfrlnowmonth+"月";
					G_jfrloSelect1.value=G_jfrlnowyear+"年";
					setMonth(G_jfrlnowyear,G_jfrlnowmonth);
					setYear(G_jfrlnowyear,G_jfrlnowmonth);
					dxNY(G_jfrlnowyear,G_jfrlnowmonth);
				}
				function movecolor(m){
				for(var k=0;k<=G_jfrloLi.length;k++){
					if(G_jfrloLi[k].innerHTML!=""){
						G_jfrloLi[k].style.background="";
					if(G_jfrloLi[k].innerHTML==m){
						G_jfrloLi[k].style.background="#7e7e7e";
							}	
						}
					}
				}
				function xuanri(){
					for(var h=1; h<G_jfrloLi.length; h++){
					if(G_jfrloLi[h].innerHTML!=""){

					G_jfrloLi[h].onclick=function(){

					G_jfrloSelect3.value=this.innerHTML+"日";
					movecolor(this.innerHTML);
							}
						}
					}
				}

				function today(){
				var G_jfrltodayYear=new Date().getFullYear();
				var G_jfrltodayMonth=new Date().getMonth();
				var G_jfrltodayDay=new Date().getDate();
				  G_jfrloUl.innerHTML="";
				var G_jfrloLi=G_jfrloUl.getElementsByTagName("li");
				G_jfrloSelect1.value=G_jfrltodayYear+"年";
				G_jfrloSelect2.value=G_jfrltodayMonth+1+"月";
				G_jfrloSelect3.value=G_jfrltodayDay+"日";
				G_jfrlnowmonth=G_jfrltodayMonth+1;
				G_jfrlnowyear=G_jfrltodayYear;
				setYear(G_jfrltodayYear,G_jfrltodayMonth+1);
				setMonth(G_jfrltodayYear,G_jfrltodayMonth+1);
				var G_jfrltime5=new Date(G_jfrltodayYear,G_jfrltodayMonth,1);
				var G_jfrltime6=G_jfrltime5.getDay();
				G_jfrloLi[G_jfrltime6+G_jfrltodayDay-1].style.background="#7e7e7e";
				G_jfrlnowday=G_jfrloLi[G_jfrltime6+G_jfrltodayDay-1].innerHTML;
				dxNY(G_jfrlnowyear,G_jfrlnowmonth);	
				}
				G_jfrloSpan3.onclick=function(){
				today();
				}
				today();
				xuanri();
          }
			

          };
        //注册页面验证码切换
        if(bo.id=="zcphone"){
			    var p_yanz=document.getElementById("yanz");
				var p_img_a=document.getElementById("img_a");
				var p_img_b=["../image/zhucephone.jpg","../image/zhucephone_yanzhengma.jpg","../image/zhucephone_yanzhengma_1.jpg"];
				var i=0;
				p_yanz.onclick=function(){
					i++;
					if(i==3){
						i=0;
					}
					p_img_a.src=p_img_b[i];
				}
				// 验证码点击事件
				var p_zc_true=document.getElementById("zc_true");
				var p_zc_true_1=document.getElementById("zc_true_1");
				var p_flag=0;
				var p_flag1=0;
				p_zc_true.onclick=function(){	
					if(p_flag==0){
						p_zc_true.src="../image/zhucephone_22.jpg";
						p_flag=1;
					}
					else if(p_flag==1){		
						p_zc_true.src="../image/zhucephone_23.jpg";
						p_flag=0;
					}
				}
				p_zc_true_1.onclick=function(){	
					if(p_flag1==0){
						p_zc_true_1.src="../image/zhucephone_22.jpg";
						p_flag1=1;
					}
					else if(p_flag1==1){		
						p_zc_true_1.src="../image/zhucephone_23.jpg";
						p_flag1=0;
					}
				}
				// // 同意协议按钮
				var p_zhucekaung = document.getElementById("zhucekaung");
				var p_inp = p_zhucekaung.getElementsByTagName("input");
				for(var m=0;m<p_inp.length;m++){
					p_inp[m].onclick=function(){
						this.value="";
					}
				}

				var p_youxiag = document.getElementById("youxiag");
				var p_knp = p_youxiag.getElementsByTagName("input");
				for(var k=0;k<p_knp.length;k++){
					p_knp[k].onkeydown=function(){
						this.value="";
					}
				}
        }

		}
			var bo=document.getElementsByTagName('body')[0];
				    var aaa=0;
				    function a (j){	
				    	bo.style.display="none";
				    	setTimeout(function(){
				    	bo.style.display="block";
				    	
				    },200);
				    	
				    	if(j<1){
				    		fff(j*10)
				    	}else {
				    		if(parseInt(j)==5){ 
				    		j=-1;
				    	    }
				    		aaa=aaa+j;
				    		if(aaa>=3){
							aaa=3;
							}
							if(aaa<=0){
								aaa=1
							}
				    		fff(aaa);
				    	}
				  }
			var y_wzlb_change=document.getElementsByClassName("y_wzlb_check");
			function fff(aaa){
				for(var b=1;b<y_wzlb_change.length-1;b++){
					
					    y_wzlb_change[b].className="y_wzlb_check y_wzlb_wd";
						
					 y_wzlb_change[aaa].className="y_wzlb_check y_wzlb_wd y_aaa";
						
					
				}
	}	    

	