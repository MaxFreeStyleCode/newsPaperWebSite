let subPostStylesMainMenuAppear = false;
let subCategoriesMainMenuAppear = false;
let subPostStylesHiddenMenuAppear = false;
let subCategoriesHiddenMenuAppear = false;
let hiddenMenuAppear = false;

let butDisplaySearchInputs = document.getElementsByClassName("search_sect");
let backSearchSect = document.getElementById("back_search_sect");
let closeBackSearchSect = document.getElementById("close_back_search_sect");
let responsiveHeaderSearch = document.getElementById(
  "responsive_header_search"
);
let displaySubPostStylesMainMenu = document.getElementById(
  "display_sub_post_styles_main_menu"
);
let displaySubCategoriesMainMenu = document.getElementById(
  "display_sub_categories_main_menu"
);
let subPostStylesMainMenu = document.getElementById(
  "sub_post_styles_main_menu"
);
let subCategoriesMainMenu = document.getElementById("sub_categories_main_menu");
let hiddenMenu = document.getElementById("hidden_menu");
let displaySubPostStylesHiddenMenu = document.getElementById(
  "display_sub_post_styles_hidden_menu"
);
let displaySubCategoriesHiddenMenu = document.getElementById(
  "display_sub_categories_hidden_menu"
);
let subPostStylesHiddenMenu = document.getElementById(
  "sub_post_styles_hidden_menu"
);
let subCategoriesHiddenMenu = document.getElementById(
  "sub_categories_hidden_menu"
);

for (let i = 0; i < butDisplaySearchInputs.length; i++) {
  butDisplaySearchInputs[i].addEventListener("click", () => {
    backSearchSect.style.transform = "translateY(0vh)";
  });
}

closeBackSearchSect.addEventListener("click", () => {
  backSearchSect.style.transform = "translateY(-110vh)";
});

function closeAllSubMenu() {
  subPostStylesMainMenuAppear = false;
  subCategoriesMainMenuAppear = false;
  subPostStylesHiddenMenuAppear = false;
  subCategoriesHiddenMenuAppear = false;
  subPostStylesMainMenu.style.opacity = "0";
  subPostStylesMainMenu.style.transform = "translateY(-700px)";
  subCategoriesMainMenu.style.opacity = "0";
  subCategoriesMainMenu.style.transform = "translateY(-700px)";
  subPostStylesHiddenMenu.style.opacity = "0";
  subPostStylesHiddenMenu.style.transform = "translateY(-700px)";
  subCategoriesHiddenMenu.style.opacity = "0";
  subCategoriesHiddenMenu.style.transform = "translateY(-700px)";
}

displaySubPostStylesMainMenu.addEventListener("click", () => {
  if (!subPostStylesMainMenuAppear) {
    closeAllSubMenu();
    subPostStylesMainMenu.style.opacity = "1";
    subPostStylesMainMenu.style.transform = "translateY(0px)";
  } else {
    subPostStylesMainMenu.style.opacity = "0";
    subPostStylesMainMenu.style.transform = "translateY(-700px)";
  }
  subPostStylesMainMenuAppear = !subPostStylesMainMenuAppear;
});

displaySubCategoriesMainMenu.addEventListener("click", () => {
  if (!subCategoriesMainMenuAppear) {
    closeAllSubMenu();
    subCategoriesMainMenu.style.opacity = "1";
    subCategoriesMainMenu.style.transform = "translateY(0px)";
  } else {
    subCategoriesMainMenu.style.opacity = "0";
    subCategoriesMainMenu.style.transform = "translateY(-700px)";
  }
  subCategoriesMainMenuAppear = !subCategoriesMainMenuAppear;
});

displaySubPostStylesHiddenMenu.addEventListener("click", () => {
  if (!subPostStylesHiddenMenuAppear) {
    closeAllSubMenu();
    subPostStylesHiddenMenu.style.opacity = "1";
    subPostStylesHiddenMenu.style.transform = "translateY(0px)";
  } else {
    subPostStylesHiddenMenu.style.opacity = "0";
    subPostStylesHiddenMenu.style.transform = "translateY(-700px)";
  }
  subPostStylesHiddenMenuAppear = !subPostStylesHiddenMenuAppear;
});

displaySubCategoriesHiddenMenu.addEventListener("click", () => {
  if (!subCategoriesHiddenMenuAppear) {
    closeAllSubMenu();
    subCategoriesHiddenMenu.style.opacity = "1";
    subCategoriesHiddenMenu.style.transform = "translateY(0px)";
  } else {
    subCategoriesHiddenMenu.style.opacity = "0";
    subCategoriesHiddenMenu.style.transform = "translateY(-700px)";
  }
  subCategoriesHiddenMenuAppear = !subCategoriesHiddenMenuAppear;
});

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 300) {
    if (!hiddenMenuAppear) {
      hiddenMenuAppear = true;
      hiddenMenu.style.transform = "translateY(0px)";
    }
  } else {
    if (hiddenMenuAppear) {
      hiddenMenuAppear = false;
      hiddenMenu.style.transform = "translateY(-400px)";
    }
  }
});
