let txtCat = document.getElementById("txtCat");
let btnAdd = document.getElementById("btnAdd");
let ulCatList = document.getElementById("ulCatList");

btnAdd.addEventListener("click", updateCatList);

function updateCatList() {
    let newCategory = txtCat.value;
    if (newCategory.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = newCategory;
        ulCatList.appendChild(li);
        txtCat.value = "";
    }
}
