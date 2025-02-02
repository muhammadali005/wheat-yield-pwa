import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavigationBar from "../common/NavigationBar";
import Footer from "../Footer";

const BestPractices = () => {
  return (
    <>
      <NavigationBar />
      <Container style={{ paddingBottom: "2%" }}>
        <Row>
          <Col>
            <h1 className='text-center my-4' style={{ color: "#005C45" }}>Farmer's Guide for Wheat Farming</h1>
            <h2 style={{ color: "#005C45" }}>Implementing Effective Practices for Successful Wheat Cultivation</h2>
            <p>Implementing effective practices is essential for successful wheat cultivation in Punjab. Below is a comprehensive guide covering all stages of wheat production, tailored to the region's specific conditions.</p>

            <h3 className='mt-4' style={{ color: "#005C45" }}>1. Land Preparation (October – Early November)</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Plowing and Leveling:</strong> Conduct deep plowing (2–3 passes) to break up hardpan and improve soil aeration.</li>
              <li><strong style={{ color: "#005C45" }}>Soil Health and Fertility:</strong> Perform detailed soil testing to detect nutrient deficiencies.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>2. Sowing (By 20th November – Optimum Time)</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Seed Selection and Treatment:</strong> Use certified, locally recommended, disease-resistant wheat varieties.</li>
              <li><strong style={{ color: "#005C45" }}>Sowing Techniques:</strong> Adopt drill sowing for uniform germination.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>3. Crop Management (December – March)</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Weed Control:</strong> Implement cultural, mechanical, and chemical weed control strategies.</li>
              <li><strong style={{ color: "#005C45" }}>Pest and Disease Management:</strong> Monitor for pests and diseases using field scouting.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>4. Irrigation Management (Throughout Crop Cycle)</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Stage-Specific Irrigation:</strong> Schedule irrigation based on crop growth stages.</li>
              <li><strong style={{ color: "#005C45" }}>Efficient Water Use:</strong> Utilize modern irrigation technologies.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>5. Harvesting & Post-Harvest Management (March – May)</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Harvest Timing:</strong> Monitor wheat maturity to harvest at the right time.</li>
              <li><strong style={{ color: "#005C45" }}>Post-Harvest Storage:</strong> Store grains in well-ventilated warehouses.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>6. Farmer Education & Training</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Integrated Pest Management (IPM) Training:</strong> Practical pest control methods.</li>
              <li><strong style={{ color: "#005C45" }}>New Wheat Farming Technologies:</strong> Introduction to new tools and apps.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>7. Additional Sustainability Practices</h3>
            <ul>
              <li><strong style={{ color: "#005C45" }}>Crop Rotation and Diversification:</strong> Integrate legumes or cover crops.</li>
              <li><strong style={{ color: "#005C45" }}>Climate-Smart Practices:</strong> Adapt to climate change with drought-resistant varieties.</li>
            </ul>

            <h3 className=' mt-4' style={{ color: "#005C45" }}>8. Sustainability Metrics and Reporting</h3>
            <ul>
              <li>Reduced pesticide use</li>
              <li>Water savings from efficient irrigation methods</li>
              <li>Improved soil health from crop rotation</li>
            </ul>
            <p>By implementing these best practices, wheat farmers can enhance yield, reduce costs, and ensure long-term sustainability.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BestPractices;