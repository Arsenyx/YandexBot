// ==UserScript==
// @name         yandex Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Arseny
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==
if (document.getElementById("text") != null)
{
    document.getElementById("text").value = "Гобой";
    let button = document.getElementsByClassName("button_theme_websearch")[0];
      button.click();
}else{
    let links = document.links;
    for(let i=0; i<links.length; i++){
        let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
            link.removeAttribute('target');
            link.click();
            break;
        }
    }
}
