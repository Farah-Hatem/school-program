let addPage = document.getElementById('add-page');
let infoPage = document.getElementById('info-page');
let feesPage = document.getElementById('fees-page');
let paymentPage = document.getElementById('payment-page');
let payScreen = document.getElementById('pay-screen');
let deletePage = document.getElementById('delete-page');
let close = document.getElementById('x');
//inputes
//studentName
let firstNameF = document.getElementById('first-name');
let  secondNameF = document.getElementById('second-name');
let  thirdNameF = document.getElementById('third-name');
let  lastNameF = document.getElementById('last-name');
//id
let  id = document.getElementById('id');
//class
let sClass = document.getElementById('class');
let sBranch = document.getElementById('branch');
//info
let birthDate = document.getElementById('birth-date');
let nationality = document.getElementById('nationality');
let motherName = document.getElementById('mother-name');
let address = document.getElementById('address');
let health = document.getElementById('health');
//fees
let FeesTotal = document.getElementById('fees-total');
let discount = document.getElementById('discount');
let feesAfDis = document.getElementById('fees-af-dis');
let paidAmount = document.getElementById('paid-amount');
let amountNotPaid = document.getElementById('amount-not-paid');
//inputs 
let inpField = document.querySelectorAll('input');
//button
let addBtn = document.getElementById('add-btn');
let btnbtn = document.getElementById('btn2');

// let payAmount = amountTwoFees.value ;

// input in add fess page 
let nameAddFess = document.getElementById('name-add-fees');
let amountOneFees = document.getElementById('amount-one-add-fees');
let amountTwoFees = document.getElementById('amount-two-add-fees');
//serch
let search = document.querySelectorAll('.search');
//x
function addStudent() {
    addPage.style.display = 'block';
}
function studentInfo() {
    infoPage.style.display = 'block';
    showData();
}
function manageFees() {
    feesPage.style.display = 'block';
    showFees();
}
function addPayment() {
    paymentPage.style.display = 'block';
    showFeesPay();
}
function pay(i) {
    payScreen.style.display = 'flex';
    showInfoFees(i);
}
function deleteStudent() {
    deletePage.style.display = 'block';
    showDelete()
}
function re() {
    location.reload()
}
function reTwo() {
    payScreen.style.display = 'none';
}
//create student
let dataStudent;
if (localStorage.student != null) {
    dataStudent = JSON.parse(localStorage.student);
}
else {
    dataStudent = [];
}
//add student 
addBtn.onclick = function() {
    let newStudent = {
        firstName:firstNameF.value,
        secondName:secondNameF.value,
        thirdName:thirdNameF.value,
        lastName:lastNameF.value,
        studentId: id.value,
        studentClass: sClass.value,
        studentBranch: sBranch.value,
        studentBirthDate: birthDate.value,
        studentNationality: nationality.value,
        studentMother: motherName.value,
        studentAddress: address.value,
        studentHealth: health.value,
        studentFeesTotal: FeesTotal.value,
        studentDiscount: discount.value,
        studentFeesAfDis: feesAfDis.value,
        studentAmPaid: paidAmount.value,
        studentAmNotPaid: amountNotPaid.value,
    }; 
    dataStudent.push(newStudent);
    localStorage.setItem('student',JSON.stringify(dataStudent));
    console.log(dataStudent);
    clearData();
    showData();
}
//calculate amount after discount 
discount.value = 0 ;
FeesTotal.onkeyup = function() {
    feesAfDis.value = FeesTotal.value;
    discount.onkeyup = function() {
        let DisAmount = (FeesTotal.value * discount.value) / 100 ;
        feesAfDis.value = FeesTotal.value - DisAmount;
    }
    FeesTotal.onkeyup = function() {
        let DisAmount = (FeesTotal.value * discount.value) / 100 ;
        feesAfDis.value = FeesTotal.value - DisAmount;
    }
}
//calculate amount after pay 
paidAmount.onkeyup = function() {
    amountNotPaid.value = feesAfDis.value - paidAmount.value;
    discount.onkeyup = function() {
        let DisAmount = (FeesTotal.value * discount.value) / 100 ;
        feesAfDis.value = FeesTotal.value - DisAmount;
        amountNotPaid.value = feesAfDis.value - paidAmount.value;

    }
    FeesTotal.onkeyup = function() {
        let DisAmount = (FeesTotal.value * discount.value) / 100 ;
        feesAfDis.value = FeesTotal.value - DisAmount;
        amountNotPaid.value = feesAfDis.value - paidAmount.value;
    }
}

