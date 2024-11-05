"use strict";
document.querySelectorAll(".gallery__thumb").forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function(eve) {
        eve.preventDefault();
        const largeImg = document.getElementById("largeImg");
        largeImg.src = eve.target.src;
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
