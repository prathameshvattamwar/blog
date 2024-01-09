const categories = document.querySelector("section#categories .categories_wrapper");

const category_names = categories.querySelectorAll(".categories_name_list .category_name");

const category_contents = categories.querySelectorAll(".categories_content_list .category_content");

const category_content_div = categories.querySelectorAll(".category_content");

const category_contents_array =  Array.prototype.slice.call(category_contents);

category_names.forEach(category_name => {
    category_name.addEventListener("mouseenter", e=>{
        var dataName = category_name.getAttribute("data-name");
        var dataNameContent_index = category_contents_array.map(x => {
            return x.getAttribute("data-content")
        }).indexOf(dataName);
        category_content_div.forEach(category_content => category_content.style.transform = `translateY(${-dataNameContent_index * 100}%)`);
         makeInactive(category_names, "active");
         category_name.classList.add("active");
    })
})

function makeInactive(array, className){
    array.forEach(element => {
        element.classList.remove(className);
    })
}