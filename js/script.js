const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.site-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));}

const oaarsPreview=document.querySelector('.screen-oaars');
if(oaarsPreview){oaarsPreview.innerHTML='<img src="oaars-preview.webp" alt="OAARS Online Application, Admission & Registration System preview" style="width:100%;height:100%;object-fit:cover;object-position:center;display:block">';}