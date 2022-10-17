import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/shards-dashboards.1.1.0.css"
import "./styles/global.scss"

// import useBootstrap from "./hooks/useBootstrap"

import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  // Button,
  CardHeader,
  // Form,
  // FormInput,
  // FormSelect,
  // ListGroupItem,
  // ListGroup,
  CardBody,
} from "shards-react"
// import { useParams, useNavigate } from "react-router-dom"
import PageTitle from "./components/common/PageTitle"
// import useAlert from "./hooks/alerts"
// import ActionButtons from "./components/common/ActionButtons"

// const getCurrentDateTime = () => {
//   // YYYY-MM-DDTHH:mm:ss
//   // "2022-08-12T12:08"
//   // Retain the number of digits per section, the zero padding is required
//   const date = new Date()
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   return `${year}-${month < 10 ? "0" + month : month}-${
//     day < 10 ? "0" + day : day
//   }T${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`
// }

const Desktop = () => {
    return (
        <div className="App">
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle
                sm="4"
                title="Desktop"
                subtitle="Main page"
                className="text-sm-left"
                />
            </Row>

            <Row className="mb-4">
              <Col sm={{ size: 10}}>
            <Card>
              <CardHeader className="border-bottom"><h5>Upcoming Hearings</h5></CardHeader>
              <CardBody>
                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead className="bg-light">
                  <tr style={{backgroundColor: "#E5E4E2"}}>
                  <th scope="col" className="border-0 font-bold" style={{fontSize: "medium"}}>
                      Clay County, MO
                  </th>
                  <th scope="col" colspan='5' className="border-0 font-bold" style={{fontSize: "medium"}}>
                      October 31, 2022
                  </th>
                  </tr>                  
                  <tr style={{backgroundColor: "#E5E4E2"}}>
                  <td className="border-2" style={{fontSize: "medium"}}>
                      Division 9
                  </td>
                  <td className="border-2" colspan='5' style={{fontSize: "medium"}}>
                      1:30 PM
                  </td>
                  </tr>                  
                  <tr>
                    <th scope="col" className="border-0">
                      Case Number
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                    <th scope="col" className="border-0">
                      Date Service <br /> Return Filed
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                  <td>10/17/2022</td>
                  
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                  <td>10/17/2022</td>
                </tr>
                <tr  style={{backgroundColor: "yellow"}}>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Jones</td>
                  <td>12345 Main Street #303</td>
                  <td></td>
                </tr>
                </tbody>
                </table>

                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead className="bg-light">
                  <tr style={{backgroundColor: "#E5E4E2"}}>
                  <th scope="col" className="border-0 font-bold" style={{fontSize: "medium"}}>
                      Jackson County, MO
                  </th>
                  <th scope="col" colspan='5' className="border-0 font-bold" style={{fontSize: "medium"}}>
                      November 3, 2022
                  </th>
                  </tr>                  
                  <tr style={{backgroundColor: "#E5E4E2"}}>
                  <td className="border-2" style={{fontSize: "medium"}}>
                      Division 26
                  </td>
                  <td className="border-2" colspan='5' style={{fontSize: "medium"}}>
                      9:00 AM
                  </td>
                  </tr>                  
                  <tr>
                    <th scope="col" className="border-0">
                      Case Number
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                    <th scope="col" className="border-0">
                      Date Service <br /> Return Filed
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                  <td>10/17/2022</td>
                  
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                  <td>10/17/2022</td>
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Jones</td>
                  <td>12345 Main Street #303</td>
                  <td>10/17/2022</td>
                </tr>
                </tbody>
                <thead>
                <tr style={{backgroundColor: "#E5E4E2"}}>
                  <td className="border-2" style={{fontSize: "medium"}}>
                      Division 31
                  </td>
                  <td className="border-2" colspan='5' style={{fontSize: "medium"}}>
                      9:30 AM
                  </td>
                  </tr>                  
                  <tr>
                    <th scope="col" className="border-0">
                      Case Number
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                    <th scope="col" className="border-0">
                      Date Service <br /> Return Filed
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                  <td>10/17/2022</td>
                  
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                  <td>10/17/2022</td>
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Jones</td>
                  <td>12345 Main Street #303</td>
                  <td>10/17/2022</td>
                </tr>
                </tbody>
                </table>

                </CardBody>
              </Card>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col sm={{ size: 5}}>
              <Card>
                <CardHeader className="border-bottom"><Row><h5>Cases Accepted But Not Filed</h5></Row></CardHeader>
                <CardBody>
                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Accepted
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style={{backgroundColor: "yellow"}}>
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
              <Col sm={{ size: 5}}>
              <Card>
              <CardHeader className="border-bottom"><h5>Cases Received But Not Accepted/Held/Rejected</h5></CardHeader>
              <CardBody>
                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      Received
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style={{backgroundColor: "yellow"}}>
                  <td>9/12/2022</td>
                  <td>ABC Property Management, LLC</td>
                  <td>George Smith</td>
                  <td>12345 Main Street #201</td>
                </tr>
                <tr>
                  <td>10/14/2022</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Ginger Jones</td>
                  <td>12345 Main Street #302</td>
                </tr>
                </tbody>
                </table>
                </CardBody>
              </Card>
              </Col>
            </Row>
            <Row>
            <Col sm={{ size: 5}}>
              <Card>
              <CardHeader className="border-bottom"><h5>Cases Not Served</h5></CardHeader>
              <CardBody>
                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead>
                <tr>
                    <th scope="col" className="border-0">
                      Case Number
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                    <th scope="col" className="border-0">
                      Hearing Date
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr style={{backgroundColor: "yellow"}}>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                  <td>10/31/2022</td>
                  
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                  <td>11/10/2022</td>
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Jones</td>
                  <td>12345 Main Street #303</td>
                  <td>11/10/2022</td>
                </tr>
                </tbody>
                </table>
                </CardBody>
              </Card>
              </Col>
              <Col sm={{ size: 5}}>
              <Card>
              <CardHeader className="border-bottom"><h5>Upcoming Trials</h5></CardHeader>
              <CardBody>
                <table className="table mb-0" style={{fontSize: "small"}}>
                <thead>
                <tr>
                    <th scope="col" className="border-0">
                      Case Number
                    </th>
                    <th scope="col" className="border-0">
                      Property Manager
                    </th>
                    <th scope="col" className="border-0">
                      Resident
                    </th>
                    <th scope="col" className="border-0">
                      Address
                    </th>
                    <th scope="col" className="border-0">
                      Trial Date
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Smith</td>
                  <td>12345 Main Street #101</td>
                  <td>10/31/2022</td>
                  
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>Fred Jones</td>
                  <td>12345 Main Street #202</td>
                  <td>11/10/2022</td>
                </tr>
                <tr>
                  <td>22CY-CV999999</td>
                  <td>ABC Property Management, LLC</td>
                  <td>John Jones</td>
                  <td>12345 Main Street #303</td>
                  <td>11/10/2022</td>
                </tr>
                </tbody>
                </table>
                </CardBody>
              </Card>
              </Col>
            </Row>
            
            </Container>
        </div>
    )
}

export default Desktop 
