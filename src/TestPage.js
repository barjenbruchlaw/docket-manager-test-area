/* eslint-disable react-hooks/exhaustive-deps */
/* eslint jsx-a11y/anchor-is-valid: 0 */

import React, { useEffect, useState } from "react";
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
} from "shards-react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "./components/common/PageTitle";
// import useAlert from "./hooks/alerts";
// import ActionButtons from "./components/common/ActionButtons";

const getCurrentDateTime = () => {
  // YYYY-MM-DDTHH:mm:ss
  // "2022-08-12T12:08"
  // Retain the number of digits per section, the zero padding is required
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }T${hour < 10 ? "0" + hour : hour}:${minute < 10 ? "0" + minute : minute}`;
};

{/*const initialFormState = {
  residents: [
    {
      first_name: null,
      middle_name: null,
      last_name: null,
      suffix: null,
    },
  ],
  active: "",
  accepted: "",
  on_hold: "",
  on_hold_reason: null,
  rejected: "",
  rejected_reason: null,
  notified_at: null,
  pm_internal_file_number: null,
  street_address: null,
  street_address2: null,
  city: null,
  state: null,
  zip: null,
  phone: null,
  jurisdiction_id: null,
  attorney: null,
  monthly_rent_amount: null,
  monthly_rent_due_date: null,
  balance: null,
  balance_date: null,
  is_a_squatter: "",
  is_a_holdover_tenant: "",
  is_for_a_lease_violation: "",
  is_an_emergency_eviction: "",
  prelitigation_notice_date: null,
  date_petition_filed: null,
  date_petition_accepted: null,
  court_case_number: null,
  hearings: [],
  judge_id: null,
  judgment_date: null,
  judgment_rent_balance: null,
  placement_late_balance: null,
  judgment_utility_balance: null,
  judgment_additional_balance: null,
  judgment_additional_amount_nature: null,
  judgment_attorneys_fee: null,
  judgment_pps_cost: null,
  judgment_court_cost: null,
  judgment_total_due: null,
  case_status: [
    {
      description: null,
      datetime: getCurrentDateTime(),
      staff: null,
    },
  ],
  date_served: null,
  time_served: null,
  method_of_service: null,
  person_served: null,
  owner_id: "",
  placement_date: null,
  utility_balance_at_placement: null,
  additional_balance_at_placement: null,
  reason_additional_balance: null,
  total_balance_at_placement: null,
  date_squatter_notice: null,
  date_holdover_notice: null,
  date_lease_violation: null,
  section_lease_violated: null,
  description_lease_violated: null,
  date_lease_violation_notice: null,
  incident_date: null,
  incident_time: null,
  incident_description: null,
  date_emergency_eviction_notice: null,
  dismissal_request: null,
  dismissal_requester: null,
  dismissal_date: null,
  updated_ledger_request: null,
  updated_ledger_requester: null,
  writ_request: null,
  writ_requester: null,
  writ_date: null,
  date_summons_sent_to_pps: null,
  date_return_filed_with_court: null,
  date_return_accepted_by_court: null,
  failure_to_pay_rent: "",
};

const TestPage = () => {
  let params = useParams();
  const [formState, setFormState] = useState(initialFormState);
  const [caseID, setCaseID] = useState(0);
  const [formLoading, setFormLoading] = useState(false);
  const [jurisdictions, setJurisdictions] = useState([]);
  const [judges, setJudges] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [owners, setOwners] = useState([]);
  const [createdBy, setCreatedBy] = useState({
    name: "",
    id: "",
  });
  const [updatedBy, setUpdatedBy] = useState({
    name: "",
    id: "",
  });
//   const { user, hasRole } = useUser();
//   const organization_id =
//     user.organizations?.length > 0 && user.organizations[0]?.id;
  const [requiredFields, setRequiredFields] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState([]);
//   const { dispatchAlert } = useAlert();

  const [case_status, setCaseStatus] = useState({
    description: null,
    datetime: getCurrentDateTime(),
    staff: null //user.name,
  });

  const [organization, setOrganization] = useState({
    name: "",
    id: "",
  });

  const [hearing, setHearing] = useState({
    date: "",
    trial: null,
  });

//   useEffect(() => {
//     setErrors(validateForm(formState, requiredFields));
//     if (formState.jurisdiction_id) {
//       getJudges(formState.jurisdiction_id).then((res) => {
//         setJudges(res);
//       });
//     }
//   }, [formState]);

//   useEffect(() => {
//     getCase(organization_id, params.case_id);

//     setFormState(initialFormState);

//     if (requiredFields.length < 1) {
//       getValidation("cases", {
//         organization_id,
//       }).then((res) => {
//         const newRequiredFields = Object.keys(res.rules).filter((key) =>
//           res.rules[key].includes("required")
//         );
//         setRequiredFields(newRequiredFields);
//         setErrors(validateForm(formState, newRequiredFields));
//       });
//     }
//   }, [params.case_id]);

//   const getCaseDocuments = async (organization_id, case_id) => {
//     const newDocuments = await getDocuments(organization_id, case_id);
//     setDocuments(newDocuments);
//   };

//   useEffect(async () => {
//     if (jurisdictions.length < 1) {
//       const newJurisdictions = await getJurisdictions();
//       setJurisdictions(newJurisdictions);
//     }
//     if (owners.length < 1) {
//       const newOwners = await getOwners(organization_id);
//       setOwners(newOwners);
//     }
//     if (documents.length < 1) {
//       getCaseDocuments(organization_id, params.case_id);
//     }
//   }, []);

//   const getCase = (organizationID, caseID) => {
//     axios
//       .get(casesGetPrefix(organizationID, caseID))
//       .then((res) => {
//         setFormState({
//           ...formState,
//           ...res.data.data,
//           case_status: JSON.parse(res.data.data.case_status),
//           residents:
//             res.data.data.residents.length > 0
//               ? res.data.data.residents
//               : [
//                   {
//                     first_name: null,
//                     last_name: null,
//                     middle_name: null,
//                     suffix: null,
//                   },
//                 ],
//           hearings:
//             res.data.data.hearings.length > 0
//               ? res.data.data.hearings
//               : [],
//         });
//         setCaseID(res.data.data.id);
//         getCaseDocuments(organizationID, params.case_id);
//         getUser(res.data.data.created_by).then((res) => {
//           setCreatedBy(res);
//         });
//         getUser(res.data.data.updated_by).then((res) => {
//           setUpdatedBy(res);
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//         dispatchAlert({
//           type: "danger",
//           message: "Error getting case: " + err.message,
//           open: true,
//           timeout: 5000,
//         });
//         if (err.response.status === 404) {
//           navigate("/cases");
//         }
//       });
//   };

//   useEffect(() => {
//     if (formState.organization_id) {
//       getOrganization(formState.organization_id).then((res) => {
//         setOrganization(res);
//       });
//     }
//   }, [formState.organization_id]);

  //  handleChange for form state
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  //  handleSubmit for form state
  const handleSubmit = (e) => {
    // e.preventDefault();
    // setFormLoading(true);

    // if (errors.length > 0) {
    //   dispatchAlert({
    //     type: "danger",
    //     message:
    //       "Please fill out required fields: " +
    //       errors.map((err) => err.formatedName).join(", "),
    //     open: true,
    //   });
    //   setFormLoading(false);
    //   return;
    // }
    // axios
    //   .put(casesPutPrefix(organization_id, params.case_id), {
    //     ...formState,
    //     organization_id,
    //   })
    //   .then((res) => {
    //     if (res.data.errors?.length > 0) {
    //       dispatchAlert({
    //         type: "danger",
    //         message: res.data.message,
    //         open: true,
    //         timeout: 4000,
    //       });
    //       formLoading(false);
    //       return;
    //     }
    //     dispatchAlert({
    //       type: "success",
    //       message: "Case updated successfully",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     navigate("/cases");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatchAlert({
    //       type: "danger",
    //       message: "Error updating case",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     getCase();
    //   });

  };

  const formatDate = (date) => {
    // make 2022-04-07T23:33:13.000000Z	into 7/4/2022 23:33:13
    const dateArr = date.split("T");
    const dateArr2 = dateArr[0].split("-");
    return `${dateArr2[1]}/${dateArr2[2]}/${dateArr2[0]} ${
      dateArr[1]?.split(".")[0]
    }`;
  };

  const softDeleteDocument = (organization_id, case_id, id) => {
    // axios({
    //   url: documentsDisablePrefix(organization_id, case_id, id),
    //   method: "POST",
    // })
    //   .then((res) => {
    //     if (res.data.data.error) {
    //       dispatchAlert({
    //         open: true,
    //         type: "danger",
    //         message: res.data.data.error,
    //         timeout: 4000,
    //       });
    //       return;
    //     }
    //     dispatchAlert({
    //       open: true,
    //       type: "success",
    //       message: "Document deleted successfully",
    //       timeout: 4000,
    //     });
    //     getCase(organization_id, case_id);
    //   })
    //   .catch((err) => {
    //     dispatchAlert({
    //       open: true,
    //       type: "danger",
    //       message: err,
    //       timeout: 4000,
    //     });
    //   });
  };

  const hardDeleteDocument = (organization_id, case_id, id) => {
    // axios({
    //   url: documentsDeletePrefix(organization_id, case_id, id),
    //   method: "DELETE",
    // })
    //   .then((res) => {
    //     if (res.data.data.error) {
    //       dispatchAlert({
    //         open: true,
    //         type: "danger",
    //         message: res.data.data.error,
    //         timeout: 4000,
    //       });
    //       return;
    //     }
    //     dispatchAlert({
    //       open: true,
    //       type: "success",
    //       message: "Document deleted successfully",
    //       timeout: 4000,
    //     });
    //     getCase(organization_id, case_id);
    //   })
    //   .catch((err) => {
    //     dispatchAlert({
    //       open: true,
    //       type: "danger",
    //       message: err,
    //       timeout: 4000,
    //     });
    //   });
  };

  const handleRestore = (organization_id, case_id, document_id) => {
    // axios({
    //   url: documentRestorePrefix(organization_id, case_id, document_id),
    //   method: "POST",
    // })
    //   .then((res) => {
    //     if (res.data.data.error) {
    //       dispatchAlert({
    //         open: true,
    //         type: "danger",
    //         message: res.data.data.error,
    //         timeout: 4000,
    //       });
    //       return;
    //     }
    //     dispatchAlert({
    //       type: "success",
    //       message: "Case restored successfully",
    //       timeout: 4000,
    //       open: true,
    //     });
    //     getCase(organization_id, case_id);
    //   })
    //   .catch((err) => {
    //     dispatchAlert({
    //       type: "danger",
    //       message: err,
    //       timeout: 4000,
    //       open: true,
    //     });
    //   });
  };

  useEffect(() => {
    const fields = [
      formState.judgment_rent_balance,
      formState.judgment_utility_balance,
      formState.judgment_additional_balance,
      formState.judgment_attorneys_fee,
      formState.judgment_pps_cost,
      formState.judgment_court_cost,
    ];
    const total = fields.reduce((acc, curr) => {
      return acc + (curr ? parseFloat(curr) : 0);
    }, 0);

    setFormState({
      ...formState,
      judgment_total_due: total,
    });
  }, [
    formState.judgment_rent_balance,
    formState.judgment_utility_balance,
    formState.judgment_additional_balance,
    formState.judgment_attorneys_fee,
    formState.judgment_pps_cost,
    formState.judgment_court_cost,
    formState.judgment_total_due,
  ]);

  useEffect(() => {
    const fields = [
      formState.utility_balance_at_placement,
      formState.additional_balance_at_placement,
      formState.placement_late_balance,
      formState.balance
    ];
    const total = fields.reduce((acc, curr) => {
      return acc + (curr ? parseFloat(curr) : 0);
    }, 0);

    setFormState({
      ...formState,
      total_balance_at_placement: total,
    });
  }, [
    formState.utility_balance_at_placement,
    formState.additional_balance_at_placement,
    formState.placement_late_balance,
    formState.balance,
  ]);

  const submitCaseStatus = (e) => {
    e.preventDefault();
    setFormLoading(true);

    // axios
    //   .put(casesPutPrefix(organization_id, params.case_id), {
    //     case_status: [...formState.case_status, case_status],
    //     organization_id,
    //   })
    //   .then((res) => {
    //     if (res.data.errors?.length > 0) {
    //       dispatchAlert({
    //         type: "danger",
    //         message: res.data.message,
    //         open: true,
    //         timeout: 4000,
    //       });
    //       formLoading(false);
    //       return;
    //     }
    //     dispatchAlert({
    //       type: "success",
    //       message: "Case updated successfully",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     setCaseStatus({
    //       description: null,
    //       datetime: getCurrentDateTime(),
    //       staff: null,
    //     });
    //     setFormLoading(false);
    //     getCase(organization_id, params.case_id);
    //     // navigate("/cases");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatchAlert({
    //       type: "danger",
    //       message: "Error updating case",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     getCase();
    //   });
  };

  const submitHearing = (e) => {
    e.preventDefault();
    setFormLoading(true);

    // axios
    //   .put(casesPutPrefix(formState.organization_id, params.case_id), {
    //     hearings: [...formState.hearings, hearing],
    //     organization_id: formState.organization_id,
    //   })
    //   .then((res) => {
    //     if (res.data.errors?.length > 0) {
    //       dispatchAlert({
    //         type: "danger",
    //         message: res.data.message,
    //         open: true,
    //         timeout: 4000,
    //       });
    //       formLoading(false);
    //       return;
    //     }
    //     dispatchAlert({
    //       type: "success",
    //       message: "Case updated successfully",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     setHearing({
    //       date: "",
    //     });
    //     setFormLoading(false);
    //     getCase(formState.organization_id, params.case_id);
    //     // navigate("/cases");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatchAlert({
    //       type: "danger",
    //       message: "Error updating case",
    //       open: true,
    //       timeout: 4000,
    //     });
    //     setFormLoading(false);
    //   });
  };

//   useEffect(() => {
//     const owner = owners.find(
//       (own) => Number(own.id) === Number(formState.owner_id)
//     );
//     if (owner && owner.organization_id) {
//       getOrganization(owner?.organization_id).then((res) => {
//         setOrganization(res);
//       });
//     }
//   }, [formState.owner_id, owners]);

  const getCurrentDate = () => {
    // Get current date as YYYY-MM-DD
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
  };

  useEffect(() => {
    if (Number(formState.writ_request)) {
      setFormState({
        ...formState,
        writ_date: getCurrentDate(),
        writ_requester: null, //user.name,
      });
    }
    if (!Number(formState.writ_request)) {
      setFormState({
        ...formState,
        writ_date: null,
        writ_requester: null,
      });
    }
  }, [formState.writ_request]);

  useEffect(() => {
    if (Number(formState.dismissal_request)) {
      setFormState({
        ...formState,
        dismissal_date: getCurrentDate(),
        dismissal_requester: null, //user.name,
      });
    }
    if (!Number(formState.dismissal_request)) {
      setFormState({
        ...formState,
        dismissal_date: null,
        dismissal_requester: null,
      });
    }
  }, [formState.dismissal_request]);

  return (
    <Container fluid className="main-content-container px-4">
      {/* Page Header */} {/*
      <Row noGutters className="page-header py-4">
        {/* <PageTitle
          sm="4"
          title="Edit Case"
          subtitle="Case management"
          className="text-sm-left"
        /> */}{/*
      </Row>
      <Row>
        <Col>{formLoading && <div className="loader" />}</Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10">
          <Card>
            {/* <CardHeader className="border-bottom">
              <h6 className="m-0">Case Details</h6>
            </CardHeader> */}{/*
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                              }}
                            >
                              Meta Information
                            </label>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="3" className="form-group">
                            <label>Created At</label>
                            <FormInput
                              type="text"
                              placeholder="Created At"
                              value={formatDate(formState.created_at || "")}
                              disabled
                            />
                          </Col>
                          <Col md="3" className="form-group">
                            <label>Created By</label>
                            <FormInput
                              type="text"
                              placeholder="Created By"
                              value={`${createdBy.name} [${createdBy.id}]`}
                              disabled
                            />
                          </Col>
                          <Col md="3" className="form-group">
                            <label>Updated At</label>
                            <FormInput
                              type="text"
                              placeholder="Created At"
                              value={formatDate(formState.updated_at || "")}
                              disabled
                            />
                          </Col>
                          <Col md="3" className="form-group">
                            <label>Updated By</label>
                            <FormInput
                              type="text"
                              placeholder="Updater ID"
                              value={`${updatedBy.name} [${updatedBy.id}]`}
                              disabled
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Case Initiation
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="accepted">Accepted?</label>
                            <FormSelect
                              id="accepted"
                              type="checkbox"
                              name="accepted"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  accepted: e.target.value,
                                  rejected: e.target.value
                                    ? 0
                                    : formState.active,
                                  on_hold: e.target.value
                                    ? 0
                                    : formState.on_hold,
                                });
                              }}
                              value={formState.accepted || ""}
                              disabled={null} //!hasRole("paralegal")}
                            >
                              <option value={""}>Select an Option</option>
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="on_hold">On Hold?</label>
                            <FormSelect
                              id="on_hold"
                              name="on_hold"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  on_hold: e.target.value,
                                  accepted: e.target.value
                                    ? 0
                                    : formState.accepted,
                                  rejected: e.target.value
                                    ? 0
                                    : formState.rejected,
                                });
                              }}
                              value={formState.on_hold || ""}
                              disabled={null} //{!hasRole("paralegal")}
                            >
                              <option value={""}>Select an Option</option>
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                          <Col md="8" className="form-group">
                            <label htmlFor="on_hold_reason">
                              Reason for Hold
                            </label>
                            <FormInput
                              id="on_hold_reason"
                              type="text"
                              name="on_hold_reason"
                              placeholder="Reason for Hold"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  on_hold_reason: e.target.value,
                                });
                              }}
                              value={formState.on_hold_reason || ""}
                              disabled={null} //{!hasRole("paralegal")}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="rejected">Rejected?</label>
                            <FormSelect
                              id="rejected"
                              type="checkbox"
                              name="rejected"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  rejected: e.target.value,
                                  accepted: e.target.value
                                    ? 0
                                    : formState.accepted,
                                  on_hold: e.target.value
                                    ? 0
                                    : formState.on_hold,
                                });
                              }}
                              value={formState.rejected || ""}
                              disabled={null} //{!hasRole("paralegal")}
                            >
                              <option value={""}>Select an Option</option>
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                          <Col md="8" className="form-group">
                            <label htmlFor="rejected_reason">
                              Reason for Rejection
                            </label>
                            <FormInput
                              id="rejected_reason"
                              type="text"
                              name="rejected_reason"
                              placeholder="Reason for Rejection"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  rejected_reason: e.target.value,
                                });
                              }}
                              value={formState.rejected_reason || ""}
                              disabled={null} //{!hasRole("paralegal")}
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Case Info
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="pm_internal_file_number">
                              Internal File Number
                            </label>
                            <FormInput
                              type="number"
                              id="pm_internal_file_number"
                              name="pm_internal_file_number"
                              placeholder="Internal File Number"
                              value={formState.pm_internal_file_number || ""}
                              onChange={handleChange}
                            />
                          </Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="owner_id">Owner</label>
                            <FormSelect
                              id="owner_id"
                              type="select"
                              name="owner_id"
                              onChange={handleChange}
                              value={formState.owner_id || ""}
                            >
                              <option value={""}>Select an Option</option>
                              {owners?.length &&
                                owners.map((owner) => {
                                  return (
                                    <option key={owner.id} value={owner.id}>
                                      {owner.business_legal_name}
                                    </option>
                                  );
                                })}
                            </FormSelect>
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Residents
                            </label>
                          </Col>
                        </Row>
                        {formState.residents?.map((res, idx) => {
                          return (
                            // * Basic Info
                            <Row form key={"blaj" + idx}>
                              {/*Resident 1 Name*/}{/*
                              <Col md="3" className="form-group">
                                <label
                                  htmlFor={`resident-${idx + 1}-first-name`}
                                >
                                  Resident {idx + 1} First Name
                                </label>
                                <FormInput
                                  id={`resident-${idx + 1}-first-name`}
                                  type="text"
                                  placeholder={`Resident ${idx + 1} first name`}
                                  name={`resident-${idx + 1}-first-name`}
                                  onChange={(e) => {
                                    res.first_name = e.target.value;
                                    setFormState({
                                      ...formState,
                                    });
                                  }}
                                  value={res.first_name || ""}
                                />
                              </Col>
                              <Col md="3" className="form-group">
                                <label htmlFor={`resident-${idx + 1}-middle`}>
                                  Resident {idx + 1} Middle Name
                                </label>
                                <FormInput
                                  id={`resident-${idx + 1}-middle`}
                                  type="text"
                                  placeholder={`Resident ${idx + 1} middle`}
                                  name={`resident-${idx + 1}-middle`}
                                  onChange={(e) => {
                                    res.middle_name = e.target.value;
                                    setFormState({
                                      ...formState,
                                    });
                                  }}
                                  value={res.middle_name || ""}
                                />
                              </Col>
                              <Col md="3" className="form-group">
                                <label
                                  htmlFor={`resident-${idx + 1}-last-name`}
                                >
                                  Resident {idx + 1} Last Name
                                </label>
                                <FormInput
                                  id={`resident-${idx + 1}-last-name`}
                                  type="text"
                                  placeholder={`Resident ${idx + 1} last name`}
                                  name={`resident-${idx + 1}-last-name`}
                                  onChange={(e) => {
                                    res.last_name = e.target.value;
                                    setFormState({ ...formState });
                                  }}
                                  value={res.last_name || ""}
                                />
                              </Col>
                              <Col md="3" className="form-group">
                                <label htmlFor={`resident-${idx + 1}-suffix`}>
                                  Resident 1 Suffix
                                </label>
                                <FormInput
                                  id={`resident-${idx + 1}-suffix`}
                                  type="text"
                                  placeholder={`Resident ${idx + 1} last name`}
                                  name={`resident-${idx + 1}-suffix`}
                                  onChange={(e) => {
                                    res.suffix = e.target.value;
                                    setFormState({ ...formState });
                                  }}
                                  value={res.suffix || ""}
                                />
                              </Col>
                            </Row>
                          );
                        })}
                        <div
                          style={{
                            textAlign: "right",
                          }}
                        >
                          {formState.residents?.length > 1 && (
                            <button
                              style={{
                                border: "none",
                                boxShadow: ".2px .2px 5px 0 rgba(0,0,0,0.25)",
                                borderRadius: "5px",
                                backgroundColor: "#ff0000",
                                color: "white",
                                marginRight: "8px",
                              }}
                              type="button"
                              title="Remove Resident"
                              onClick={() => {
                                setFormState({
                                  ...formState,
                                  residents: formState.residents.slice(
                                    0,
                                    formState.residents.length - 1
                                  ),
                                });
                              }}
                            >
                              <i className="material-icons">delete</i>
                            </button>
                          )}
                          <button
                            style={{
                              border: "none",
                              boxShadow: ".2px .2px 5px 0 rgba(0,0,0,0.25)",
                              borderRadius: "5px",
                              backgroundColor: "#007bff",
                              color: "white",
                            }}
                            type="button"
                            title="Add Resident"
                            onClick={() => {
                              setFormState({
                                ...formState,
                                residents: [
                                  ...formState.residents,
                                  {
                                    first_name: "",
                                    last_name: "",
                                    suffix: null,
                                  },
                                ],
                              });
                            }}
                          >
                            <i className="material-icons">add</i>
                          </button>
                        </div>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Location
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="street_address">Address</label>
                            <FormInput
                              id="street_address"
                              placeholder="1234 Main St"
                              name="street_address"
                              onChange={handleChange}
                              value={formState.street_address || ""}
                            />
                          </Col>

                          <Col md="6" className="form-group">
                            <label htmlFor="address_2">Address 2</label>
                            <FormInput
                              id="address_2"
                              placeholder="Apartment, Studio or Floor"
                              name="street_address2"
                              onChange={handleChange}
                              value={formState.street_address2 || ""}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="city">City</label>
                            <FormInput
                              id="city"
                              type="text"
                              placeholder="City"
                              name="city"
                              onChange={handleChange}
                              value={formState.city || ""}
                            />
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="state">State</label>
                            <FormSelect
                              id="state"
                              name="state"
                              onChange={handleChange}
                              value={formState.state || ""}
                            >
                              <option value={null}>Select an Option</option>
                              <option value="KS">KS - Kansas</option>
                              <option value="MO">MO - Missouri</option>
                            </FormSelect>
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="zip">Zip</label>
                            <FormInput
                              id="zip"
                              type="text"
                              placeholder="Zip"
                              name="zip"
                              onChange={handleChange}
                              value={formState.zip || ""}
                            />
                          </Col>
                        </Row>
                      </section>

                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Placement
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="placement_date">
                              Placement Date
                            </label>
                            <FormInput
                              type="date"
                              id="placement_date"
                              name="placement_date"
                              placeholder="Placement Date"
                              value={formState.placement_date || ""}
                              onChange={handleChange}
                              readOnly
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Rental Information
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="rent_amount">
                              Monthly Rent Amount
                            </label>
                            <FormInput
                              id="rent_amount"
                              type="number"
                              placeholder="Monthly Rent Amount"
                              name="monthly_rent_amount"
                              min="0.00"
                              step="0.01"
                              onChange={handleChange}
                              value={formState.monthly_rent_amount || ""}
                            />
                          </Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="rent_due_date">
                              {" "}
                              Monthly Rent Due Date
                            </label>
                            <FormInput
                              id="rent_due_date"
                              type="date"
                              placeholder="Monthly Rent Due Date"
                              name="monthly_rent_due_date"
                              onChange={handleChange}
                              value={formState.monthly_rent_due_date || ""}
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "24px",
                              }}
                            >
                              Reason(s) for Eviction
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col className="form-group">
                            <label htmlFor="failure_to_pay_rent">
                              Failure to Pay Rent?
                            </label>
                            <FormSelect
                              id="failure_to_pay_rent"
                              name="failure_to_pay_rent"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  failure_to_pay_rent: e.target.value,
                                });
                              }}
                              value={formState.failure_to_pay_rent || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        {Number(formState.failure_to_pay_rent) === 1 && (
                          <>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="prelitigation_notice_date">
                                  Date of Prelitigation Notice
                                </label>
                                <FormInput
                                  id="prelitigation_notice_date"
                                  name="prelitigation_notice_date"
                                  type="date"
                                  onChange={handleChange}
                                  value={
                                    formState.prelitigation_notice_date || ""
                                  }
                                />
                              </Col>
                              <Col md="6" className="form-group">
                                <label htmlFor="balance_date">
                                  Balance Date
                                </label>
                                <FormInput
                                  id="balance_date"
                                  type="date"
                                  placeholder="Balance Date"
                                  name="balance_date"
                                  onChange={handleChange}
                                  value={formState.balance_date || ""}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col md="4" className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <FormInput
                                  id="balance"
                                  type="number"
                                  placeholder="Balance"
                                  min="0"
                                  step="0.01"
                                  name="balance"
                                  onChange={handleChange}
                                  value={formState.balance || ""}
                                />
                              </Col>
                              <Col md="4" className="form-group">
                                <label htmlFor="placement_late_balance">
                                  Placement Late Balance
                                </label>
                                <FormInput
                                  id="placement_late_balance"
                                  type="number"
                                  placeholder="Placement Late Balance"
                                  min="0"
                                  step="0.01"
                                  name="placement_late_balance"
                                  onChange={handleChange}
                                  value={formState.placement_late_balance || ""}
                                />
                              </Col>
                              <Col md="4" className="form-group">
                                <label htmlFor="utility_balance_at_placement">
                                  Utility Balance at Placement
                                </label>
                                <FormInput
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  id="utility_balance_at_placement"
                                  name="utility_balance_at_placement"
                                  placeholder="Utility Balance at Placement"
                                  value={
                                    formState.utility_balance_at_placement || ""
                                  }
                                  onChange={handleChange}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="additional_balance_at_placement">
                                  Additional Balance at Placement
                                </label>
                                <FormInput
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  id="additional_balance_at_placement"
                                  name="additional_balance_at_placement"
                                  placeholder="Additional Balance at Placement"
                                  value={
                                    formState.additional_balance_at_placement ||
                                    ""
                                  }
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col md="6" className="form-group">
                                <label htmlFor="reason_additional_balance">
                                  Reason for Additional Balance
                                </label>
                                <FormInput
                                  type="text"
                                  id="reason_additional_balance"
                                  name="reason_additional_balance"
                                  placeholder="Reason for Additional Balance"
                                  value={
                                    formState.reason_additional_balance || ""
                                  }
                                  onChange={handleChange}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col md="4" className="form-group">
                                <label htmlFor="total_balance_at_placement">
                                  Total Balance at Placement
                                </label>
                                <FormInput
                                  type="number"
                                  id="total_balance_at_placement"
                                  name="total_balance_at_placement"
                                  placeholder="Total Balance at Placement"
                                  value={
                                    formState.total_balance_at_placement || ""
                                  }
                                  onChange={handleChange}
                                  disabled={true}
                                />
                              </Col>
                            </Row>
                          </>
                        )}
                        <Row form>
                          <Col className="form-group">
                            <label htmlFor="is_an_emergency_eviction">
                              Emergency Eviction?
                            </label>
                            <FormSelect
                              id="is_an_emergency_eviction"
                              name="is_an_emergency_eviction"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  is_an_emergency_eviction: e.target.value,
                                });
                              }}
                              value={formState.is_an_emergency_eviction || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        {Number(formState.is_an_emergency_eviction) === 1 && (
                          <>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="incident_date">
                                  Incident Date
                                </label>
                                <FormInput
                                  type="date"
                                  id="incident_date"
                                  name="incident_date"
                                  placeholder="Incident Date"
                                  value={formState.incident_date || ""}
                                  onChange={handleChange}
                                />
                              </Col>
                              <Col md="6" className="form-group">
                                <label htmlFor="incident_time">
                                  Incident Time
                                </label>
                                <FormInput
                                  type="time"
                                  id="incident_time"
                                  name="incident_time"
                                  placeholder="Incident Time"
                                  value={formState.incident_time || ""}
                                  onChange={handleChange}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col className="form-group">
                                <label htmlFor="incident_description">
                                  Incident Description
                                </label>
                                <FormInput
                                  type="text"
                                  id="incident_description"
                                  name="incident_description"
                                  placeholder="Description of Incident"
                                  value={formState.incident_description || ""}
                                  onChange={handleChange}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="date_emergency_eviction_notice">
                                  Date of Emergency Eviction Notice (if any)
                                </label>
                                <FormInput
                                  id="date_emergency_eviction_notice"
                                  type="date"
                                  placeholder="Date of Emergency Eviction Notice"
                                  name="date_emergency_eviction_notice"
                                  onChange={handleChange}
                                  value={
                                    formState.date_emergency_eviction_notice ||
                                    ""
                                  }
                                />
                              </Col>
                            </Row>
                          </>
                        )}
                        <Row form>
                          <Col className="form-group">
                            <label htmlFor="is_for_a_lease_violation">
                              Lease Violation?
                            </label>
                            <FormSelect
                              id="is_for_a_lease_violation"
                              name="is_for_a_lease_violation"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  is_for_a_lease_violation: e.target.value,
                                });
                              }}
                              value={formState.is_for_a_lease_violation || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        {Number(formState.is_for_a_lease_violation) === 1 && (
                          <>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="date_lease_violation">
                                  Date of Lease Violation
                                </label>
                                <FormInput
                                  id="date_lease_violation"
                                  type="date"
                                  placeholder="Date of Lease Violation"
                                  name="date_lease_violation"
                                  onChange={handleChange}
                                  value={formState.date_lease_violation || ""}
                                />
                              </Col>

                              <Col md="6" className="form-group">
                                <label htmlFor="section_lease_violated">
                                  Section of Lease Violated
                                </label>
                                <FormInput
                                  id="section_lease_violated"
                                  type="text"
                                  placeholder="Section of Lease Violated"
                                  name="section_lease_violated"
                                  onChange={handleChange}
                                  value={formState.section_lease_violated || ""}
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col className="form-group">
                                <label htmlFor="description_lease_violated">
                                  Description of Lease Violation
                                </label>
                                <FormInput
                                  id="description_lease_violated"
                                  type="text"
                                  placeholder="Description of Lease Violation"
                                  name="description_lease_violated"
                                  onChange={handleChange}
                                  value={
                                    formState.description_lease_violated || ""
                                  }
                                />
                              </Col>
                            </Row>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="date_lease_violation_notice">
                                  Date of Lease Violation Notice
                                </label>
                                <FormInput
                                  id="date_lease_violation_notice"
                                  type="date"
                                  placeholder="Date of Lease Violation Notice"
                                  name="date_lease_violation_notice"
                                  onChange={handleChange}
                                  value={
                                    formState.date_lease_violation_notice || ""
                                  }
                                />
                              </Col>
                            </Row>
                          </>
                        )}
                        <Row form>
                          <Col className="form-group">
                            <label htmlFor="is_a_squatter">Squatter?</label>
                            <FormSelect
                              id="is_a_squatter"
                              name="is_a_squatter"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  is_a_squatter: e.target.value,
                                });
                              }}
                              value={formState.is_a_squatter || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        {Number(formState.is_a_squatter) === 1 && (
                          <>
                            <Row form>
                              <Col md="6" className="form-group">
                                <label htmlFor="date_squatter_notice">
                                  Date of Squatter Notice
                                </label>
                                <FormInput
                                  id="date_squatter_notice"
                                  type="date"
                                  placeholder="Date of Squatter Notice"
                                  name="date_squatter_notice"
                                  onChange={handleChange}
                                  value={formState.date_squatter_notice || ""}
                                />
                              </Col>
                            </Row>
                          </>
                        )}
                        <Row form>
                          <Col className="form-group">
                            <label htmlFor="is_a_holdover_tenant">
                              Is a Holdover Tenant
                            </label>
                            <FormSelect
                              id="is_a_holdover_tenant"
                              name="is_a_holdover_tenant"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  is_a_holdover_tenant: e.target.value,
                                });
                              }}
                              value={formState.is_a_holdover_tenant || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        {Number(formState.is_a_holdover_tenant) === 1 && (
                          <>
                            <Row form>
                              <Col md="4" className="form-group">
                                <label htmlFor="date_holdover_notice">
                                  Date of Holdover Notice
                                </label>
                                <FormInput
                                  id="date_holdover_notice"
                                  type="date"
                                  placeholder="Date of Holdover Notice"
                                  name="date_holdover_notice"
                                  onChange={handleChange}
                                  value={formState.date_holdover_notice || ""}
                                />
                              </Col>
                            </Row>
                          </>
                        )}
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "14px",
                              }}
                            >
                              Court Information
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="jurisdiction_id">
                              Jurisdiction
                            </label>
                            <FormSelect
                              id="jurisdiction_id"
                              name="jurisdiction_id"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  jurisdiction_id: e.target.value,
                                  judge_id: null,
                                });
                              }}
                              value={formState.jurisdiction_id || ""}
                            >
                              <option value={null}>Select an Option</option>
                              {jurisdictions?.length > 0 &&
                                jurisdictions.map((jur, idx) => {
                                  return (
                                    <option
                                      key={jur.location_name + idx}
                                      value={jur.id}
                                    >
                                      {`${
                                        jur.county_name?.length > 1
                                          ? jur.county_name + ", "
                                          : ""
                                      }${
                                        jur.state?.length > 1
                                          ? jur.state + ", "
                                          : ""
                                      }(${jur.location_name})`}
                                    </option>
                                  );
                                })}
                            </FormSelect>
                          </Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="Attorney">Attorney</label>
                            <FormInput
                              id="Attorney"
                              type="text"
                              placeholder="Attorney"
                              name="attorney"
                              onChange={handleChange}
                              value={formState.attorney || ""}
                            />
                          </Col>
                        </Row>
                        {formState.jurisdiction_id && (
                          <Row>
                            <Col md="6" className="form-group">
                              <label htmlFor="phone">Judge</label>
                              <FormSelect
                                id="judge_id"
                                name="judge_id"
                                onChange={handleChange}
                                value={formState.judge_id || ""}
                              >
                                <option value={""}>Select an Option</option>
                                {judges?.length > 0 &&
                                  judges.map((judge, idx) => {
                                    return (
                                      <option
                                        key={judge.first_name + idx}
                                        value={judge.id}
                                      >
                                        {judge.first_name +
                                          " " +
                                          judge.last_name}
                                      </option>
                                    );
                                  })}
                              </FormSelect>
                            </Col>
                          </Row>
                        )}
                        <Row form>
                          {/*date_petition_filed*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="date_petition_filed">
                              Date Petition Filed
                            </label>
                            <FormInput
                              id="date_petition_filed"
                              type="date"
                              placeholder="Date Petition Filed"
                              name="date_petition_filed"
                              onChange={handleChange}
                              value={formState.date_petition_filed || ""}
                            />
                          </Col>
                          {/*date_petition_accepted*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="date_petition_accepted">
                              Date Petition Accepted
                            </label>
                            <FormInput
                              id="date_petition_accepted"
                              type="date"
                              placeholder="Date Petition Accepted"
                              name="date_petition_accepted"
                              onChange={handleChange}
                              value={formState.date_petition_accepted || ""}
                            />
                          </Col>
                          {/*court_case_number*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="court_case_number">
                              Court Case Number
                            </label>
                            <FormInput
                              id="court_case_number"
                              type="text"
                              placeholder="Court Case Number"
                              name="court_case_number"
                              onChange={handleChange}
                              value={formState.court_case_number || ""}
                            />
                          </Col>
                        </Row>

                        <Row form>
                          {/*judgment_date*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_date">Judgment Date</label>
                            <FormInput
                              id="judgment_date"
                              type="date"
                              placeholder="Judgment Date"
                              name="judgment_date"
                              onChange={handleChange}
                              value={formState.judgment_date || ""}
                            />
                          </Col>
                          {/*judgment_rent_balance*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_rent_balance">
                              Judgment Rent Balance
                            </label>
                            <FormInput
                              id="judgment_rent_balance"
                              type="number"
                              placeholder="Judgment Rent Balance"
                              min="0"
                              step="0.01"
                              name="judgment_rent_balance"
                              onChange={handleChange}
                              value={formState.judgment_rent_balance || ""}
                            />
                          </Col>
                          {/*judgment_utility_balance*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_utility_balance">
                              Judgment Utility Balance
                            </label>
                            <FormInput
                              id="judgment_utility_balance"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment Utility Balance"
                              name="judgment_utility_balance"
                              onChange={handleChange}
                              value={formState.judgment_utility_balance || ""}
                            />
                          </Col>
                          {/*judgment_additional_balance*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_additional_balance">
                              Judgment Additional Balance
                            </label>
                            <FormInput
                              id="judgment_additional_balance"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment Additional Balance"
                              name="judgment_additional_balance"
                              onChange={handleChange}
                              value={
                                formState.judgment_additional_balance || ""
                              }
                            />
                          </Col>
                          {/*judgment_additional_amount_nature*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_additional_amount_nature">
                              Judgment Additional Amount Nature
                            </label>
                            <FormInput
                              id="judgment_additional_amount_nature"
                              type="text"
                              placeholder="Judgment Additional Amount Nature"
                              name="judgment_additional_amount_nature"
                              onChange={handleChange}
                              value={
                                formState.judgment_additional_amount_nature ||
                                ""
                              }
                            />
                          </Col>
                          {/*judgment_attorney_fee*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_attorney_fee">
                              Judgment Attorneys Fee
                            </label>
                            <FormInput
                              id="judgment_attorney_fee"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment Attorney Fee"
                              name="judgment_attorneys_fee"
                              onChange={handleChange}
                              value={formState.judgment_attorneys_fee || ""}
                            />
                          </Col>
                          {/*judgment_pps_cost*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_pps_cost">
                              Judgment PPS Cost
                            </label>
                            <FormInput
                              id="judgment_pps_cost"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment PPS Cost"
                              name="judgment_pps_cost"
                              onChange={handleChange}
                              value={formState.judgment_pps_cost || ""}
                            />
                          </Col>
                          {/*judgment_court_cost*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_court_cost">
                              Judgment Court Cost
                            </label>
                            <FormInput
                              id="judgment_court_cost"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment Court Cost"
                              name="judgment_court_cost"
                              onChange={handleChange}
                              value={formState.judgment_court_cost || ""}
                            />
                          </Col>
                          {/*judgment_total_due*/}{/*
                          <Col md="4" className="form-group">
                            <label htmlFor="judgment_total_due">
                              Judgment Total Due
                            </label>
                            <FormInput
                              id="judgment_total_due"
                              type="number"
                              min="0"
                              step="0.01"
                              placeholder="Judgment Total Due"
                              name="judgment_total_due"
                              // onChange={(e) => {}}
                              disabled={true}
                              value={formState.judgment_total_due || ""}
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "14px",
                              }}
                            >
                              Case Status
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="active">Active</label>
                            <FormSelect
                              id="active"
                              type="checkbox"
                              name="active"
                              onChange={(e) => {
                                setFormState({
                                  ...formState,
                                  active: e.target.value,
                                });
                              }}
                              value={formState.active || ""}
                            >
                              <option value={""}>Select an Option</option>
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="dismissal_request">
                              Dismissal Requested?
                            </label>
                            <FormSelect
                              id="dismissal_request"
                              type="select"
                              name="dismissal_request"
                              placeholder="Dismissal Requested?"
                              onChange={handleChange}
                              value={formState.dismissal_request || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="dismissal_requester">
                              User Requesting Dismissal
                            </label>
                            <FormInput
                              id="dismissal_requester"
                              type="text"
                              name="dismissal_requester"
                              placeholder="User Requesting Dismissal"
                              onChange={handleChange}
                              value={formState.dismissal_requester || ""}
                              readOnly
                            />
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="dismissal_date">
                              Date of Dismissal Request
                            </label>
                            <FormInput
                              id="dismissal_date"
                              type="date"
                              name="dismissal_date"
                              placeholder="Date of Dismissal Request"
                              onChange={handleChange}
                              value={formState.dismissal_date || ""}
                              readOnly
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="6" className="form-group">
                            <label htmlFor="updated_ledger_request">
                              Date Updated Ledger Requested
                            </label>
                            <FormInput
                              id="updated_ledger_request"
                              type="date"
                              name="updated_ledger_request"
                              placeholder="Date Updated Ledger Requested"
                              onChange={handleChange}
                              value={formState.updated_ledger_request || ""}
                            />
                          </Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="updated_ledger_requester">
                              User Requesting Updated Ledger
                            </label>
                            <FormInput
                              id="updated_ledger_requester"
                              type="text"
                              name="updated_ledger_requester"
                              placeholder="User Requesting Updated Ledger"
                              onChange={handleChange}
                              value={formState.updated_ledger_requester || ""}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="writ_request">
                              Writ Requested?
                            </label>
                            <FormSelect
                              id="writ_request"
                              type="select"
                              name="writ_request"
                              placeholder="Writ Requested?"
                              onChange={handleChange}
                              value={formState.writ_request || ""}
                            >
                              <option value={0}>No</option>
                              <option value={1}>Yes</option>
                            </FormSelect>
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="writ_requester">
                              User Requesting Writ
                            </label>
                            <FormInput
                              id="writ_requester"
                              type="text"
                              name="writ_requester"
                              placeholder="User Requesting Writ"
                              onChange={handleChange}
                              value={formState.writ_requester || ""}
                              readOnly
                            />
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="writ_date">
                              Date of Writ Request
                            </label>
                            <FormInput
                              id="writ_date"
                              type="date"
                              name="writ_date"
                              placeholder="Date of Writ Request"
                              onChange={handleChange}
                              value={formState.writ_date || ""}
                              readOnly
                            />
                          </Col>
                        </Row>
                      </section>
                      <section>
                        <Row>
                          <Col className="form-group">
                            <label
                              style={{
                                fontSize: "24px",
                                marginTop: "14px",
                              }}
                            >
                              Service Status
                            </label>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="date_summons_sent_to_pps">
                              Date Summons Sent To PPS
                            </label>
                            <FormInput
                              id="date_summons_sent_to_pps"
                              type="date"
                              name="date_summons_sent_to_pps"
                              placeholder="Date Summons Sent To PPS"
                              onChange={handleChange}
                              value={formState.date_summons_sent_to_pps || ""}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="3" className="form-group">
                            <label htmlFor="person_served">Person Served</label>
                            <FormInput
                              id="person_served"
                              type="text"
                              value={formState.person_served || ""}
                              onChange={handleChange}
                              placeholder="Person Served"
                              name="person_served"
                            />
                          </Col>
                          {/*date_served*/}{/*
                          <Col md="3" className="form-group">
                            <label htmlFor="date_served">Date of Service</label>
                            <FormInput
                              id="date_served"
                              type="date"
                              placeholder="Date of Service"
                              name="date_served"
                              onChange={handleChange}
                              value={formState.date_served || ""}
                            />
                          </Col>
                          {/*time_served*/}{/*
                          <Col md="3" className="form-group">
                            <label htmlFor="time_served">Time of Service</label>
                            <FormInput
                              id="time_served"
                              type="time"
                              placeholder="Time of Service"
                              name="time_served"
                              onChange={handleChange}
                              value={formState.time_served || ""}
                            />
                          </Col>
                          {/*method_of_service*/}{/*
                          <Col md="3" className="form-group">
                            <label htmlFor="method_of_service">
                              Method of Service
                            </label>
                            <FormInput
                              id="method_of_service"
                              type="text"
                              placeholder="Method of Service"
                              name="method_of_service"
                              onChange={handleChange}
                              value={formState.method_of_service || ""}
                            />
                          </Col>
                        </Row>
                        <Row form>
                          <Col md="4" className="form-group">
                            <label htmlFor="date_return_filed_with_court">
                              Date Return Filed With Court
                            </label>
                            <FormInput
                              id="date_return_filed_with_court"
                              type="date"
                              name="date_return_filed_with_court"
                              placeholder="Date Return Filed With Court"
                              onChange={handleChange}
                              value={
                                formState.date_return_filed_with_court || ""
                              }
                            />
                          </Col>
                          <Col md="4" className="form-group">
                            <label htmlFor="date_return_accepted_by_court">
                              Date Return Accepted By Court
                            </label>
                            <FormInput
                              id="date_return_accepted_by_court"
                              type="date"
                              name="date_return_accepted_by_court"
                              placeholder="Date Return Accepted By Court"
                              onChange={handleChange}
                              value={
                                formState.date_return_accepted_by_court || ""
                              }
                            />
                          </Col>
                          {/* <Col md="4" className="form-group">
                            <label htmlFor="notified_at">Notified At</label>
                            <FormInput
                              id="notified_at"
                              type="date"
                              name="notified_at"
                              placeholder="Notified At"
                              onChange={handleChange}
                              value={formState.notified_at || ""}
                            />
                          </Col> */}{/*
                        </Row>
                      </section>

                      {errors.length > 0 && (
                        <Row form>
                          <p style={{ marginLeft: "6px" }}>
                            Please fill out the following fields:{" "}
                            <span style={{ fontWeight: "500" }}>
                              {errors.map((err) => err.name).join(", ")}
                            </span>
                          </p>
                        </Row>
                      )}
                      <Button
                        disabled={errors.length > 0}
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Save
                      </Button>
                      <Button
                        type="button"
                        className="btn-danger"
                        style={{ marginLeft: "14px" }}
                        onClick={(e) => {
                          navigate("/cases");
                        }}
                      >
                        Cancel
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />

      <Row className="justify-content-center">
        <Col md="10">
          <Card>
            <Row>
              <Col>
                <ListGroup>
                  <ListGroupItem>
                    {formState.case_status.length > 0 &&
                      (formState.case_status[formState.case_status.length - 1]
                        .description?.length > 0 ||
                        formState.case_status[formState.case_status.length - 1]
                          .datetime?.length > 0 ||
                        formState.case_status[formState.case_status.length - 1]
                          .staff?.length > 0) && (
                        <>
                          <Row>
                            <h5>Case Statuses</h5>
                          </Row>
                          <Row style={{ marginBottom: "36px" }}>
                            <table className="table mb-0">
                              <thead className="bg-light">
                                <tr>
                                  <th scope="col" className="border-0">
                                    #
                                  </th>
                                  <th scope="col" className="border-0">
                                    Description
                                  </th>
                                  <th scope="col" className="border-0">
                                    Date Time
                                  </th>
                                  <th scope="col" className="border-0">
                                    Staff
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {formState.case_status.map(
                                  (caseStatus, index) => (
                                    <tr key={index}>
                                      <th scope="row">{index + 1}</th>
                                      <td>{caseStatus.description}</td>
                                      <td>{formatDate(caseStatus.datetime)}</td>
                                      <td>{caseStatus.staff}</td>
                                    </tr>
                                  )
                                )}
                              </tbody>
                            </table>
                          </Row>
                        </>
                      )}
                    <Row>
                      <h5>Add New Case Status</h5>
                    </Row>
                    <Row form>
                      {/*case_status_1_description*/}{/*
                      <Col md="4" className="form-group">
                        <label htmlFor={`case_status_description`}>
                          Case Status Description
                        </label>
                        <FormInput
                          id={`case_status_description`}
                          type="text"
                          placeholder={`Case Status Description`}
                          name={`case_status_description`}
                          onChange={(e) => {
                            setCaseStatus({
                              ...case_status,
                              description: e.target.value,
                            });
                          }}
                          value={case_status.description || ""}
                        />
                      </Col>
                      {/*case_status_1_date_time*/}{/*
                      <Col md="4" className="form-group">
                        <label htmlFor={`case_status_date_time`}>
                          Case Status Date Time
                        </label>
                        <FormInput
                          id={`case_status_date_time`}
                          type="datetime-local"
                          placeholder={`Case Status Date Time`}
                          name={`case_status_date_time`}
                          disabled={true}
                          value={case_status.datetime || ""}
                        />
                      </Col>
                      {/*case_status_1_staff*/}{/*
                      <Col md="4" className="form-group">
                        <label htmlFor={`case_status_staff`}>
                          Case Status Staff
                        </label>
                        <FormInput
                          id={`case_status_staff`}
                          type="text"
                          placeholder={`Case Status Staff`}
                          name={`case_status_staff`}
                          value={case_status.staff || ""}
                          readOnly={true}
                        />
                      </Col>
                    </Row>
                    <Button type="submit" onClick={submitCaseStatus}>
                      Save
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <br />

      <Row className="justify-content-center">
        <Col md="10">
          <Card>
            <Row>
              <Col>
                <ListGroup>
                  <ListGroupItem>
                    {formState.hearings.length > 0 &&
                      formState.hearings[formState.hearings.length - 1].date
                        ?.length > 0 && (
                        <>
                          <Row>
                            <h5>Hearings</h5>
                          </Row>
                          <Row style={{ marginBottom: "36px" }}>
                            <table className="table mb-0">
                              <thead className="bg-light">
                                <tr>
                                  <th scope="col" className="border-0">
                                    #
                                  </th>
                                  <th scope="col" className="border-0">
                                    Date
                                  </th>
                                  <th scope="col" className="border-0">
                                    Trial?
                                  </th>
                                  <th scope="col" className="border-0">
                                    Created At
                                  </th>
                                  <th scope="col" className="border-0">
                                    Created By
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {formState.hearings.map((hearing, index) => (
                                  <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{hearing.date}</td>
                                    <td>{hearing.trial ? "Yes" : "No"}</td>
                                    <td>{formatDate(hearing.created_at)}</td>
                                    <td>{`${hearing?.user?.name} [${hearing?.user?.id}]`}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </Row>
                        </>
                      )}
                    <Row>
                      <h5>Add New Hearing</h5>
                    </Row>
                    <Row form>
                      <Col md="6" className="form-group">
                        <label htmlFor={`hearing_date`}>Hearing Date</label>
                        <FormInput
                          id={`hearing_date`}
                          type="date"
                          placeholder={`Hearing Date`}
                          name={`hearing_date`}
                          onChange={(e) => {
                            setHearing({
                              ...hearing,
                              date: e.target.value,
                            });
                          }}
                          value={hearing.date || ""}
                        />
                      </Col>
                      <Col md="6" className="form-group">
                        <label htmlFor={`hearing_trial`}>Trial</label>
                        <FormSelect
                          id="hearing_trial"
                          name="hearing_trial"
                          onChange={(e) => {
                            setHearing({
                              ...hearing,
                              trial: e.target.value,
                            });
                          }}
                          value={hearing.trial === null ? "" : hearing.trial}
                        >
                          <option value={""}>Select an Option</option>
                          <option value={0}>No</option>
                          <option value={1}>Yes</option>
                        </FormSelect>
                      </Col>
                    </Row>
                    <Button type="submit" onClick={submitHearing}>
                      Save
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <br />

      <Row className="justify-content-center">
        <Col md="10">
          <Card small className="mb-4">
            <CardHeader
              className="border-bottom"
              style={{
                display: "flex",
                justifyContext: "space-between",
              }}
            >
              <h6 className="m-0">Case Documents</h6>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/documents/add/" + caseID);
                }}
                style={{
                  marginLeft: "auto",
                }}
              >
                New Document
              </Button>
            </CardHeader>
            <CardBody className="p-0 pb-3">
              <table className="table mb-0">
                <thead className="bg-light">
                  <tr>
                    <th scope="col" className="border-0">
                      #
                    </th>
                    <th scope="col" className="border-0">
                      Name
                    </th>
                    <th scope="col" className="border-0">
                      Title
                    </th>
                    <th scope="col" className="border-0">
                      Case ID
                    </th>
                    <th scope="col" className="border-0">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {documents?.length > 0 &&
                    documents.map((documentItem, index) => {
                      return (
                        <tr key={index}>
                          <td>{documentItem.id}</td>
                          <td>{documentItem.file_name}</td>
                          <td>{documentItem.title}</td>
                          <td>{documentItem.case_id}</td>
                          <td>
                            {/* <ActionButtons
                              edit_endpoint={`/cases/${documentItem.case_id}/documents/${documentItem.id}`}
                              delete_message={`Are you sure you want to delete ${documentItem.id}?`}
                              handleSoftDelete={() =>
                                softDeleteDocument(
                                  null,
                                  documentItem.case_id,
                                  documentItem.id
                                )
                              }
                              handleHardDelete={() =>
                                hardDeleteDocument(
                                  null,
                                  documentItem.case_id,
                                  documentItem.id
                                )
                              }
                              hard_deletes={documentItem.deleted_at}
                              hard_delete_message={`Are you sure you want to permanently delete ${documentItem.id} forever?`}
                              restore_message={`Are you sure you want to restore ${documentItem.id}?`}
                              handleRestore={() => {
                                handleRestore(
                                  null,
                                  documentItem.case_id,
                                  documentItem.id
                                );
                              }}
                            /> */}{/*
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
*/}

const TestPage = () => {
    return (
        <div className="App">
            <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle
                sm="4"
                title="Edit Case"
                subtitle="Case management"
                className="text-sm-left"
                />
            </Row>
            </Container>
        </div>
    )
}

export default TestPage 