//clear data
function clearData() {
    firstNameF.value = '';
    secondNameF.value = '';
    thirdNameF.value = '';
    lastNameF.value = '';
    id.value = '';
    sClass.value = '';
    sBranch.value = '';
    birthDate.value = '';
    nationality.value = '';
    motherName.value = '';
    address.value = '';
    health.value = '';
    FeesTotal.value = '';
    discount.value = '';
    feesAfDis.value = '';
    paidAmount.value = '';
    amountNotPaid.value = '';

}
//show data
function showData() {
    let table = '';
    for (let i = 0 ; i < dataStudent.length ; i++) {
        table += `
        <tr>
            <td>${dataStudent[i].firstName}</td>
            <td>${dataStudent[i].secondName}</td>
            <td>${dataStudent[i].thirdName}</td>
            <td>${dataStudent[i].lastName}</td>
            <td>${dataStudent[i].studentId}</td>
            <td>${dataStudent[i].studentClass}</td>
            <td>${dataStudent[i].studentBranch}</td>
            <td>${dataStudent[i].studentBirthDate}</td>
            <td>${dataStudent[i].studentNationality}</td>
            <td>${dataStudent[i].studentMother}</td>
            <td>${dataStudent[i].studentAddress}</td>
            <td>${dataStudent[i].studentHealth}</td>
         </tr>
        `
    }
    document.getElementById('tbody').innerHTML = table ;
}
//show fees
function showFees() {
    let tableTwo = '';
    for (let i = 0 ; i < dataStudent.length ; i++) {
        tableTwo += `
        <tr>
            <td>${dataStudent[i].firstName + ' ' + dataStudent[i].secondName + ' ' + dataStudent[i].thirdName + ' ' + dataStudent[i].lastName}</td>
            <td>${dataStudent[i].studentClass}</td>
            <td>${dataStudent[i].studentBranch}</td>
            <td>${dataStudent[i].studentFeesTotal}</td>
            <td>${dataStudent[i].studentDiscount}</td>
            <td>${dataStudent[i].studentFeesAfDis}</td>
            <td>${dataStudent[i].studentAmPaid}</td>
            <td>${dataStudent[i].studentAmNotPaid}</td>
        </tr>
        `
    }
    document.getElementById('tbodytwo').innerHTML = tableTwo;
}
//fees page show 
function showFeesPay() {
    let tableThree = '';
    for (let i = 0 ; i < dataStudent.length ; i++) {
        tableThree += `
        <tr>
            <td>${dataStudent[i].firstName + ' ' + dataStudent[i].secondName + ' ' + dataStudent[i].thirdName + ' ' + dataStudent[i].lastName}</td>
            <td>${dataStudent[i].studentClass}</td>
            <td>${dataStudent[i].studentBranch}</td>
            <td onclick="pay(${i})">+</td>
        </tr>
        `
    }
    document.getElementById('tbodythree').innerHTML = tableThree;
}
function showInfoFees(i) {
    let buttonFee = '';
    nameAddFess.value = dataStudent[i].firstName + ' ' + dataStudent[i].secondName + ' ' + dataStudent[i].thirdName + ' ' + dataStudent[i].lastName;
    amountOneFees.value = dataStudent[i].studentAmNotPaid;
    amountTwoFees.onkeyup = function() {
        buttonFee = `
        <button onclick="payMoney(${i})" id="agree-btn">تأكيد</button>
        `
        btnbtn.innerHTML = buttonFee;
    }
} 
function payMoney(i) {
    let payAmount = amountTwoFees.value ;
    dataStudent[i].studentAmPaid = String(+(dataStudent[i].studentAmPaid) + +payAmount);
    dataStudent[i].studentAmNotPaid = String(+(dataStudent[i].studentAmNotPaid) - +payAmount);
    amountOneFees.value = dataStudent[i].studentAmNotPaid;
    console.log(dataStudent[i].studentAmPaid);
    showFees() 
    localStorage.setItem('student',JSON.stringify(dataStudent));
    alert(":تم دفع مبلغ " + payAmount + " المتبقي هو: " + dataStudent[i].studentAmNotPaid);
    amountTwoFees.value= '';
}
function showDelete() {
    let tableFour = '';
    for (let i = 0 ; i < dataStudent.length ; i++) {
        tableFour += `
        <tr>
            <td>${dataStudent[i].firstName + ' ' + dataStudent[i].secondName + ' ' + dataStudent[i].thirdName + ' ' + dataStudent[i].lastName}</td>
            <td>${dataStudent[i].studentId}</td>
            <td onclick="deleteFuncction(${i})"><span class="material-symbols-outlined">
                delete
                </span>
            </td>
        </tr>
        `
    }
    document.getElementById('tbody-delete').innerHTML = tableFour ;
}
function deleteFuncction(i) {
    dataStudent.splice(i,1);
    localStorage.student = JSON.stringify(dataStudent);
    showDelete()
}
document.getElementById("exit").onclick = function() {
    console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
document.getElementById("exit2").onclick = function() {
    console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
document.getElementById("exit3").onclick = function() {
    console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
document.getElementById("exit4").onclick = function() {
    console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
document.getElementById("exit5").onclick = function() {
    console.log(this.parentElement);
    this.parentElement.style.display = 'none';
}
