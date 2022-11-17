//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

let team = [

    barnett ={

        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    
    carol ={
    
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    
    gordon ={
    
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    
    lopez ={
    
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    
    estrada ={
    
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    
    ramos ={
    
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }

];

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


printTeam (team);
printCard (team)



function printTeam (team) {

    for (let i=0; i<team.length; i++) {

        console.log(
            `
            -------------------MEMBRO------------------------

                Nome: ${team[i].name}
                Ruolo: ${team[i].role}
                Foto: ${team[i].photo}

            -------------------------------------------------
            `
        )
    };
    
}

//MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

function printCard (team) {

    for (let i=0; i<team.length; i++) {

        document.getElementById("cardContainer").innerHTML += '<div class="col-12 col-md-4 col-xl-3 m-3 card bg-black pb-2 pt-2"><img src=' + "./img/" + team[i].photo + ' class="card-img-top" alt="..."><div class="card-body text-center text-bg-light"><h3>' + team[i].name + '</h3><h4>' + team[i].role + '</h4><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p></div></div>'
    };

}





