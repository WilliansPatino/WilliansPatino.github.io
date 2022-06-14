const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#enviarEmail');
const $buttonMailtoServicesPro = document.querySelector('#servicesPro');



$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  console.log(form.get('clientName'));

  $buttonMailto.setAttribute('href', 
  `mailto:informatikow@gmail.com?subject=Solicitud de: ${form.get('clientName')} 
  // ${form.get('clientEmail')}&body=${form.get('clientMsg')}

  
  --- Enviado por: ${form.get('clientName')} ---
  `);
  $buttonMailto.click();
  document.getElementById('form'). reset();
}