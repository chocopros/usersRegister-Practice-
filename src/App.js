import React, { useState } from "react"

import useForm from "./hooks/useForm"
import Input from "./components/Input"
import Card from "./components/Card/Card"
import Container from "./components/Container/Container"
import Button from "./components/Button/Button"



const App = () => {

  const [users, setUsers] = useState([])

  const [form, handleChange, reset] = useForm({ name: '', lastname: '', email: '' })

  const submit = e => {
    e.preventDefault()
    setUsers([
      ...users,
      form
    ])
    reset()
  }

  console.log(form, users)

  return (
    <div style={{marginTop: "15%"}}>
      <Container>
        <Card>
          <div style={{ padding: "20px" }}>
            <form onSubmit={submit}>

              {/* //> FIRST NAME */}
              <Input
                label="Nombre"
                name="name"
                placeholder=' --Your First Name-- '
                value={form.name}
                onChange={handleChange}
              />

              {/* //> SECOND NAME */}
              <Input
                label="Apellido"
                name="lastname"
                placeholder=' --Your Secund Name-- '
                value={form.lastname}
                onChange={handleChange}
              />

              {/* //> SECOND NAME */}
              <Input
                label="Correo"
                name="email"
                placeholder=' --Your Email-- '
                value={form.email}
                onChange={handleChange}
              />

              <Button>Enviar</Button>

            </form>
          </div>
        </Card>
        <Card>
          {
            users.length !== 0 ?
              <ul className="listregister">
                <h3> Users Register:</h3>
                {
                  users.map(user =>
                    <li key={user.email}>{`${user.name} ${user.lastname}: ${user.email}`}</li>
                  )
                }
              </ul>
              : null
          }
        </Card>
      </Container>
    </div>
  )


}

export default App