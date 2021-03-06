/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:esri/dijit/GeocodeMatch/templates/Popup.html":"\x3cdiv\x3e\n  \x3cdiv  class\x3d\"esri-popup-con\" data-dojo-attach-point\x3d'esri_popupHeader'\x3e\n    \x3cdiv\x3e\x3cspan\x3e${i18n.widgets.geocodeMatch.popup.addressTitle}\x3c/span\x3e\x3c/div\x3e\n    \x3cp data-dojo-attach-point\x3d'_addressTag'\x3e${i18n.widgets.geocodeMatch.popup.loadingPH}\x3c/p\x3e\n  \x3c/div\x3e\n  \x3cdiv  class\x3d\"esri-popup-con\" data-dojo-attach-point\x3d'esri_popupContent'\x3e\n    \x3cdiv\x3e\x3cspan\x3e${i18n.widgets.geocodeMatch.popup.locationTitle}\x3c/span\x3e\x3c/div\x3e\n    \x3cp data-dojo-attach-point\x3d'_Xtag'\x3e\x3c/p\x3e\n    \x3cp data-dojo-attach-point\x3d'_Ytag'\x3e\x3c/p\x3e\n  \x3c/div\x3e\n  \x3cdiv class\x3d\"esri-popup-button-con\"\x3e\n    \x3cdiv data-dojo-attach-point\x3d'_matchButton' data-dojo-type\x3d\"dijit.form.Button\"\x3e${i18n.widgets.geocodeMatch.popup.matchButtonLabel}\x3c/div\x3e\n    \x3cdiv data-dojo-attach-point\x3d'_discardButton' data-dojo-type\x3d\"dijit.form.Button\"\x3e${i18n.widgets.geocodeMatch.popup.discardButtonLabel}\x3c/div\x3e\n  \x3c/div\x3e\n\x3c/div\x3e"}});
define("esri/dijit/GeocodeMatch/Popup","require dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/Evented dojo/on dojo/uacss dojo/text!esri/dijit/GeocodeMatch/templates/Popup.html dojo/i18n!esri/nls/jsapi dijit/form/Button dijit/_WidgetBase dijit/_TemplatedMixin esri/kernel esri/geometry/webMercatorUtils".split(" "),function(e,k,l,d,m,f,n,p,g,h,q,r,s,t){e.toUrl("esri/dijit");e=l([q,r,m],{templateString:p,i18n:g,reverseRange:100,constructor:function(a,u){if(a.rowData&&(this._graphicID=a.graphic.attributes.id,
a.rowData.address))if("object"===typeof a.rowData.address){var c="",b;for(b in a.rowData.address)a.rowData.address.hasOwnProperty(b)&&(c+=a.rowData.address[b]+" ");this._address=c}else this._address=a.rowData.address;a.reverseRange&&(this.reverseRange=a.reverseRange)},postCreate:function(){this.inherited(arguments);var a;this._address&&this._addressTag?this._addressTag.innerHTML=this._address:this.geocodeMatch._locator.locationToAddress(this.graphic.geometry,this.reverseRange).then(d.hitch(this,function(a){a=
a.address;var c="",b;this.graphic.attributes.reverseGeocodeResults=a;if("object"===typeof a){for(b in a)a.hasOwnProperty(b)&&null!==a[b]&&"Loc_name"!==b&&(c+=a[b]+" ");this._addressTag&&(this._addressTag.innerHTML=c)}else this._addressTag&&(this._addressTag.innerHTML=a);this._matchButtonRef.set("disabled",!1)}),d.hitch(this,function(){this._addressTag&&(this._addressTag.innerHTML=g.widgets.geocodeMatch.popup.noAddress);this._matchButtonRef.set("disabled",!1)}));a=t.webMercatorToGeographic(this.graphic.geometry);
this._Xtag.innerHTML=this.i18n.widgets.geocodeMatch.popup.xTitle+a.x.toFixed(6);this._Ytag.innerHTML=this.i18n.widgets.geocodeMatch.popup.yTitle+a.y.toFixed(6);this._matchButtonRef=new h({label:this.i18n.widgets.geocodeMatch.popup.matchButtonLabel,"class":"esri_PopupButton esri_matchButton",disabled:!0},this._matchButton);this._discardButtonRef=new h({label:this.i18n.widgets.geocodeMatch.popup.discardButtonLabel,"class":"esri_PopupButton esri_deleteButton"},this._discardButton);this._listenerHandles=
[f(this._matchButtonRef,"click",d.hitch(this,function(){this.graphic.attributes.type===this.i18n.widgets.geocodeMatch.customLabel?this.geocodeMatch._matchCustomFeature(this.graphic):this.geocodeMatch._matchFeature(this.graphic.attributes.id);this.map.infoWindow.hide()})),f(this._discardButtonRef,"click",d.hitch(this,function(){this.map._layers[this.graphicsLayer.id].remove(this.graphic);this.map.infoWindow.hide()}))];!0===this.graphic.attributes.matched?(this._discardButtonRef.destroy(),this._matchButtonRef.destroy()):
!1===this.graphic.attributes.matched&&this._address&&(this._discardButtonRef.destroy(),this._matchButtonRef.set("disabled",!1));this.emit("load",{matchButtonRef:this._matchButtonRef,discardButtonRef:this._discardButtonRef})},startup:function(){this.inherited(arguments);this.emit("load",{matchButtonRef:this._matchButtonRef,discardButtonRef:this._discardButtonRef})},destroy:function(){this.inherited(arguments);k.forEach(this._listenerHandles,function(a){a.remove()})}});n("extend-esri")&&d.setObject("dijit.GeocodeMatchPopup",
e,s);return e});