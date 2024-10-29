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

//! DATI

const cards=document.getElementById("our-team-grid");
let cardHtml =``;

ourTeam.forEach((teamMembers)=>{
    const singleCardMember=`
    <div class="stylecard card m-3 p-0" style="max-width: 400px;">
            <div class="row g-0">
                 <div class="col-md-4">
                    <img src="./img/${teamMembers.image}" class="img-fluid rounded-start" alt="...">
                 </div>
             <div class="col-md-8">
                 <div class="card-body">
                    <p class="card-title fw-bold">${teamMembers.name}</p>
                    <p class="card-text ">${teamMembers.role}</p>
                    <a href="mailto" class="card-text text-decoration-none">${teamMembers.email}</a>
                 </div>
             </div>
        </div>
    </div>

    `
    cardHtml +=singleCardMember;
    console.log(cardHtml);
    
})

cards.innerHTML= cardHtml;



