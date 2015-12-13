      window.onload = function() {
        try {
          TagCanvas.Start('myCanvas','tags',{            
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05
          });
		  integre_codeHTML();
        } catch(e) {
          // something went wrong, hide the canvas container
          document.getElementById('myCanvasContainer').style.display = 'none';
        }
      };
	  
	  //ajout d'un élément
	  function ajout_tags(Id) {
		var texte = document.getElementById("nom_tag").value;
		var Ul = document.getElementById(Id);
		var Li = document.createElement("li");
		var Lien = document.createElement("a");
		var Att = document.createAttribute("href");
		Att.value = document.getElementById("url_tag").value;
		Lien.setAttributeNode(Att);
		var Text = document.createTextNode(texte);
		Lien.appendChild(Text);
		Li.appendChild(Lien);
		Ul.appendChild(Li);
		
     return Li;
	 }
	 function recharger_canvas(){
	   ajout_tags('tagsNuage');
	   LiPerso = ajout_tags('tagsPerso');
	   
	   var texte = " Supprimer ce tag";
	   var Lien = document.createElement("a");
	   var Att = document.createAttribute("href");
	   Att.value = "#";
	   Lien.setAttributeNode(Att);
	   var AttOnClick = document.createAttribute("onclick");
	   AttOnClick.value = "supprime(this)";
	   Lien.setAttributeNode(AttOnClick);
	   var Text = document.createTextNode(texte);
	   Lien.appendChild(Text);
	   LiPerso.appendChild(Lien);
	   
	   TagCanvas.Reload('myCanvas');
	   integre_codeHTML();
	 }
	  	
	
	
	function supprime(a) {
		var list = document.getElementById("tagsPerso"),
		items = list.getElementsByTagName("li");

		list.onclick = function(e) {
			var evt = e || window.event,
			src = evt.target || evt.srcElement;
			var myIndex = findIndex(src.parentNode);
			var Nuage = document.getElementById("tagsNuage");
			Nuage.removeChild(Nuage.children[myIndex]);
			TagCanvas.Start('myCanvas','tags');
			integre_codeHTML();
			a.parentNode.parentNode.removeChild(a.parentNode);				
		};

		function findIndex( elem ) {
			var i, len = items.length;
			for(i=0; i<len; i++) {
				if (items[i]===elem) {
					return i;
				}
			}
			return -1;
		}
		
	}
	function integre_js(Radio) {
	var dBal = "&gt;", gBal = "&lt;", rBal = '\n';
	var message = document.getElementById("kasu");
	switch (Radio.value){
		case "Saf" :
			message.style.visibility = 'hidden';
			ligne = gBal+'!--[if lt IE 9]'+dBal+gBal+'script type="text/javascript" src="excanvas.js">'+gBal+'/script'+dBal+rBal+gBal+'![endif]--'+dBal+rBal+gBal+'script src="tagcanvas.js" type="text/javascript"'+dBal+gBal+'/script'+dBal;
			break;
		case "Sam" :
			message.style.visibility = 'hidden';
			ligne = gBal+'!--[if lt IE 9]'+dBal+gBal+'script type="text/javascript" src="excanvas.js">'+gBal+'/script'+dBal+rBal+gBal+'![endif]--'+dBal+rBal+gBal+'script src="tagcanvas.min.js" type="text/javascript"'+dBal+gBal+'/script'+dBal;
			break;
		case "jF" :
			message.style.visibility = 'visible';
			ligne = gBal+'script src="mettez le nom de votre fichier JS jquery ici" type="text/javascript"'+dBal+gBal+'/script'+dBal+rBal;
			ligne += gBal+'!--[if lt IE 9]'+dBal+gBal+'script type="text/javascript" src="excanvas.js">'+gBal+'/script'+dBal+gBal+'![endif]--'+dBal+rBal+gBal+'script src="jquery.tagcanvas.js" type="text/javascript"'+dBal+gBal+'/script'+dBal;
			break;
		case "jM" :
			message.style.visibility = 'visible';
			ligne = gBal+'script src="mettez le nom de votre fichier JS jquery ici" type="text/javascript"'+dBal+gBal+'/script'+dBal+rBal;
			ligne += gBal+'!--[if lt IE 9]'+dBal+gBal+'script type="text/javascript" src="excanvas.js">'+gBal+'/script'+dBal+gBal+'![endif]--'+dBal+rBal+gBal+'script src="jquery.tagcanvas.min.js" type="text/javascript"'+dBal+gBal+'/script'+dBal;
			break;
		}
	document.getElementById("choix_js").innerHTML = ligne;
	}
	
	function integre_codeHTML() {
	clone = document.getElementById("code");
	document.getElementById("codeHTML").innerHTML = clone.innerHTML;
	}