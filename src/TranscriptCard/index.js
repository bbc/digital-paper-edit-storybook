import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "../ProgressBar";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCheck,
  faExclamationTriangle,
  faPen
} from "@fortawesome/free-solid-svg-icons";

const TranscriptCard = props => {
  const statusSwitch = status => {
    switch (status) {
      case "error":
        return {
          variant: "danger",
          icon: <FontAwesomeIcon icon={faExclamationTriangle} />,
          message: props.message,
          text: "Error",
          title: props.title,
          border: "danger"
        };
      case "in-progress":
        return {
          variant: "info",
          text: "In progress",
          icon: (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ),
          title: props.title,
          border: "secondary"
        };
      case "uploading":
        return {
          variant: "info",
          text: "In progress",
          icon: <FontAwesomeIcon icon={faExclamationTriangle} />,
          title: props.title,
          border: "secondary",

          message:
            "Do not move away from or refresh this page until upload is complete!"
        };
      case "done":
        return {
          variant: "success",
          text: "Done",
          icon: <FontAwesomeIcon icon={faCheck} />,
          border: "secondary",
          title: <a href={`${props.url}`}>{props.title}</a>
        };
      default:
        return {
          variant: "info",
          text: "",
          icon: (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ),
          title: props.title,
          border: "secondary"
        };
    }
  };

  // const [progress, setProgress] = useState(0)

  const handleDeleteClick = () => {
    const confirmDeleteText = "Are you sure you want to delete?";
    const cancelDeleteText = "Cancelled delete";

    const confirmationPrompt = confirm(confirmDeleteText);

    if (confirmationPrompt) {
      if (props.handleDeleteItem) {
        props.handleDeleteItem(props.id);
      }
    } else {
      alert(cancelDeleteText);
    }
  };

  const handleEditClick = () => {
    props.handleEditItem(props.id);
  };

  const setDescription = () => {
    let Message;

    if (statusConfig.message) {
      Message = (
        <Alert variant={statusConfig.variant}>
          {statusConfig.icon} {statusConfig.message}
          {props.status === "uploading" ? (
            <ProgressBar progress={props.progress} />
          ) : null}
        </Alert>
      );
    }

    return (
      <>
        {Message ? Message : null}
        <Badge variant={statusConfig.variant}>{statusConfig.text}</Badge>
      </>
    );
  };

  const statusConfig = statusSwitch(props.status);

  return (
    <Card
      border={statusConfig.border}
      style={{ width: "100%", marginBottom: "2em" }}
    >
      <Card.Body>
        <Row>
          <Col xs={8} sm={10}>
            <Card.Title style={{ color: "#757575" }}>
              {props.icon ? props.icon : ""} {statusConfig.title}
            </Card.Title>
          </Col>
          <Col xs={2} sm={1}>
            <Card.Link>
              <Button
                onClick={handleEditClick}
                variant="outline-secondary"
                size="sm"
                aria-label="Edit title and description"
              >
                <FontAwesomeIcon icon={faPen} />
              </Button>
            </Card.Link>
          </Col>
          <Col xs={2} sm={1}>
            <Card.Link>
              <Button
                onClick={handleDeleteClick}
                variant="outline-secondary"
                size="sm"
                aria-label="Delete transcript"
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Card.Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card.Subtitle className="mb-2 text-muted">
              {props.description}
            </Card.Subtitle>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>{setDescription()}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

TranscriptCard.propTypes = {
  description: PropTypes.string,
  message: PropTypes.string,
  handleDeleteItem: PropTypes.func.isRequired,
  handleEditItem: PropTypes.func.isRequired,
  icon: PropTypes.any,
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  progress: PropTypes.number
};

TranscriptCard.defaultProps = {
  title: "",
  description: ""
};

export default React.memo(TranscriptCard);
