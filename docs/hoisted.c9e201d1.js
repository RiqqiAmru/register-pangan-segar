import"./chunks/AppHeader.astro_astro_type_script_index_0_lang.d6bec240.js";const c=document.querySelector("form");document.addEventListener("DOMContentLoaded",()=>{c.action="https://script.google.com/macros/s/AKfycbwqFGTpo6G-NFCoQLa6I8Feu9kXwtPyvL0yHSCFQunQZnCTFSYVQ56LVIGd9K6w3gEdBg/exec",c.method="POST"});document.addEventListener("DOMContentLoaded",async()=>{const a=await(await fetch("https://script.google.com/macros/s/AKfycbwqFGTpo6G-NFCoQLa6I8Feu9kXwtPyvL0yHSCFQunQZnCTFSYVQ56LVIGd9K6w3gEdBg/exec")).json(),o=document.getElementById("bodyTable");o.innerHTML="",a[0].forEach((t,n)=>{const e=document.createElement("tr");e.innerHTML=`
    <th class="p-4">${n+1}</th>
    <td class="p-4">${t.nama}</td>
    <td class="p-4">${t.nib}</td>
  `,o.appendChild(e)});const d=document.getElementById("daftar-tunggu");d.innerHTML="",a[1].forEach((t,n)=>{const e=document.createElement("tr");e.innerHTML=`
      <th class="p-4">${n+1}</th>
      <td class="p-4">${t.namaUsaha}</td>
      <td class="p-4">${t.namaPengusaha}</td>
    `,d.appendChild(e)})});
