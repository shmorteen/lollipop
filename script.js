let data = [];
function studentData(e) {
    e.preventDefault();
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("ph").value;
    var matricNumber = document.getElementById("matricNo").value;
  
    // var newfirstName = document.getElementById("nfname").value;
    // var newlastName = document.getElementById("nlname").value;
    // var newemail = document.getElementById("nemail").value;
    // var newphoneNumber = document.getElementById("nph").value;
    // var newmatricNumber = document.getElementById("nmatricNo").value;
    
    let newData={
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber,
        matricNumber:matricNumber,
        
    }
    if(newData.firstName != '' || newData.lastName != '' || newData.email != '' || newData.phoneNumber != '' || newData.matricNumber != ''){
    data.push(newData)
    }else{
        alert('Insert all missing fields')
    }
    
    document.getElementById("table-body").innerHTML= "";
    data.forEach((x, i)=>{
        let content = `<tr>
        <td>${i + 1}</td>
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.email}</td>
        <td>${x.phoneNumber}</td>
        <td>${x.matricNumber}</td>
        <td><button onclick="deleteData(event, ${i})"  type="button"  studentId="${i}" class="deleteBtn btn btn-primary btn-sm mt-2">delete</button></td>
        </tr>`
        document.getElementById("table-body").insertAdjacentHTML("beforeend", content)  
    });
    document.getElementById('myForm').reset();
    console.log(data)

}

function deleteData(e, i) {
    e.preventDefault();
    data.splice(i,1);
    console.log(data)
    document.getElementById("table-body").innerHTML= "";
    data.forEach((x, i)=>{
        let content = `<tr>
        <td>${i}</td>
        <td>${x.firstName}</td>
        <td>${x.lastName}</td>
        <td>${x.email}</td>
        <td>${x.phoneNumber}</td>
        <td>${x.matricNumber}</td>
        <td><button onclick="deleteData(event, ${i})"  type="button"  studentId="${i}" class="deleteBtn btn btn-primary btn-sm mt-2">delete</button></td>
        </tr>`
        document.getElementById("table-body").insertAdjacentHTML("beforeend", content)  
    });
}


// function editData(e, x, i){
//     e.preventDefault();
//     x.map(editData(x.firstName + x.lastName + x,email + x.phoneNumber + x.matricNumber, i));
//     alert("edit is working")
//      document.getElementById("table-body").innerHTML= "";
//     data.forEach((x, i)=>{
//         let content = `<tr>
//         <td>${i}</td>
//         <td>${x.firstName}</td>
//         <td>${x.lastName}</td>
//         <td>${x.email}</td>
//         <td>${x.phoneNumber}</td>
//         <td>${x.matricNumber}</td>
//         <td><button onclick="editData(event, ${i})"  type="button"  studentId="${i}" class="edit btn btn-primary btn-sm mt-2">edit</button>
//         <span><button type="button" class="edBtn btn btn-primary btn-sm mt-2">edit</button></span></td>  
//         </tr>`
//         document.getElementById("table-body").insertAdjacentHTML("beforeend", content)  
//     });

// }
{/* <td><button type="button" class="edBtn btn btn-primary btn-sm mt-2">edit</button> */}



