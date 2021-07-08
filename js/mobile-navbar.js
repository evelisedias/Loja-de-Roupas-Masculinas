class MobileNavbar{
    constructor(){
       this.MobileNavbar = document.querySelector(mobileMenu);
       this.navList = document.querySelector(navList);
       this.navLinks = document.querySelectorAll(navLinks)
       this.activeClass = "active"
    }

    addClickEvent(){
        this.mobileMenu.addeventListener("click", () => console.log
        ("hey"))
    }

    init(){
        if (this.obileMenu){
            this.addClickEvent();
        }
        return this;
    }

}

const MobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    "nav-list li"
    );