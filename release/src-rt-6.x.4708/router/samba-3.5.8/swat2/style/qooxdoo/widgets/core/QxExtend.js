/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function isHashEmpty(h){for(var s in h){return false;};return true;};function copyCreateHash(h){if(h){var n={};for(var k in h){n[k]=h[k];};return n;}else {return{};};};function copyCreateArray(a){return a&&a.length>0?a.copy():[];};function set(){var r={};for(var i=0,a=arguments,l=a.length;i<l;i++){r[a[i]]=true;};return r;};function isValid(v){switch(typeof v){case "undefined":return false;case "object":return v!=null;case "string":return v!="";case "number":return !isNaN(v);case "function":case "boolean":return true;};return false;};function isInvalid(v){switch(typeof v){case "undefined":return true;case "object":return v==null;case "string":return v=="";case "number":return isNaN(v);case "function":case "boolean":return false;};return true;};function isValidNumber(v){return typeof v=="number"&&!isNaN(v);};function isInvalidNumber(v){return typeof v!="number"||isNaN(v);};function isValidString(v){return typeof v=="string"&&v!="";};function isInvalidString(v){return typeof v!="string"||v=="";};function isValidArray(v){return typeof v=="object"&&v!=null&&typeof v.push=="function";};function isInvalidArray(v){return typeof v!="object"||v==null||typeof v.push!="function";};function isValidObject(v){return typeof v=="object"&&v!=null&&typeof v.push!="function";};function isInvalidObject(v){return typeof v!="object"||v==null||typeof v.push=="function";};function isValidFunction(v){return typeof v=="function";};function isInvalidFunction(v){return typeof v=="function";};Number.prototype.limit=function(vmin,vmax){if(vmax!=null&&typeof vmax=="number"&&this>vmax){return vmax;}else if(vmin!=null&&typeof vmin=="number"&&this<vmin){return vmin;}else {return Number(this);};};Number.prototype.inrange=function(vmin,vmax){return this>vmin&&this<vmax;};Array.prototype.indexOf=function(o){for(var i=0;i<this.length;i++){if(this[i]==o){return i;};};return-1;};Array.prototype.lastIndexOf=function(o){for(var i=this.length-1;i>=0;i--){if(this[i]==o){return i;};};return-1;};Array.prototype.contains=function(o){return this.indexOf(o)!=-1;};Array.prototype.remove=function(o){var i=this.indexOf(o);if(i!=-1){this.splice(i,1);};};Array.prototype.insertAt=function(o,i){this.splice(i,0,o);};Array.prototype.insertBefore=function(o,o2){var i=this.indexOf(o2);if(i==-1){this.push(o);}else{this.splice(i,0,o);};};Array.prototype.insertAfter=function(o,o2){var i=this.indexOf(o2);if(i==-1||i==(this.length-1)){this.push(o);}else{this.splice(i+1,0,o);};};Array.prototype.removeAt=function(i){this.splice(i,1);};Array.prototype.remove=function(o){var i=this.indexOf(o);if(i!=-1){this.splice(i,1);};};Array.prototype.copy=function(){return this.concat();};Array.prototype.getLast=function(){return this[this.length-1];};Array.prototype.getFirst=function(){return this[0];};String.prototype.contains=function(s){return this.indexOf(s)!=-1;};String.prototype.toFirstUp=function(){return this.charAt(0).toUpperCase()+this.substr(1);};String.prototype.toCamelCase=function(){var vArr=this.split('-');if(vArr.length==1){return vArr[0];};var ret=vArr[0];var s;for(var i=1,len=vArr.length;i<len;i++,s=vArr[i]){ret+=s.charAt(0).toUpperCase()+s.substring(1);};return ret;};String.prototype.trimLeft = new Function("return this.replace(/^\\s+/,'')");String.prototype.trimRight = new Function("return this.replace(/\\s+$/,'')");String.prototype.trim = new Function("return this.replace(/^\\s+|\\s+$/g,'')");String.prototype.add=function(v,sep){if(this==v){return this;}else if(this==""){return v;}else {if(isInvalid(sep)){sep=",";};var a=this.split(sep);if(a.indexOf(v)==-1){a.push(v);return a.join(sep);}else {return this;};};};String.prototype.remove=function(v,sep){if(this==v||this==""){return "";}else {if(isInvalid(sep)){sep=",";};var a=this.split(sep);var p=a.indexOf(v);if(p==-1){return this;};do{a.splice(p,1);}while((p=a.indexOf(v))!=-1);return a.join(sep);};};if(!Function.prototype.apply){Function.prototype.apply=function(oScope,args){var sarg=[];var rtrn,call;if(!oScope){oScope=window;};if(!args){args=[];};for(var i=0;i<args.length;i++){sarg[i]="args["+i+"]";};call="oScope._applyTemp_("+sarg.join(",")+");";oScope._applyTemp_=this;rtrn=eval(call);delete oScope._applyTemp_;return rtrn;};};Function.prototype.extend=function(sFunction,tClassName){if(typeof sFunction!="function"){throw new Error("Extend:Function/Constructor to extend from is not a function:"+sFunction);};if(typeof tClassName!="string"){throw new Error("Extend:Missing or malformed className:"+tClassName);};proto=this.prototype=new sFunction;proto.superclass=sFunction;proto.classname=tClassName;proto.constructor=this;return proto;};if(navigator.product=="Gecko"){Document.prototype.elementFromPoint=function(x,y){this.addEventListener("mousemove",this.elementFromPointHandler,false);var event=this.createEvent("MouseEvents");var box=this.getBoxObjectFor(this.documentElement);event.initMouseEvent("mousemove",true,false,this.defaultView,0,x+box.screenX,y+box.screenY,x,y,false,false,false,false,0,null);this.dispatchEvent(event);this.removeEventListener("mousemove",this.elementFromPointHandler,false);return this.elementFromPointTarget;};Document.prototype.elementFromPointHandler=function(event){this.elementFromPointTarget=event.explicitOriginalTarget;if(this.elementFromPointTarget.nodeType==Node.TEXT_NODE){this.elementFromPointTarget=this.elementFromPointTarget.parentNode;};if(this.elementFromPointTarget.nodeName.toUpperCase()=="HTML"&&this.documentElement.nodeName.toUpperCase()=="HTML"){this.elementFromPointTarget=this.getElementsByTagName("BODY").item(0);};event.preventDefault();event.stopPropagation();};Document.prototype.elementFromPointTarget=null;};Error.prototype.toString=function(){return this.message;};Function.prototype.removeProperty=function(p){if(typeof this.prototype._i1!="string"){throw new Error("Has no properties!");};if(typeof p!="object"){throw new Error("Param should be an object!");};if(isInvalid(p.name)){throw new Error("Malformed input parameters:name needed!");};p.method=p.name.toFirstUp();p.implMethod=p.impl?p.impl.toFirstUp():p.method;var valueKey="_value"+p.method;this.prototype._i1=this.prototype._i1.remove(p.name);this.prototype[valueKey]=null;this.prototype["get"+p.method]=function(){return null;};this.prototype["force"+p.method]=this.prototype["set"+p.method]=function(){throw new Error("Property "+p.name+" is not supported by class+"+this.classname);};if(this.prototype["_modify"+p.method]){this.prototype["_modify"+p.method]=null;};if(this.prototype["_eval"+p.method]){this.prototype["_eval"+p.method]=null;};};Function.prototype.addProperty=function(p){if(typeof p!="object"){throw new Error("Param should be an object!");};if(isInvalid(p.name)){throw new Error("Malformed input parameters:name needed!");};p.method=p.name.toFirstUp();p.implMethod=p.impl?p.impl.toFirstUp():p.method;if(isInvalid(p.defaultValue)){p.defaultValue=null;};var valueKey="_value"+p.method;var nullKey="_null"+p.method;var evalKey="_eval"+p.method;var changeKey="change"+p.method;var modifyKey="_modify"+p.implMethod;var checkKey="_check"+p.implMethod;this.prototype[valueKey]=p.defaultValue;if(typeof this.prototype._i1!="string"){this.prototype._i1=p.name;}else{this.prototype._i1+=","+p.name;};if(typeof p.groups=="object"){var g=p.groups;var l=g.length;var tempGroups;var tempGroupName;var tempGroupNameUp;var tempMemberRef;for(var i=0;i<l;i++){tempGroupName=g[i];tempMemberRef="_propertygroup_"+tempGroupName+"_members";if(typeof this.prototype._h9!="string"){this.prototype._h9=tempGroupName;}else {tempGroups=this.prototype._h9.split(",");if(tempGroups.contains(tempGroupName)){this.prototype[tempMemberRef]+=","+p.name;}else {tempGroups.push(tempGroupName);this.prototype._h9=tempGroups.join(",");};};if(typeof this.prototype[tempMemberRef]=="undefined"){this.prototype[tempMemberRef]=p.name;tempGroupNameUp=tempGroupName.toFirstUp();this.prototype["get"+tempGroupNameUp]=new Function("var memberList=this."+tempMemberRef+".split(',');"+"var memberLength=memberList.length;"+"var memberValues=[];"+"try{"+"for(var i=0;i<memberLength;i++){"+"memberValues.push(this['get'+memberList[i].toFirstUp()]());"+"};"+"}catch(ex){"+"throw new Error('Failed to get values from property group "+tempGroupName+":'+ex);"+"};"+"return memberValues;"
);this.prototype["set"+tempGroupNameUp]=new Function("var memberList=this."+tempMemberRef+".split(',');"+"var memberLength=memberList.length;"+"try{"+"for(var i=0;i<memberLength;i++){"+"this['set'+memberList[i].toFirstUp()](arguments[i]);"+"};"+"}catch(ex){"+"throw new Error('Failed to setup property group "+tempGroupName+":'+ex);"+"};"+"return true"
);};};};this.prototype["get"+p.method]=function(){if(typeof this[valueKey]=="undefined"||(this[valueKey]==null&&this[nullKey]!=true)){if(typeof this[evalKey]=="function"){var v1=this[evalKey]();if(isValid(v1)){return this[valueKey]=v1;};};return null;}else {return this[valueKey];};};this.prototype["getDefault"+p.method]=function(_b4){return p.defaultValue;};this.prototype["setDefault"+p.method]=function(newValue,_b4){return p.defaultValue=newValue;};this.prototype["force"+p.method]=function(newValue){this[valueKey]=newValue;this[nullKey]=newValue==null;return true;};this.prototype["reset"+p.method]=function(_b4){return this["set"+p.method](p.defaultValue,_b4);};this.prototype["set"+p.method]=function(newValue,_b4){var thisModId=this.toHash()+"_"+p.name;if(isInvalidArray(_b4)){var _b4=[thisModId];}else if(_b4.contains(thisModId)){return newValue;}else {_b4.push(thisModId);};var fixedValue=newValue==null?null:isValid(p.type)?p.type(newValue):newValue;var oldValue=this[valueKey];if(typeof this[checkKey]=="function"){try{fixedValue=this[checkKey](fixedValue,oldValue,p.name,_b4);}catch(ex){this.debug("Failed to check property "+p.name+":"+ex);return false;};};if(fixedValue!=oldValue){this[valueKey]=fixedValue;this[nullKey]=fixedValue==null;if(typeof this[modifyKey]=="function"){try{var r=this[modifyKey](fixedValue,oldValue,p.name,_b4);if(!r){throw new Error("Failed without exception:"+p.name+"["+p.implMethod+"|"+r+"]");};}catch(ex){this.debug("Failed to modify property "+p.name+":"+ex.message);return false;};};if(this instanceof QxTarget){if(this.hasEventListeners(changeKey)){var ce=new QxDataEvent(changeKey,fixedValue,oldValue,false);ce.setTarget(this);try{this.dispatchEvent(ce,true);}catch(ex){throw new Error("Failed to dispatch changed event:"+ex);};ce=null;};};};return fixedValue;};if(typeof p.getAlias=="string"){this.prototype[p.getAlias]=this.prototype["get"+p.method];};if(typeof p.setAlias=="string"){this.prototype[p.setAlias]=this.prototype["set"+p.method];};};