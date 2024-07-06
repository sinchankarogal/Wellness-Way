// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SymptomTracker.css'; 

// const SymptomTracker = ({ userEmail }) => {
//     const [symptoms, setSymptoms] = useState([]);
//     const [newSymptom, setNewSymptom] = useState({
//         symptomName: '',
//         severity: '',
//         notes: ''
//     });
//     const [showForm, setShowForm] = useState(false);

//     const fetchSymptoms = async () => {
//         try {
//             const response = await axios.get(`http://localhost:9090/PCOS/Symptom/${userEmail}`);
//             setSymptoms(response.data);
//         } catch (error) {
//             console.error('Error fetching symptoms:', error);
//         }
//     };

//     useEffect(() => {
//         fetchSymptoms();
//     }, [userEmail]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setNewSymptom({ ...newSymptom, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post('http://localhost:9090/PCOS/Symptom/add', {
//                 userEmail,
//                 symptomName: newSymptom.symptomName,
//                 severity: newSymptom.severity,
//                 notes: newSymptom.notes
//             });
//             setNewSymptom({
//                 symptomName: '',
//                 severity: '',
//                 notes: ''
//             });
//             fetchSymptoms(); // Refresh symptoms after adding a new one
//         } catch (error) {
//             console.error('Error adding symptom:', error);
//         }
//     };

//     return (
//         <div className="symptom-tracker-background">
//             <div className="symptom-tracker-content">
//                 {/* <h2 className="symptom-tracker-heading">Symptoms for {userEmail} Keep a track of your Symptoms!</h2> */}
//                 <h2 className="symptom-tracker-heading">Keep a track of your Symptoms!</h2>
//                 <div className="symptom-tracker-text">
//                     <p>Record the severity and notes for future reference.</p>
//                     <p>Stay informed about your health.</p>
//                     <p>Manage your symptoms effectively!</p>
//                 </div>
//                 <button 
//                     className="btn btn-primary symptom-tracker-button" 
//                     onClick={() => setShowForm(!showForm)}
//                 >
//                     {showForm ? 'Hide Form' : 'Add New Symptom'}
//                 </button>
//                 {showForm && (
//                     <form onSubmit={handleSubmit}>
//                         <div className="form-group symptom-tracker-form-group">
//                             <label className="symptom-tracker-label">Symptom Name:</label>
//                             <input type="text" className="form-control symptom-tracker-input" name="symptomName" value={newSymptom.symptomName} onChange={handleInputChange} required />
//                         </div>
//                         <div className="form-group symptom-tracker-form-group">
//                             <label className="symptom-tracker-label">Severity:</label>
//                             <input type="text" className="form-control symptom-tracker-input" name="severity" value={newSymptom.severity} onChange={handleInputChange} required />
//                         </div>
//                         <div className="form-group symptom-tracker-form-group">
//                             <label className="symptom-tracker-label">Notes:</label>
//                             <textarea className="form-control symptom-tracker-textarea" name="notes" value={newSymptom.notes} onChange={handleInputChange} required />
//                         </div>
//                         <button type="submit" className="btn btn-primary symptom-tracker-button">Add Symptom</button>
//                     </form>
//                 )}
//                 <div className="symptom-tracker-list">
//                     <ul className="list-group">
//                         {symptoms.map(symptom => (
//                             <li key={symptom.id} className="list-group-item symptom-tracker-list-item">
//                                 <strong>{symptom.symptomName}</strong>: {symptom.severity} - {symptom.notes}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SymptomTracker;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SymptomTracker.css'; 

const PCOS_SYMPTOMS = [
    { name: 'Irregular periods', score: 20 },
    { name: 'Excess androgen', score: 20 },
    { name: 'Polycystic ovaries', score: 20 },
    { name: 'Weight gain', score: 10 },
    { name: 'Acne', score: 10 },
    { name: 'Thinning hair', score: 10 },
    { name: 'Darkening of the skin', score: 10 }
];

const SymptomTracker = ({ userEmail }) => {
    const [symptoms, setSymptoms] = useState([]);
    const [newSymptom, setNewSymptom] = useState({
        symptomName: '',
        severity: '',
        notes: ''
    });
    const [showForm, setShowForm] = useState(false);
    const [pcosLikelihood, setPcosLikelihood] = useState(0);

    const fetchSymptoms = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/PCOS/Symptom/${userEmail}`);
            setSymptoms(response.data);
            calculatePcosLikelihood(response.data);
        } catch (error) {
            console.error('Error fetching symptoms:', error);
        }
    };

    useEffect(() => {
        fetchSymptoms();
    }, [userEmail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSymptom({ ...newSymptom, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/PCOS/Symptom/add', {
                userEmail,
                symptomName: newSymptom.symptomName,
                severity: newSymptom.severity,
                notes: newSymptom.notes
            });
            setNewSymptom({
                symptomName: '',
                severity: '',
                notes: ''
            });
            fetchSymptoms(); 
        } catch (error) {
            console.error('Error adding symptom:', error);
        }
    };

    const calculatePcosLikelihood = (userSymptoms) => {
        let totalScore = 0;
        PCOS_SYMPTOMS.forEach(pcosSymptom => {
            userSymptoms.forEach(userSymptom => {
                if (userSymptom.symptomName.trim().toLowerCase() === pcosSymptom.name.trim().toLowerCase()) {
                    totalScore += pcosSymptom.score;
                }
            });
        });
        setPcosLikelihood(totalScore);
    };

    return (
        <div className="symptom-tracker-background">
            <div className="symptom-tracker-content">
                <h2 className="symptom-tracker-heading">Keep a track of your Symptoms!</h2>
                <div className="symptom-tracker-text">
                    <p>Record the severity and notes for future reference.</p>
                    <p>Stay informed about your health.</p>
                    <p>Manage your symptoms effectively!</p>
                </div>
                <button 
                    className="btn btn-primary symptom-tracker-button" 
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Hide Form' : 'Add New Symptom'}
                </button>
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group symptom-tracker-form-group">
                            <label className="symptom-tracker-label">Symptom Name:</label>
                            <input type="text" className="form-control symptom-tracker-input" name="symptomName" value={newSymptom.symptomName} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group symptom-tracker-form-group">
                            <label className="symptom-tracker-label">Severity:</label>
                            <input type="text" className="form-control symptom-tracker-input" name="severity" value={newSymptom.severity} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group symptom-tracker-form-group">
                            <label className="symptom-tracker-label">Notes:</label>
                            <textarea className="form-control symptom-tracker-textarea" name="notes" value={newSymptom.notes} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary symptom-tracker-button">Add Symptom</button>
                    </form>
                )}
                <div className="symptom-tracker-list">
                    <ul className="list-group">
                        {symptoms.map(symptom => (
                            <li key={symptom.id} className="list-group-item symptom-tracker-list-item">
                                <strong>{symptom.symptomName}</strong>: {symptom.severity} - {symptom.notes}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="symptom-tracker-pcos-likelihood">
                    <h3>PCOS Likelihood: {pcosLikelihood}%</h3>
                </div>
            </div>
        </div>
    );
};

export default SymptomTracker;
