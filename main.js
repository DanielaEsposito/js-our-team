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

ourTeam.forEach((TeamMembers)=>{
    const singleCardMember=`
    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="./img/" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <p class="card-title"></p>
                                    <p class="card-text"></p>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>

    `
    cardHtml +=singleCardMember;
    console.log(cardHtml);
    
})




