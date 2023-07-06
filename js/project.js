let projects = []; // Array untuk menyimpan proyek-proyek

function ProjectSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("input-porject-title").value;
    let desc = document.getElementById("input-description").value;
    let image = document.getElementById("input-blog-image").files; // Mengambil file yang dipilih
    let startDate = document.getElementById("input-project-startdate").value;
    let endDate = document.getElementById("input-project-enddate").value;



    if (name == "") {
        return alert("Please input your project name or title");
      } else if (startDate == "") {
        return alert("When did you start this project?");
      } else if (endDate == "") {
        return alert("When did you end this project?");
      } else if (desc == "") {
        return alert("Please describe this project.");
      } else if (image == "") {
        return alert("Please attach file image of your project.");
      }


    const reactIc = `<i class="fa-brands fa-react card_ictx"></i>`;
    const angularIc = `<i class="fa-brands fa-angular card_ictx"></i>`;
    const vueIc = `<i class="fa-brands fa-vuejs card_ictx"></i>`;
    const nodeIc =`<i class="fa-brands fa-node-js card_ictx"></i>`;


    let node = document.getElementById("input-node").checked ? nodeIc : "";
    let react = document.getElementById("input-react").checked ? reactIc : "";
    let angular = document.getElementById("input-angular").checked ? angularIc : "";
    let vue = document.getElementById("input-vue").checked ? vueIc : "";
    
    image = URL.createObjectURL(image[0]); // Menghasilkan URL dari file

    let project = {
        name: name,
        desc: desc,
        image,
        node,
        react,
        angular,
        vue,
        startDate,
        endDate,
    };

    let hidElement = document.getElementById("hid");

    // Add the "hid" class to the element
    hidElement.classList.add("hid");
    

    projects.push(project);

    // Panggil fungsi lain atau lakukan manipulasi data lain dengan menggunakan nilai projects di sini
    processProjects();
    console.log(endDate)
    
}


function processProjects() {
    let test = document.getElementById("test2").innerHTML=''
    for (let i = 0; i < projects.length; i++) {
        let projectName = projects[i].name;
        let projectDesc = projects[i].desc;
        let projectImage = projects[i].image;
        let projectReact = projects[i].react;
        let projectVue = projects[i].vue;
        let projectAngular = projects[i].angular;
        let projectNode = projects[i].node;
        let projectDate = projects[i].postDate;
        let projectStart = projects[i].startDate;
        let projectEnd = projects[i].endDate;
        


        document.getElementById("test2").innerHTML += `
 
        <div class="crd_card" href="InProject.html">
        <a href="InProject.html">
            <div class="card_div">
                <div class="card_div1">
                    <img src="${projectImage}" alt="photo" class="card_div1-img">
                </div>
                <h1 class="card_h1">${projectName}</h1>
                <p class="card_p1">${projectStart} Sampai ${projectEnd}</p>
                <p class="card_p2">${projectDesc}</p>
                <div class="card_ic">
                    ${projectReact}
                    ${projectVue}
                    ${projectAngular}
                    ${projectNode}
                </div>
                <div class="card_btn1">
                    <button class="card_btn" >Edit</button>
                    <button class="card_btn" >Delet</button>
                </div>
            </div>
        </a>
    </div>`
        // Lakukan sesuatu dengan nilai proyek, seperti mencetaknya ke tampilan atau melakukan operasi lain
        console.log("Project Name:", projectName);
        console.log("Project Description:", projectDesc);
    }
    
}



// Function buat saat Waktu sudah dipilih tidak bisa di pilih lagi
let startDateInput = document.getElementById("input-project-startdate");
let endDateInput = document.getElementById("input-project-enddate");

startDateInput.addEventListener("change", function() {
  endDateInput.min = startDateInput.value;
});