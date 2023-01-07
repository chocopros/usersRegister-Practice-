import useForm from "./hooks/useForm"
import Input from "./components/Input"

const App = () => {

  const [form, handleChange] = useForm( { name: '' } )
  console.log(form)

  return(

    <form>
      <Input
        label="Nombre"
        name="name"
        placeholder=' --Your Name-- '
        value={form.name}
        onChange={handleChange} 
       />
    </form>

  )


}

export default App