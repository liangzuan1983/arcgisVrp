/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom-attr","exports ./sniff ./_base/lang ./dom ./dom-style ./dom-prop".split(" "),function(f,p,n,g,q,h){function k(a,c){var b=a.getAttributeNode&&a.getAttributeNode(c);return b&&b.specified}var m={innerHTML:1,className:1,htmlFor:p("ie"),value:1},l={classname:"class",htmlfor:"for",tabindex:"tabIndex",readonly:"readOnly"};f.has=function(a,c){var b=c.toLowerCase();return m[h.names[b]||c]||k(g.byId(a),l[b]||c)};f.get=function(a,c){a=g.byId(a);var b=c.toLowerCase(),d=h.names[b]||c,e=a[d];if(m[d]&&
"undefined"!=typeof e||"href"!=d&&("boolean"==typeof e||n.isFunction(e)))return e;b=l[b]||c;return k(a,b)?a.getAttribute(b):null};f.set=function(a,c,b){a=g.byId(a);if(2==arguments.length){for(var d in c)f.set(a,d,c[d]);return a}d=c.toLowerCase();var e=h.names[d]||c,k=m[e];if("style"==e&&"string"!=typeof b)return q.set(a,b),a;if(k||"boolean"==typeof b||n.isFunction(b))return h.set(a,c,b);a.setAttribute(l[d]||c,b);return a};f.remove=function(a,c){g.byId(a).removeAttribute(l[c.toLowerCase()]||c)};f.getNodeProp=
function(a,c){a=g.byId(a);var b=c.toLowerCase(),d=h.names[b]||c;if(d in a&&"href"!=d)return a[d];b=l[b]||c;return k(a,b)?a.getAttribute(b):null}});