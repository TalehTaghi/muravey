// Profile

// Profile Photo
let profile_photo = document.getElementById("profile_photo");
let input = document.getElementById("profile_photo_input");

input.onchange = function (e) {
    let files = input.files;

    if (FileReader && files && files.length) {
        let reader = new FileReader();

        reader.readAsDataURL(files[0]);

        reader.onload = function () {
            profile_photo.src = reader.result;
            profile_photo.height = profile_photo.width;
        }
    }
}

// Save changes of Profile
let userName = document.getElementById("name");
let modalName = document.getElementById("name_change");

let number1 = document.getElementById("primary_number");
let modalNumber1 = document.getElementById("primary_number_change");

let number2 = document.getElementById("secondary_number");
let modalNumber2 = document.getElementById("secondary_number_change");

function Change_Profile_Button() {
    modalName.value = userName.value;
    modalNumber1.value = number1.value;
    modalNumber2.value = number2.value;
}

function Save_Changes_Of_Profile() {
    let newName = document.getElementById("name_change").value;
    userName.value = newName;
    modalName.value = newName;

    let pattern = /^\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/;
    let re = new RegExp(pattern);

    let number1New = document.getElementById("primary_number_change").value;

    if (re.test(number1New)) {
        number1.value = number1New;
        modalNumber1.value = number1New;
    }
    else {
        modalNumber1.value = number1.value;
        alert("Значение основного номера введено неверно!");
    }

    let number2New = document.getElementById("secondary_number_change").value;

    if (re.test(number2New)) {
        number2.value = number2New;
        modalNumber2.value = number2New;
    }
    else {
        modalNumber2.value = number2.value;
        alert("Значение второго номера введено неверно!");
    }
}

// Change background-color when address is clicked

function Change_Background_Of_Address(adr) {
    if (document.getElementsByClassName("onAddress")[0]) {
        document.getElementsByClassName("onAddress")[0].setAttribute("class", "address p-4");
    }

    adr.setAttribute("class", "address onAddress p-4");
}

// Edit/add address modal
let editAddressModalTitle = document.getElementById("editAddressModalTitle"); //Variables of edit address modal
let selectMenu = document.getElementById("address_title_сhange");
let textArea = document.getElementById("address_change");
let editAddressSaveButton = document.getElementById("editAddressSaveButton");
let options;
let selectedOption;

// Edit address 
let addressTitleElement; //Variables of delivery address section
let addressTitle;
let addressDescriptionElement;
let addressDescripton;
let otherAddress;
let ableToAdd = true;

let address = document.getElementsByClassName("address"); //Array of address tags
let allAddresses = new Array();
Update_allAddresses();

function Update_allAddresses() {
    for (let i = 0; i < address.length; i++) {
        allAddresses[i] = address[i].innerHTML;
    }
}

function Edit_Address_Buttons(btn) {
    editAddressModalTitle = document.getElementById("editAddressModalTitle");
    selectMenu = document.getElementById("address_title_сhange");
    textArea = document.getElementById("address_change");
    editAddressSaveButton = document.getElementById("editAddressSaveButton");

    editAddressModalTitle.innerText = "Редактировать адрес";

    addressTitleElement = btn.parentNode.parentNode.getElementsByTagName("h6")[0];
    addressTitle = addressTitleElement.innerText;

    options = selectMenu.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value == addressTitle) {
            selectMenu.selectedIndex = i;
        }
    }

    addressDescriptionElement = btn.parentNode.parentNode.getElementsByTagName("p")[0];
    addressDescripton = addressDescriptionElement.innerText;
    textArea.value = addressDescripton;

    editAddressSaveButton.innerText = "Сохранить изменения";
    editAddressSaveButton.setAttribute("onClick", "Save_Changes_Of_Address()");
}

function Save_Changes_Of_Address() {
    addressTitleElement.innerText = options[selectMenu.selectedIndex].value;
    addressDescriptionElement.innerText = textArea.value;

    address = document.getElementsByClassName("address"); //Updating the array of address tags
    Update_allAddresses();
}

// Add address
let addAddressButton;

function Add_Address_Button() {
    editAddressModalTitle = document.getElementById("editAddressModalTitle");
    selectMenu = document.getElementById("address_title_сhange");
    textArea = document.getElementById("address_change");
    editAddressSaveButton = document.getElementById("editAddressSaveButton");

    editAddressModalTitle.innerText = "Добавить адрес";

    selectMenu.selectedIndex = 0;

    textArea.value = '';
    textArea.setAttribute("placeholder", "Напишите адрес здесь...");

    editAddressSaveButton.innerText = "Добавить адрес";
    editAddressSaveButton.setAttribute("onClick", "Add_New_Address()");
}

