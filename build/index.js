!function(){"use strict";var e,t={227:function(){var e=window.wp.blocks,t=window.wp.element,r=window.wp.i18n,o=window.wp.blockEditor,n=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"create-block/my-test-block","version":"0.1.0","title":"My Test Block","category":"widgets","icon":"smiley","description":"Example block written with ESNext standard and JSX support – build step required.","supports":{"html":false},"textdomain":"my-test-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,e.registerBlockType)(n,{edit:function(){return(0,t.createElement)("p",(0,o.useBlockProps)(),(0,r.__)("My Test Block – hello from the editor!","my-test-block"))},save:function(){return(0,t.createElement)("p",o.useBlockProps.save(),(0,r.__)("My Test Block – hello from the saved content!","my-test-block"))}})}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=function(t,r,n,i){if(!r){var s=1/0;for(a=0;a<e.length;a++){r=e[a][0],n=e[a][1],i=e[a][2];for(var c=!0,l=0;l<r.length;l++)(!1&i||s>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(c=!1,i<s&&(s=i));if(c){e.splice(a--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,n,i]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={826:0,431:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,s=r[0],c=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(l)var a=l(o)}for(t&&t(r);u<s.length;u++)i=s[u],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(a)},r=self.webpackChunkmy_test_block=self.webpackChunkmy_test_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var n=o.O(void 0,[431],(function(){return o(227)}));n=o.O(n)}();