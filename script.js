const navbarLinks = document.querySelectorAll(".nav-link");

navbarLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar && navbar.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbar);

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


function registerUser(event) {

    event.preventDefault();

    const name =
        document.getElementById("registerName").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const message =
        document.getElementById("registerMessage");


    if (password !== confirmPassword) {

        message.innerHTML =
            '<div class="alert alert-danger">Passwords do not match.</div>';

        return;

    }


    const user = {

        name: name,
        email: email,
        password: password

    };


    localStorage.setItem(
        "eduKidsUser",
        JSON.stringify(user)
    );


    message.innerHTML =
        '<div class="alert alert-success">Registration successful!</div>';


    setTimeout(function() {

        window.location.href = "login.html";

    }, 1000);

}


function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value;

    const password =
        document.getElementById("loginPassword").value;

    const message =
        document.getElementById("loginMessage");


    const storedUser =
        JSON.parse(localStorage.getItem("eduKidsUser"));


    if (!storedUser) {

        message.innerHTML =
            '<div class="alert alert-warning">Please register first.</div>';

        return;

    }


    if (
        email === storedUser.email &&
        password === storedUser.password
    ) {

        localStorage.setItem(
            "eduKidsLoggedIn",
            "true"
        );


        window.location.href = "learning.html";

    } else {

        message.innerHTML =
            '<div class="alert alert-danger">Invalid email or password.</div>';

    }

}