let containerOfAddresses = document.getElementById("containerOfAddresses");
let startOfContainer = `<div class="row">
<div class="col-12 d-flex justify-content-center justify-content-lg-between">
    <h3>Адреса доставки</h3>
    <button type="button" data-bs-toggle="modal" data-bs-target="#editAddress"
        onclick="Add_Address_Button()" class="d-none d-lg-block">Добавить адрес</button>
</div>
</div>

<div class="row mb-3">
<div class="col-2 pe-0">
    <hr />
</div>
<div class="col-10 ps-0">
    <hr />
</div>
                        </div>`;
let edit_remove = `<div class="edit_remove flex-column justify-content-evenly px-2">
    <a title="Изменить адрес" data-bs-toggle="modal" data-bs-target="#editAddress"
        onclick="Edit_Address_Buttons(this)"><i class="fas fa-edit"></i></a>
    <a title="Удалить адрес" onclick="Delete_Address(this)" class="delete_button"><i class="fas fa-trash-alt"></i></a>
                   </div>`;
let responsiveButton = `<div class="row d-lg-none">
                   <div class="col-12 d-flex justify-content-center">
                       <button type="button" data-bs-toggle="modal" data-bs-target="#editAddress"
                           onclick="Add_Address_Button()" class="py-3">Добавить адрес</button>
                   </div>
                        </div>`;
let modalHTML = `<div class="modal fade" id="editAddress" tabindex="-1" aria-labelledby="edit_address" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content d-flex align-items-center">
        <div class="modal-header">
            <h5 class="modal-title text-center" id="editAddressModalTitle"></h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><i
                    class="far fa-times"></i></button>
        </div>
        <form action="#" method="POST">
            <div class="modal-body d-flex flex-column px-4 pb-0">
                <div class="d-flex flex-column mb-4">
                    <label for="address_title_сhange" class="mb-1">Название</label>

                    <select name="address_title_сhange" id="address_title_сhange"
                        class="p-3 pe-5 my-0 rounded" value="here">
                        <option value="Выберите название" disabled="disabled" hidden="hidden">Выберите
                            название</option>
                        <option value="Домашний">Домашний</option>
                        <option value="Офисный">Офисный</option>
                        <option value="Рабочий">Рабочий</option>
                        <option value="Учебный">Учебный</option>
                    </select>
                </div>

                <div class="d-flex flex-column mb-4">
                    <label for="address_change" class="mb-1">Адрес</label>
                    <textarea name="address_change" id="address_change"
                        class="p-3 my-0 rounded"></textarea>
                </div>
            </div>
            <div class="modal-footer px-4 pt-0">
                <button type="button" class="rounded py-3 m-0" id="editAddressSaveButton"
                    data-bs-dismiss="modal"></button>
            </div>
        </form>
    </div>
</div>
                 </div>`;

function Write_Container_Of_Address() {
    let newContainerOfAddresses = '';
    newContainerOfAddresses += startOfContainer;
    for (let i = 0; i < allAddresses.length; i++) {
        if (!i) {
            newContainerOfAddresses += '<div class="row mb-2">';
        }
        else if (!(i % 3)) {
            newContainerOfAddresses += '</div><div class="row mb-2">';
        }

        newContainerOfAddresses += `<div class="col-12 col-lg-4 d-flex justify-content-center mb-3 mb-lg-0"><article class="address${!i ? ' onAddress ' : ' '}p-4" onclick="Change_Background_Of_Address(this)">${allAddresses[i]}</article></div>`;
    }
    newContainerOfAddresses += `</div>${responsiveButton}`
    newContainerOfAddresses += modalHTML;
    containerOfAddresses.innerHTML = newContainerOfAddresses;
}

let newAddress;

function Add_New_Address() {
    options = selectMenu.options;
    let selectedOptionValue = options[selectMenu.selectedIndex].value;

    if (selectedOptionValue != "Выберите название" && textArea.value) {
        newAddress = `<h6 class="mb-2">${selectedOptionValue}</h6>
                      <p class="m-0">${textArea.value}</p>`;
        allAddresses.push(newAddress + edit_remove);

        Write_Container_Of_Address();

        address = document.getElementsByClassName("address"); //Updating the array of address tags
    }

    else if (selectedOptionValue == "Выберите название" && !textArea.value) {
        alert("Выберите название и напишите адрес!");
    }

    else if (!textArea.value) {
        alert("Напишите адрес!");
    }

    else {
        alert("Выберите название!");
    }
}

let deleteButtons;
let deleteButtonsArray = new Array();
let indexOfDeleted;

function Delete_Address(btn) {
    deleteButtons = document.getElementsByClassName("delete_button");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtonsArray[i] = deleteButtons[i];
    }

    indexOfDeleted = deleteButtonsArray.indexOf(btn);
    allAddresses.splice(indexOfDeleted, 1);

    Write_Container_Of_Address();

    address = document.getElementsByClassName("address"); //Updating the array of address tags
}