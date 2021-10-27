let draggedElement;
let hoverElement;

document.addEventListener("DOMContentLoaded", ()=>{
    const gallery = document.getElementById("gallery");
    fetch("images.json")
        .then(response => response.json())
        .then(json => {
            json.photos.forEach((item) => {


                let galleryElement = document.createElement("img");
                galleryElement.setAttribute("src", "images/" + item.src);

                galleryElement.classList = "Imgview";
                gallery.appendChild(galleryElement);

                galleryElement.ondragstart = function (ev){
                    console.log(ev.target);
                    draggedElement = ev.target;
                };

                galleryElement.ondragover = function (ev){
                    console.log(ev.target);
                    hoverElement = ev.target;

                    galleryElement.parentNode.insertBefore(draggedElement, hoverElement.nextSibling);


                };


            });
        })
});
