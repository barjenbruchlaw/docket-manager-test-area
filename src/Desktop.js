import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/shards-dashboards.1.1.0.css"
import "./styles/global.scss"
import useBootstrap from "./hooks/useBootstrap"

import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  Form,
  FormInput,
  FormSelect,
  ListGroupItem,
  ListGroup,
  CardBody,
} from "shards-react"
import { useParams, useNavigate } from "react-router-dom"
import PageTitle from "./components/common/PageTitle"
// import useAlert from "./hooks/alerts"
// import ActionButtons from "./components/common/ActionButtons"

const getCurrentDateTime = () => {
  // YYYY-MM-DDTHH:mm:ss
  // "2022-08-12T12:08"
  // Retain the number of digits per section, the zero padding is required
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }T${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`
}

const Desktop = () => {
    return (
        <div className="App">
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle
                sm="4"
                title="Desktop"
                subtitle="
                "
                className="text-sm-left"
                />
            </Row>

            <Row className="mb-4">
              <Col>
              <Card>
                <CardHeader className="border-bottom"><Row><h5>Cases Accepted & Not Filed</h5></Row></CardHeader>
                <CardBody>
                <table className="table mb-0 hover">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Accepted on
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident 1
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style={{color: "red"}}>
                  <td>10/1/2022</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                </tr>
                <tr>
                  <td>10/13/2022</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                </tr>
                </tbody>
                </table>
                </CardBody>
              </Card>
              </Col>
              <Col>
              <Card>
              <CardHeader className="border-bottom"><h5>Card 2</h5></CardHeader>
              <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
              </Card>
              </Col>
            </Row>
            <Row>
              <Col>
            <Card>
              <CardHeader className="border-bottom"><h5>Card 3</h5></CardHeader>
              <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
              </Card>
              </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Desktop 
