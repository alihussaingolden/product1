var a=document.getElementById("line").onmousemove=ali;
function ali(){
    var a=document.getElementById("line");
    a.style.textDecorationLine="underline"
}
var b=document.getElementById("line").onmouseout=hussain;
function hussain(){
    var b=document.getElementById("line");
    b.style.textDecorationLine="none"
}
var c=document.getElementById("lineone").onmousemove=lahore;
function lahore(){
    var c=document.getElementById("lineone");
    c.style.backgroundColor="gold"
}
var d=document.getElementById("lineone").onmouseout=karachi;
function karachi(){
    var d=document.getElementById("lineone");
    d.style.backgroundColor="lightgray"
}
var f=document.getElementById("linetwo").onmousemove=mov;
function mov(){
    var f=document.getElementById("linetwo");
    f.style.border="2px dotted red";
    f.style.backgroundColor="yellow"
}
var g=document.getElementById("linetwo").onmouseout=out;
function out(){
    var g=document.getElementById("linetwo");
    g.style.backgroundColor="lightpink"
}
var j=document.getElementById("linethree").onmousemove=haider;
function haider(){
    var j=document.getElementById("linethree");
    j.style.filter="brightness(3)"
}