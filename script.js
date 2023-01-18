const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-06"],
  takePills: ["01-01", "01-03", "01-05"],
  books: ["01-01", "01-02", "01-04", "01-05", "01-06"],
}

nlwSetup.setData(data)
nlwSetup.load()
