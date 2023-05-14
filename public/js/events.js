let buttonCta = document.querySelector('#callToAction')

buttonCta.addEventListener('click', ()=>{
    gtag('event', 'click', {
        'source': 'landing_page',
        'medium': 'call_to_action',
        'name': 'ktm_venezuela_button_form'
    });
})