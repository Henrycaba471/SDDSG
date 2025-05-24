const btnSend = document.querySelector(".send");

btnSend.addEventListener("click", (e) => {
    e.preventDefault();
    if (document.querySelector("#pay-concept").value === '' || document.querySelector("#pay-type").value === '') {
        return alert('Por favor, complete el concepto y el tipo de pago.');
    }
    let $pin = document.querySelector("#pin-giro").value;
    let $client = document.querySelector("#client-name").value;
    let $doc = document.querySelector("#client-doc").value;
    let $birthday = document.querySelector("#birthday").value;
    let $expedition = document.querySelector("#expedition").value;
    let $phone = document.querySelector("#client-phone").value;
    let $asesor = document.querySelector("#adviser-name").value;
    let $asesorDoc = document.querySelector("#adviser-doc").value;
    let $punto = document.querySelector("#punto-de-pago").value;
    let $code = document.querySelector("#code").value;
    let $phoneLi = document.querySelector("#phone-lid").value;

    if (!$pin || !$client || !$doc || !$birthday || !$expedition || !$asesor || !$asesorDoc || !$punto || !$code) {
        return alert('Los campos con asterisco (*) son obligatorios');
    }
    

    const data = {
        concepto: `${document.querySelector("#pay-concept").value} pago de ${document.querySelector("#pay-type").value}`,
        pin: `pin: ${$pin}`,
        client: `cliente: ${$client}`,
        doc: `cédula: ${$doc}`,
        birthday: `fecha de nacimiento: ${$birthday.split('-').reverse().join('/')}`,
        expedition: `fecha de expedición: ${$expedition.split('-').reverse().join('/')}`,
        phone: `teléfono: ${$phone}`,
        asesor: `asesor: ${$asesor}`,
        asesorDoc: `cédula: ${$asesorDoc}`,
        punto: `punto: ${$punto}`,
        code: `código: ${$code}`,
        phoneLi: `teléfono líder: ${$phoneLi}`,
        separator: '______________________________________________',
    };
    
    let destinatario = data?.phoneLi || '3134845367' ;
    console.log(destinatario);

    let message = encodeURIComponent(
        `${data.concepto.toUpperCase()} \n\n` +
        `${data.pin.toUpperCase()} \n` +
        `${data.client.toUpperCase()} \n` +
        `${data.doc.toUpperCase()} \n` +
        `${data.birthday.toUpperCase()} \n` +
        `${data.expedition.toUpperCase()} \n` +
        `${data.phone.toUpperCase()} \n` +
        `${data.separator} \n` +
        `${data.asesor.toUpperCase()} \n` +
        `${data.asesorDoc.toUpperCase()} \n` +
        `${data.punto.toUpperCase()} \n` +
        `${data.code.toUpperCase()} \n` +
        `${data.separator} \n\n` +
        `ANEXAR FOTO DE LA CÉDULA DEL CLIENTE POR AMBOS LADOS ↓ \n`
    );
    let url = `https://api.whatsapp.com/send?phone=57${destinatario}&text=${message}`;
    window.open(url, '_blank');
    //console.log(data);
});
