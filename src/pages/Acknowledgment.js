import React from "react";
import NavigationBar from "../components/common/NavigationBar";
import { Container, Card, ListGroup } from "react-bootstrap";
import Footer from "../components/Footer";

const Acknowledgment = () => {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4 mb-4">
        <Card className="shadow-lg p-4 rounded">
          <Card.Body>
            <Card.Title style={{color:"#005C45"}} className="text-center fw-bold display-5 mb-3">
              Acknowledgments
            </Card.Title>
            <p>
              We would like to extend our heartfelt appreciation to the following organizations and contributors, whose invaluable support and resources have made this project a success:
            </p>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5 className="fw-bold" style={{color:"#005C45"}}>Meteoblue</h5>
                <p>
                  We sincerely thank Meteoblue for their critical contribution to this project. Their generous provision of 24 years of historical weather data and soil data has been essential to the development of our application. Their partnership has played a pivotal role in ensuring that our app can offer accurate weather analytics, sowing guidance, and soil condition recommendations to farmers.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold" style={{color:"#005C45"}}>AMIS and Pakistan Bureau of Statistics</h5>
                <p>
                  We would also like to acknowledge AMIS (Agricultural Marketing Information Service) and the Pakistan Bureau of Statistics for their provision of 24 years of yield data. This essential data allows our app to predict wheat yields based on both historical and current weather conditions, providing farmers with valuable insights for crop planning and management.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold" style={{color:"#005C45"}}>Soil Survey of Pakistan</h5>
                <p>
                  We are grateful to the Soil Survey of Pakistan for their invaluable soil analysis data.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold" style={{color:"#005C45"}}>Pest and Control Management Experts</h5>
                <p>
                  We would like to acknowledge the specialists in pest and control management who contributed vital insights into the management of wheat crop health. Their contributions have significantly bolstered the app’s ability to offer timely alerts and recommendations regarding pest and disease control.
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold" style={{color:"#005C45"}}>Project Team and Collaborators</h5>
                <p>
                  Finally, we would like to express our deep gratitude to the project team, our supervisor, and all collaborators who have supported us throughout the development of this application. Their guidance, dedication, and expertise have been essential in shaping this project into a tool that will empower farmers and enhance agricultural productivity.
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default Acknowledgment;
