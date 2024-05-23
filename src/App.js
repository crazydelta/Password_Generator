import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Row, Col} from 'react-bootstrap'

function App() {
  const [length, setLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const generatePassword = () => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let characterPool = ''

    if (includeUppercase) characterPool += uppercaseLetters
    if (includeLowercase) characterPool += lowercaseLetters
    if (includeNumbers) characterPool += numbers
    if (includeSymbols) characterPool += symbols

    if (characterPool.length === 0) return

    let generatedPassword = ''
    for (let i = 0; i < length; i += 1 ) {
      const randomIndex = Math.floor(Math.random() * characterPool.length)
      generatedPassword += characterPool[randomIndex]
    }

    setPassword(generatedPassword)
  }

  return (
    <Container className="mt-5">
      <h1 className="text-center">Password Generator</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPasswordLength">
          <Form.Label column sm={2}>
            Password Length
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="number"
              value={length}
              onChange={e => setLength(e.target.value)}
              min="1"
            />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIncludeUppercase">
          <Form.Check
            type="checkbox"
            label="Include Uppercase Letters"
            checked={includeUppercase}
            onChange={e => setIncludeUppercase(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIncludeLowercase">
          <Form.Check
            type="checkbox"
            label="Include Lowercase Letters"
            checked={includeLowercase}
            onChange={e => setIncludeLowercase(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIncludeNumbers">
          <Form.Check
            type="checkbox"
            label="Include Numbers"
            checked={includeNumbers}
            onChange={e => setIncludeNumbers(e.target.checked)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIncludeSymbols">
          <Form.Check
            type="checkbox"
            label="Include Symbols"
            checked={includeSymbols}
            onChange={e => setIncludeSymbols(e.target.checked)}
          />
        </Form.Group>

        <Button variant="primary" onClick={generatePassword}>
          Generate Password
        </Button>
      </Form>

      {password && (
        <div className="mt-3">
          <h3>Your Generated Password:</h3>
          <p className="text-monospace">{password}</p>
        </div>
      )}
    </Container>
  )
}

export default App
