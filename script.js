const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.queySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save  )

function add (){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    
  alert("Dia já incluso 🔴")
  return
  }
  alert("Dia adicionado com sucesso 🟢")
  nlwSetup.addDay("01/01")
}

function save(){
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

// const data = {
//   run: ["01-01", "01-02", "01-06"],
//   takePills: ["01-01", "01-03", "01-05"],
//   books: ["01-01", "01-02", "01-04", "01-05", "01-06"],
// }

nlwSetup.setData(data)
nlwSetup.load()
