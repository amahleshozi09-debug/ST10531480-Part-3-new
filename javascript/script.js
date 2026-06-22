// ===========================
// BJW PLUMBERS WEBSITE SCRIPT
// ===========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("BJW Website Loaded Successfully");

    // ===========================
    // SMOOTH SCROLL
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ===========================
    // QUOTE REQUEST FORM
    // ===========================

    const quoteForm = document.getElementById("quoteForm");
    const formMsg = document.getElementById("formMsg");

    if (quoteForm) {

        quoteForm.addEventListener("submit", function(e) {

            e.preventDefault();

            const name = quoteForm.name.value.trim();
            const phone = quoteForm.phone.value.trim();
            const area = quoteForm.area.value;
            const message = quoteForm.message.value.trim();

            if (
                name === "" ||
                phone === "" ||
                area === "" ||
                message === ""
            ) {
                formMsg.style.color = "red";
                formMsg.textContent = "Please complete all fields.";
                return;
            }

            formMsg.style.color = "green";
            formMsg.textContent =
                "Thank you! Your quote request has been sent.";

            quoteForm.reset();
        });
    }

    // ===========================
    // CONTACT PAGE FORM
    // ===========================

    const contactForm = document.querySelector(
        'form[action^="mailto"]'
    );

    if (contactForm) {

        contactForm.addEventListener("submit", function(e) {

            const emailField =
                contactForm.querySelector('input[type="email"]');

            if(emailField){

                const email = emailField.value.trim();

                if(!email.includes("@")){

                    e.preventDefault();

                    alert(
                        "Please enter a valid email address."
                    );

                    return;
                }
            }

            alert(
                "Thank you for contacting BJW Plumbers."
            );
        });
    }

    // ===========================
    // LOGIN PAGE VALIDATION
    // ===========================

    const passwordField =
        document.querySelector('input[type="password"]');

    if(passwordField){

        const loginForm = passwordField.closest("form");

        loginForm.addEventListener("submit", function(e){

            if(passwordField.value.length < 6){

                e.preventDefault();

                alert(
                    "Password must be at least 6 characters long."
                );

                return;
            }

            alert(
                "Login/Signup submitted successfully."
            );
        });
    }

    // ===========================
    // SERVICE CARD ANIMATION
    // ===========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px)";
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";
        });
    });

    // ===========================
    // IMAGE CLICK PREVIEW
    // ===========================

    const images = document.querySelectorAll("img");

    images.forEach(img => {

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {

            const popup = window.open("");

            popup.document.write(`
                <html>
                <head>
                    <title>Image Preview</title>
                </head>
                <body style="
                    margin:0;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    background:black;
                    height:100vh;">
                    <img src="${img.src}"
                         style="
                         max-width:95%;
                         max-height:95%;">
                </body>
                </html>
            `);
        });
    });

    // ===========================
    // CURRENT YEAR FOOTER
    // ===========================

    const footer = document.querySelector("footer");

    if(footer){

        const year = new Date().getFullYear();

        footer.innerHTML += `
            <p>&copy; ${2026} BJW Plumbers and Project PTY LTD</p>
        `;
    }

});
const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop > 300){
    topBtn.style.display="block";
}
else{
    topBtn.style.display="none";
}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"

});

};
document.getElementById("copyright").innerHTML =
"© " + new Date().getFullYear() +
" BJW Plumbers and Projects PTY LTD";