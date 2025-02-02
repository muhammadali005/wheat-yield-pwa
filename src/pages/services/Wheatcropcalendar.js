import React from 'react';
import { Container, Table } from 'react-bootstrap';
import NavigationBar from '../../components/common/NavigationBar';
import Footer from '../../components/Footer';

const WheatCropCalendar = () => {
  return (
    <>
      <NavigationBar />
      <Container className="my-4 p-4 bg-white rounded shadow">
        <h1 className="text-center text-success">Wheat Crop Calendar</h1>
        <Table striped bordered hover responsive className="mt-3 text-center">
          <thead className="bg-success text-white">
            <tr>
              <th>Month</th>
              <th>Activity</th>
              <th>Details/Notes</th>
              <th>Practical Tips</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>November 1–20</td>
              <td><strong>Sowing (Optimum Time)</strong></td>
              <td>Sowing begins in mid-November. This is the best time for wheat sowing.</td>
              <td className="bg-warning">Irrigation: Ensure good soil moisture. Apply phosphorus-rich fertilizer to help germination.</td>
            </tr>
            <tr>
              <td>November 21–December</td>
              <td><strong>Sowing (Late Sowing)</strong></td>
              <td>Delayed sowing reduces yield by 12kg per day after November 20.</td>
              <td className="bg-warning">Irrigation: Continue irrigation as needed. Fertilization: Apply nitrogen to support early growth.</td>
            </tr>
            <tr>
              <td>December</td>
              <td><strong>Early Growth</strong></td>
              <td>Wheat starts germinating and entering early growth stages.</td>
              <td className="bg-warning">Irrigation: Keep the soil moderately moist. Pest Control: Monitor for early pests.</td>
            </tr>
            <tr>
              <td>January</td>
              <td><strong>Growth Phase</strong></td>
              <td>Wheat grows, and leaf development occurs.</td>
              <td className="bg-warning">Irrigation: Maintain consistent irrigation. Fertilization: Apply balanced fertilizers.</td>
            </tr>
            <tr>
              <td>February</td>
              <td><strong>Growth Phase</strong></td>
              <td>Wheat continues to grow, focusing on tillering.</td>
              <td className="bg-warning">Pest Control: Watch out for fungal diseases. Irrigation: Ensure the crop gets adequate water.</td>
            </tr>
            <tr>
              <td>March</td>
              <td><strong>Growth Phase</strong></td>
              <td>The crop matures further, and heads begin to form.</td>
              <td className="bg-warning">Irrigation: Reduce watering to prevent waterlogging. Fertilization: Apply nitrogen for head formation.</td>
            </tr>
            <tr>
              <td>April</td>
              <td><strong>Pre-Harvest</strong></td>
              <td>Wheat begins ripening. Monitor for pests that may attack the mature crop.</td>
              <td className="bg-warning">Irrigation: Reduce irrigation as the crop nears harvest. Harvest Prep: Check for grain hardness.</td>
            </tr>
            <tr>
              <td>Late April–Early May</td>
              <td><strong>Harvesting</strong></td>
              <td>Wheat is ready to harvest. This marks the end of the Rabi season.</td>
              <td className="bg-warning">Harvesting: Harvest in the early morning or evening to avoid moisture loss.</td>
            </tr>
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default WheatCropCalendar;
