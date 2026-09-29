const toggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}

document.querySelectorAll('[data-copy-target]').forEach(btn=>{btn.addEventListener('click',async()=>{const target=document.getElementById(btn.dataset.copyTarget);if(!target)return;try{await navigator.clipboard.writeText(target.innerText);const old=btn.textContent;btn.textContent='Copied';setTimeout(()=>btn.textContent=old,1400);}catch(e){btn.textContent='Select + copy';}});});
