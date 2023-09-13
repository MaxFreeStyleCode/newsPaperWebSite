let butDisplaySearchInputs = document.getElementsByClassName("search_sect");
let backSearchSect = document.getElementById("back_search_sect");
let closeBackSearchSect = document.getElementById("close_back_search_sect");
let responsiveHeaderSearch = document.getElementById(
  "responsive_header_search"
);

for (let i = 0; i < butDisplaySearchInputs.length; i++) {
  butDisplaySearchInputs[i].addEventListener("click", () => {
    backSearchSect.style.transform = "translateY(0vh)";
  });
}

closeBackSearchSect.addEventListener("click", () => {
  backSearchSect.style.transform = "translateY(-110vh)";
});
