const navbarLinks = document.querySelectorAll(".nav-link");

navbarLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navbar = document.querySelector(".navbar-collapse");

        if (navbar.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getInstance(navbar);

            bsCollapse.hide();

        }

    });

});