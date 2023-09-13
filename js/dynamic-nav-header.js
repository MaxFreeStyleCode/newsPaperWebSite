let subPostStylesMainMenuAppear = false;
let subCategoriesMainMenuAppear = false;

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

for (let i = 0; i < butDisplaySearchInputs.length; i++) {
  butDisplaySearchInputs[i].addEventListener("click", () => {
    backSearchSect.style.transform = "translateY(0vh)";
  });
}

closeBackSearchSect.addEventListener("click", () => {
  backSearchSect.style.transform = "translateY(-110vh)";
});

responsiveHeaderSearch.addEventListener("click", () => {
  backSearchSect.style.transform = "translateY(0vh)";
});

function closeAllSubMenu() {
  subPostStylesMainMenuAppear = false;
  subCategoriesMainMenuAppear = false;
  subPostStylesMainMenu.style.opacity = "0";
  subPostStylesMainMenu.style.transform = "translateY(-700px)";
  subCategoriesMainMenu.style.opacity = "0";
  subCategoriesMainMenu.style.transform = "translateY(-700px)";
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
