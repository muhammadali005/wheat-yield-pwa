import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); 

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/"); 
    }
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center py-5" style={{ minHeight: "100vh" }}>
        <Col md={8} lg={6}>
          <Card className="shadow-lg p-4">
            <h2 className="text-center mb-4" style={{ color: "#005C45" }}>
              Login to Your Account
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{color: "#005C45"}}>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{color: "#005C45"}}>Password</Form.Label>
                <InputGroup>
                  <FormControl
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    style={{color: "#005C45"}}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputGroup.Text
                    style={{ cursor: "pointer" }}
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" style={{backgroundColor:"#005C45"}} className="w-100 mb-3">
                Login
              </Button>

              <div className="text-center">
                <p useNavigate="#" style={{ color: "#5A4DAD", textDecoration: "none" }}>
                  Forgot your password?
                </p>
              </div>
            </Form>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Login;
