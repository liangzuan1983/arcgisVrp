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
define("esri/workers/RequestClient","esri/sniff esri/kernel dojo/_base/declare dojo/Deferred dojo/_base/lang dojo/_base/xhr esri/config esri/workers/WorkerClient".split(" "),function(k,l,m,s,t,n,g,p){function q(a,b){var c=new e;c.addWorkerCallback(a,b);f.unshift({id:b?a+"::"+b:a,client:c});f.length>h&&f.pop().client.terminate();return c}var e=m([p],{declaredClass:"esri.workers.RequestClient",constructor:function(){this.setWorker(["esri/workers/mutableWorker","esri/workers/requestWorker"])},get:function(a){return this._send("GET",
a)},post:function(a){return this._send("POST",a)},_send:function(a,b){var c=n._ioSetArgs(b);c.xhr=null;var d=c.ioArgs,e=d.url;delete d.url;delete d.args;this.postMessage({method:a,url:e,options:d}).then(this._getSuccessHandler(c),this._getErrorHandler(c),this._getProgressHandler(c));return c},_addHeaderFunctions:function(a){a.getResponseHeader=function(b){var c,d=a.headers;Object.keys(d).forEach(function(a){if(a.toLowerCase()==b.toLowerCase())return c=d[a],!1});return c};a.getAllResponseHeaders=function(){var b=
[],c=a.headers;Object.keys(c).forEach(function(a){b.push(a+": "+c[a])});return b=b.join("\n")};return a},_getSuccessHandler:function(a){var b=this,c=a.ioArgs;return function(d){a.xhr=b._addHeaderFunctions(d);d=a.xhr.getResponseHeader("content-type");if(("xml"==c.handleAs||-1<d.indexOf("xml"))&&"string"==typeof a.xhr.response)a.xhr.response=(new DOMParser).parseFromString(a.xhr.response,"text/xml");a.resolve(a.xhr.response,a.xhr)}},_getErrorHandler:function(a){return function(b){a.reject(b)}},_getProgressHandler:function(a){return function(b){a.progress(b)}}}),
f=[],h=g.defaults.io.maxRequestWorkers,r=new e;e.getClient=function(a,b){if(a){var c;f.some(function(d){if(d.id==(b?a+"::"+b:a))c=d.client;return!0});return c||q(a,b)}return r};e.setLimit=function(a){h=g.defaults.io.maxRequestWorkers=a};k("extend-esri")&&(l.RequestClient=e);return e});