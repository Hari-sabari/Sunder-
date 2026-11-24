const menuBtn=document.getElementById('menuBtn');
const navlinks=document.getElementById('navlinks');
menuBtn.addEventListener('click',()=>navlinks.classList.toggle('show'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('show')));
document.querySelectorAll('.service-row').forEach(row=>row.addEventListener('click',()=>{
  document.querySelectorAll('.service-row').forEach(item=>item.classList.remove('open'));
  row.classList.add('open');
}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const recipient='your.email@example.com'; // Change this to your real email address.
  const subject=encodeURIComponent('Portfolio enquiry from '+name);
  const body=encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
  document.getElementById('formStatus').textContent='Opening your email app. Update the recipient email in script.js before publishing.';
  window.location.href=`mailto:${recipient}?subject=${subject}&body=${body}`;
});
