function hideAllColumn() {

    
    document.querySelector(".abtme-class").style.display = "none";
    document.querySelector(".exp-class").style.display = "none";
    document.querySelector(".port-class").style.display = "none";
    document.querySelector(".contact-class").style.display = "none";
    document.querySelector(".skill-class").style.display = "none";

}

function showAboutMe() {
    // hideAllColumn();
    // document.querySelector(".abtme-class").style.display = "block";

    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".act-but");
    addId.setAttribute('id', 'active-button')


}


function showSkill() {
    // hideAllColumn();
    // document.querySelector(".exp-class").style.display = "block";

    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".skill-but");
    addId.setAttribute('id', 'active-button')
}

function showExp() {
    // hideAllColumn();
    // document.querySelector(".exp-class").style.display = "block";

    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".exp-but");
    addId.setAttribute('id', 'active-button')
}

function showPortfolio() {
    // hideAllColumn();
    // document.querySelector(".port-class").style.display = "block";

    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".port-but");
    addId.setAttribute('id', 'active-button')
}

function showContact() {
    // hideAllColumn();
    // document.querySelector(".contact-class").style.display = "block";

    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".contact-but");
    addId.setAttribute('id', 'active-button')
}


const abtMeDiv = document.querySelector('.about-me-div');
const expDiv = document.querySelector('.experiences-div');
const portDiv = document.querySelector('.port-div');
const contactDiv = document.querySelector('.contact-div');
const skillDiv = document.querySelector('.skill-div');


const abtBut = document.querySelector('.act-but');
const expBut = document.querySelector('.exp-but');
const portBut = document.querySelector('.port-but');
const contactBut = document.querySelector('.contact-but');
const skillBut = document.querySelector('.skill-but');


function allZeroOpacity(){
    abtMeDiv.style.opacity = 0;
    expDiv.style.opacity = 0;
    portDiv.style.opacity = 0;
    contactDiv.style.opacity = 0;
    skillDiv.style.opacity = 0;
}

abtBut.addEventListener('click', () => {

    allZeroOpacity()  
    setTimeout(() => {
        hideAllColumn()

        abtMeDiv.style.display = 'block';
        setTimeout(() => {
            abtMeDiv.style.opacity = 1;
        }, 10); 
    }, 600); 
});

skillBut.addEventListener('click', () => {

    allZeroOpacity()  
    setTimeout(() => {
        hideAllColumn()

        skillDiv.style.display = 'block';
        setTimeout(() => {
            skillDiv.style.opacity = 1;
        }, 10); 
    }, 600); 
});

expBut.addEventListener('click', () => {
    allZeroOpacity()
    setTimeout(() => {
        hideAllColumn()
     
        expDiv.style.display = 'block';
        setTimeout(() => {
            expDiv.style.opacity = 1;
        }, 10); 
    }, 600); 
});

portBut.addEventListener('click', () => { 
    allZeroOpacity()  
    setTimeout(() => {
        hideAllColumn()

        portDiv.style.display = 'block';
        setTimeout(() => {
            portDiv.style.opacity = 1;
        }, 10); 
    }, 600); 
});

contactBut.addEventListener('click', () => { 
    allZeroOpacity()  
    setTimeout(() => {
        hideAllColumn()

        contactDiv.style.display = 'block';
        setTimeout(() => {
            contactDiv.style.opacity = 1;
        }, 10); 
    }, 600); 
});
