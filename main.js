//! VALORI

const ourTeam= [
    {
        name:"Marco",
        role:"Designer",
        email:"marcobianchi@team.com",
        image:"male1.png"
    },
    {
        name:"Laura Rossi",
        role:"Front-end Developer",
        email:"laurarossi@team.com",
        image:"female1.png"
    },
    {
        name:"Giorgio Verdi",
        role:"Back-endDeveloper",
        email:"giorgioverdi@team.com",
        image:"male2.png"
    },
    {
        name:"Marta Ipsum",
        role:"SEO Specialist",
        email:"laurarossi@team.com",
        image:"female2.png"
    },
    {
        name:"Roberto Lorem",
        role:"SEO Specialist",
        email:"robertolorem@team.com",
        image:"male3.png"
    },
    {
        name:"Marta Ipsum",
        role:"SEO Specialist",
        email:"laurarossi@team.com",
        image:"female3.png"
    }
]





generateNewCard = (name,role,email,image) => {
    return`
    <div class="stylecard card m-3 p-0" style="max-width: 400px;">
            <div class="row g-0">
                 <div class="col-md-4">
                    <img src="./img/${image}" class="img-fluid rounded-start" alt="...">
                 </div>
             <div class="col-md-8">
                 <div class="card-body">
                    <p class="card-title fw-bold">${name}</p>
                    <p class="card-text ">${role}</p>
                    <a href="mailto" class="card-text text-decoration-none">${email}</a>
                 </div>
             </div>
        </div>
    </div>

    `

};

const printNewCardMember=(cards, teamMembers)=>{
    let cardHtml =``;

    teamMembers.forEach((teamMembers) => {
        const {name, role, email, image} = teamMembers;
        const singleCardMember = generateNewCard(name,role,email, image);
        cardHtml += singleCardMember;
        //console.log(cardHtml);
        
    })
    cards.innerHTML= cardHtml;
}
const cards=document.getElementById("our-team-grid");
printNewCardMember(cards,ourTeam);
//! dati input
const inputName =document.getElementById("name")
const inputRole =document.getElementById("role")
const inputEmail =document.getElementById("email")
const inputImage =document.getElementById("image")
const inputBtnAdd =document.getElementById("add-members")


inputBtnAdd.addEventListener("click", () => {
const name =inputName.value;
const role =inputRole.value;
const email =inputEmail.value;
const image =inputImage.value;

const newMember = { name , role , email , image };

ourTeam.push(newMember);

printNewCardMember(cards,ourTeam);


//console.log(ourTeam);

})





