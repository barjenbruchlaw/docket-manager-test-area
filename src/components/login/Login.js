import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  CardHeader,
  FormInput,
  Card,
  Form,
  Button,
} from "shards-react";
import axios from "../../libs/axios";
import useAlert from "../../hooks/alerts";
import useUser from "../../hooks/useUser";

function Login() {
  const { dispatchAlert } = useAlert();
  const userContext = useUser();

  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loginUser.email && !loginUser.password) {
      dispatchAlert({
        type: "danger",
        message: "Please enter email and password",
        open: true,
        timeout: 4000,
      });
      return;
    }

    if (!loginUser.email) {
      dispatchAlert({
        type: "danger",
        message: "Please enter email",
        open: true,
        timeout: 4000,
      });
      return;
    }

    if (!loginUser.password) {
      dispatchAlert({
        type: "danger",
        message: "Please enter password",
        open: true,
        timeout: 4000,
      });
      return;
    }

    axios({
      url: "/auth/login",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
      },
      data: {
        email: loginUser.email,
        password: loginUser.password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          dispatchAlert({
            type: "danger",
            message: res.data.message,
            open: true,
            timeout: 4000,
          });
          return;
        }
        dispatchAlert({
          type: "success",
          message: "User logged in successfully",
          open: true,
          timeout: 4000,
        });
        userContext.setUser(res.data);
        userContext.reload();
      })
      .catch((err) => {
        console.log(err);
        dispatchAlert({
          type: "danger",
          message: err,
          open: true,
          timeout: 4000,
        });
      });
  };

  return (
    <Container className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md="6">
          <Card>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Login</h6>
            </CardHeader>
            <Form
              className="p-4"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
            >
              <label htmlFor="email">Email</label>
              <FormInput
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={loginUser.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
              <FormInput
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginUser.password}
                onChange={handleChange}
                required
              />
              <Row className="mt-4">
                <Col className="text-right">
                  <Button onClick={handleSubmit}>Login</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
