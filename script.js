function hideAllColumn() {
    document.querySelector(".abtme-class").style.display = "none";
    document.querySelector(".exp-class").style.display = "none";
    document.querySelector(".port-class").style.display = "none";
    document.querySelector(".contact-class").style.display = "none";
    document.querySelector(".skill-class").style.display = "none";
}

function showAboutMe() {
    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".act-but");
    addId.setAttribute('id', 'active-button')


}


function showSkill() {
    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".skill-but");
    addId.setAttribute('id', 'active-button')
}

function showExp() {
    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".exp-but");
    addId.setAttribute('id', 'active-button')
}

function showPortfolio() {
    var removeId = document.querySelector("#active-button");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".port-but");
    addId.setAttribute('id', 'active-button')
}

function showContact() {
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




function showReact() {
    var removeId = document.querySelector("#active-port");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".react-btn");
    addId.setAttribute('id', 'active-port')

}

function showWp() {
    var removeId = document.querySelector("#active-port");
    removeId.removeAttribute('id');

    var addId = document.querySelector(".wordpress-btn");
    addId.setAttribute('id', 'active-port')

}


const reactBtn = document.querySelector('.react-btn');
const wordpressBtn = document.querySelector('.wordpress-btn');

const reactDiv = document.querySelector('.react-div');
const wordpressDiv = document.querySelector('.wordpress-div');

function portfolioZeroOpac() {
    reactDiv.style.opacity = 0;
    wordpressDiv.style.opacity = 0;
}

function hideAllPort() {
    document.querySelector('.react-div').style.display = 'none';
    document.querySelector('.wordpress-div').style.display = 'none';
}



reactBtn.addEventListener('click', () => {
    portfolioZeroOpac()
    setTimeout(() => {
        hideAllPort()

        reactDiv.style.display = 'block';
        setTimeout(() => {
            reactDiv.style.opacity = 1;
        }, 10); 
    }, 600);
});

wordpressBtn.addEventListener('click', () => {
    portfolioZeroOpac()
    setTimeout(() => {
        hideAllPort()

        wordpressDiv.style.display = 'block';
        setTimeout(() => {
            wordpressDiv.style.opacity = 1;
        }, 10); 
    }, 600);
})


