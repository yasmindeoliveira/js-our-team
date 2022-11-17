//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

let team = [

    barnett ={

        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    
    carol ={
    
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    
    gordon ={
    
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    
    lopez ={
    
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    
    estrada ={
    
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    
    ramos ={
    
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }

];

//MILESTONE 1: Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


stampaTeam (team);



function stampaTeam (team) {

    for (let i=0; i<team.length; i++) {

        console.log(
            `
            -------------------MEMBRO------------------------

                Nome: ${team[i].nome}
                Ruolo: ${team[i].ruolo}
                Foto: ${team[i].foto}
                
            -------------------------------------------------
            `
        )
    };
    
}
