
  let participantes = [
   {
    nome: "Mayk Brito",
    email: "mayk@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn:null
   },
   {
    nome: "Diego Fernandes",
    email: "diego@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn: null
  },
  {
    nome: "Ana Silva",
    email: "ana@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 10, 30),
    dataCheckIn: null
  },
  {
    nome: "José Oliveira",
    email: "jose@gmail.com",
    dataInscricao: new Date(2024, 2, 23, 11, 15),
    dataCheckIn: null
  },
  {
    nome: "Carla Santos",
    email: "carla@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 9, 45),
    dataCheckIn: new Date(2024, 2, 26, 10, 0),
  },
  {
    nome: "Pedro Lima",
    email: "pedro@gmail.com",
    dataInscricao: new Date(2024, 2, 24, 10, 0),
    dataCheckIn: new Date(2024, 2, 26, 10, 30),
  },
  {
    nome: "Mariana Costa",
    email: "mariana@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 8, 30),
    dataCheckIn: new Date(2024, 2, 27, 9, 0),
  },
  {
    nome: "Luiz Oliveira",
    email: "luiz@gmail.com",
    dataInscricao: new Date(2024, 2, 25, 9, 0),
    dataCheckIn: new Date(2024, 2, 27, 9, 30),
  },
  {
    nome: "Fernanda Pereira",
    email: "fernanda@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 14, 15),
    dataCheckIn: new Date(2024, 2, 28, 15, 0),
  },
   {
    nome: "Ricardo Santos",
    email: "ricardo@gmail.com",
    dataInscricao: new Date(2024, 2, 26, 15, 0),
    dataCheckIn: new Date(2024, 2, 28, 15, 30),
   }
]

const criarnovoparticipante = (participante) => {
const dataInscricao = dayjs(Date.now()). to (participante.dataInscricao) 
 
let dataCheckIn = dayjs(Date.now())
 .to(participante.dataCheckIn)

if(participante.dataCheckIn==null){
  dataCheckIn= `
  <button 
  data-email="${participante.email}"
  onclick="fazerCheckIn(event)"
  >
  Confirmar check-in
  </button>
  `
}

return `
 <tr>
 <td>
   <strong>
    ${participante.nome}
   </strong>
   <br>
    <small>
     ${participante.email}
    </small>
  </td>
  <td>${dataInscricao}</td>
  <td>${dataCheckIn}</td>
 </tr>
 `
}

const atualizarlista = (participantes) =>{
 let output=""
 for (let participante of participantes) 
 {
  output=output + criarnovoparticipante(participante)
  }
  
  document
  .querySelector("tbody")
  .innerHTML= output
}
atualizarlista(participantes)

const adicionarParticipante = (event) =>{
 event.preventDefault()  

 const dadosDoFormulario = new FormData(event.target)


 
 const participante = {
  nome: dadosDoFormulario.get('nome'),
  email:dadosDoFormulario.get('email'),
  dataInscricao: new Date(),
  dataCheckIn: null
 }

const participanteExiste = participantes.find(
  (p) => { 
  return p.email == participante.email
  }
)
if (participanteExiste){
  alert("Email já cadastrado")
  return
}
 participantes =[participante,...participantes]
 atualizarlista(participantes)




 event.target.querySelector('[name="nome]').value =""
 event.target.querySelector('[name="email]').value =""

}

const fazerCheckIn = (event) =>{
 const mensagemConfirmação = "tem certeza que deseja fazer o check-in?"
 if(confirm(mensagemConfirmação)==false){
  return
 }


 const participante = participantes.find((p)=>{return p.email == event.target.dataset.email
})

participante.dataCheckIn = new Date()
atualizarlista(participantes)

}
  