const reveals = document.querySelectorAll('.reveal');

function opentab(tabname, event) {
    const clickedTab = event.currentTarget;

    for (let tablink of tablinks) tablink.classList.remove("active-link");
    clickedTab.classList.add("active-link");

    const newTab = document.getElementById(tabname);

    let currentTab = null;
    for (let tabcontent of tabcontents) {
        if (tabcontent.classList.contains("active-tab")) {
            currentTab = tabcontent;
            break;
        }
    }

    if (currentTab && currentTab !== newTab) {
        currentTab.classList.add("exit-right");

        setTimeout(() => {
            currentTab.classList.remove("active-tab", "exit-right");

            newTab.style.opacity = 0;
            newTab.style.transform = "translateX(-30px)";
            newTab.classList.add("active-tab");

            setTimeout(() => {
                newTab.style.opacity = 1;
                newTab.style.transform = "translateX(0)";
            }, 50);
        }, 400);
    } else if (!currentTab) {
        newTab.style.opacity = 0;
        newTab.style.transform = "translateX(-30px)";
        newTab.classList.add("active-tab");
        setTimeout(() => {
            newTab.style.opacity = 1;
            newTab.style.transform = "translateX(0)";
        }, 50);
    }
}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}
