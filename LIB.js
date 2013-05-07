/* Prototype */
	/* check value in array 2013. 04. 10 */
	Array.prototype.inArray = function(obj) { if(this==null) return false; for (var i = 0, length = this.length; i < length; i++) if (this[i] == obj) return true; return false; };

/* Function */
	/* Numberformat 2013. 04. 08 */
	function numberFormat(integer) { var str = integer + ""; var len = str.length-3; if(len < 1) return str; return numberFormat(str.substr(0,len)) + "," + str.substr(len); }

	/* get selected radio buntton value 2013. 04. 08 */
	function getRadioValue(name) { collection = document.getElementsByName(name); for(var i = 0; i < collection.length; i++) if(collection[i].checked) return collection[i].value; return false; }
	
	/* check selected radio buttons 2013. 04. 08 */
	function isRadioCheked(name) { collection = document.getElementsByName(name); for(var i = 0; i < collection.length; i++) if(collection[i].checked) return true; return false; }
	
	/* check email type 2013. 04. 12 */
	function isTypeEmail(txt) { return /^[-_0-9a-zA-Z]+@[-_0-9a-zA-Z]+(\.[a-zA-Z]+)+$/.test(txt); }
	
	/* check phone number type 2013. 04. 12 */
	function isTypePhone(txt) { return /^[+0-9][-0-9]+[0-9]$/.test(txt); }

	/* get value data by id 2013. 04. 30 */
	function getValueById(id) {var result=document.getElementById(id);if(result)result=result.value;return result;}
	
	/* get multi value data by name, radio, checkbox ... 2013. 05. 02 */
	function getValueByName(name){els=document.getElementsByName(name);if(!els.length) return false;var result="";for(var i=0;i<els.length;i++)if(((els[i].getAttribute('type')+'').toLowerCase()!='radio'&&(els[i].getAttribute('type')+'').toLowerCase()!='checkbox')||els[i].checked)result+=(result?",":"")+els[i].value;return result;}
	
	/* ajax call 2013. 04. 30 */
	var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	function callAjax(url,data,sync,func){xmlhttp.onreadystatechange=func;xmlhttp.open("POST",url,sync);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send(data);}
	
	/* get body full size 2013. 05. 02 */
	function getDocumentSize() {var w = document.createElement("div");w = document.body.appendChild(w);with(w.style){position="absolute";top="0px";left="0px";width="100%";height="100%";}return {'w':w.offsetWidth,'h':w.offsetHeight};}
	
	/* create popuplayer width background 2013. 05. 02 */
	function showPopupLayer(){var w=document.createElement("div");w=document.body.appendChild(w);w.name="pop_lyr";w.id="pop_bg";with(w.style){opacity="0.3";background="#000000";position="absolute";left="0px";top="0px";width="100%";height="100%";};w=document.createElement("div");w=document.body.appendChild(w);w.name="pop_lyr";w.id="pop_wnd";with(w.style){background="#ffffff";position="absolute";padding="10px";margin="0px";border="2px solid #d0d0d0";};return w;}

	/* remove popuplayer width background 2013. 05. 02 */
	function hidePopupLayer(){var ll=document.getElementsByName("pop_lyr");for(var i=0;i<ll.length;i++)document.body.removeChild(ll[i]);}	
	
	/* set align center layer 2013. 05. 02 */
	function setLayerCenter(w){var size=getDocumentSize();w.style.top=(size['h']/2)-(w.offsetHeight/2)+"px";w.style.left=(size['w']/2)-(w.offsetWidth/2)+"px";}
