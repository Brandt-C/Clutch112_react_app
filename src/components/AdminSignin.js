import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AdminSignin() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/api/signin', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : e.target[0].value,
                password : e.target[1].value,
            })
        });
        const data = await res.json();
        console.log(data);
    }

  return (
    <div className="container justify-content-center">
        <h3>Admin Sign In</h3>
    <Form className="mt-auto mt-5" onSubmit={(e) => {handleSubmit(e)}}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

  )
}
