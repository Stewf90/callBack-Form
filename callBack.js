/*  Grabs the form data and stores it locally,
    to then be retrieved on the confirmation page  */

const form = document.querySelector('form');

                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const data = new FormData(form);
                    const dataObj = Object.fromEntries(data);
                    
                    const json = JSON.stringify(dataObj);
                    localStorage.setItem('form', json);

                    window.location.href = "confirmation.html";
                })


       