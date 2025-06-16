const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (Notification.permission === 'granted') {
        new Notification('Gracias, estaremos en contacto.', {
            icon: '../img/1.jpg',
            body: 'Tu mensaje fue enviado correctamente.'
        });
        setTimeout(() => {
            formulario.submit();
        }, 1000);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permiso => {
            if (permiso === 'granted') {
                new Notification('Gracias, estaremos en contacto.', {
                    icon: '../img/1.jpg',
                    body: 'Tu mensaje fue enviado correctamente.'
                });
            }
            setTimeout(() => {
                formulario.submit();
            }, 1000);
        });
    } else {
        // permiso denegado, solo envía sin notificación
        formulario.submit();
    }
});
