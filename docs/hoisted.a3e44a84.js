import"./chunks/AppHeader.astro_astro_type_script_index_0_lang.d6bec240.js";const n=document.querySelector("form");document.addEventListener("DOMContentLoaded",()=>{n.action="https://script.google.com/macros/s/AKfycbwqFGTpo6G-NFCoQLa6I8Feu9kXwtPyvL0yHSCFQunQZnCTFSYVQ56LVIGd9K6w3gEdBg/exec",n.method="POST"});document.addEventListener("DOMContentLoaded",async()=>{const c=await(await fetch("https://script.google.com/macros/s/AKfycbwqFGTpo6G-NFCoQLa6I8Feu9kXwtPyvL0yHSCFQunQZnCTFSYVQ56LVIGd9K6w3gEdBg/exec")).json(),t=document.getElementById("bodyTable");t.innerHTML="",c.forEach((e,d)=>{const o=document.createElement("tr");o.innerHTML=`
    <th class="p-4">${d+1}</th>
    <td class="p-4">${e.nama}</td>
    <td class="p-4">${e.nib}</td>
  `,t.appendChild(o)})});
