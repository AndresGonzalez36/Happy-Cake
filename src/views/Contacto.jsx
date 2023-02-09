import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Contacto = () => {
  return (
    <div className='formulario'>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
        <Form.Text className="text-muted">
         
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control placeholder="" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  )
}

export default Contacto