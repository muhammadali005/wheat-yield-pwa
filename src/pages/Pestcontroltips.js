import React, { useEffect } from 'react';
import NavigationBar from '../components/common/NavigationBar';
import Footer from '../components/Footer';

const pestDiseaseData = [
  { name: "Aphids", spread: "December–March", control: "Release natural predators (ladybugs, lacewings), Spray neem oil, Use selective insecticides", preventive: "Avoid excessive nitrogen fertilizer, Use resistant varieties, Monitor fields regularly" },
  { name: "Armyworm", spread: "November–February", control: "Handpick caterpillars, Apply Bacillus thuringiensis (Bt)", preventive: "Timely sowing, Keep field weed-free, Encourage natural predators" },
  { name: "Termites", spread: "October–April", control: "Apply farmyard manure mixed with neem cake, Use chlorpyrifos-based soil treatment", preventive: "Avoid excessive irrigation, Use well-rotted organic matter, Treat seeds before sowing" },
  { name: "Wheat Stem Maggot", spread: "November–March", control: "Remove infested plants, Encourage natural enemies", preventive: "Avoid excessive nitrogen use, Ensure good drainage" },
  { name: "Rusts", spread: "January–April", control: "Spray propiconazole-based fungicides, Use resistant varieties", preventive: "Use certified disease-free seeds, Follow proper sowing time" },
  { name: "Powdery Mildew", spread: "December–March", control: "Spray sulfur-based fungicides, Avoid dense sowing", preventive: "Ensure proper spacing, Avoid excessive irrigation" },
  { name: "Loose Smut", spread: "October–December", control: "Use fungicide-treated seeds, Remove and destroy infected plants", preventive: "Always use certified disease-free seeds, Crop rotation" },
  { name: "Karnal Bunt", spread: "February–April", control: "Spray propiconazole-based fungicide, Burn infected crop residues", preventive: "Use resistant varieties, Ensure good field sanitation" },
  { name: "Root Rot & Wilt", spread: "December–April", control: "Apply biofungicides like Trichoderma spp., Improve soil drainage", preventive: "Practice crop rotation, Avoid excessive irrigation" }
];

const Pestcontroltips = () => {
  useEffect(() => {
    document.title = "Pest Control Tips";
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="container">
        <h2 style={{color:"#005C45"}}>Pest and Disease Control Tips</h2>
        <table className="styled-table">
          <thead>
            <tr style={{backgroundColor: "#005C45",color: "white"}}>
              <th>Pest/Disease</th>
              <th>Spread Period</th>
              <th>Control Measures</th>
              <th>Preventive Measures</th>
            </tr>
          </thead>
          <tbody>
            {pestDiseaseData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.spread}</td>
                <td>{item.control}</td>
                <td>{item.preventive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
      <style>{`
        .container {
          padding: 20px;
        }
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin: 25px 0;
          font-size: 18px;
          text-align: left;
        }
        .styled-table th, .styled-table td {
          padding: 12px;
          border: 1px solid #ddd;
        }
        .styled-table th {
          background-color: #005C45";
          color: white;
        }
        .styled-table tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>

    </>
  );
};

export default Pestcontroltips;