// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './PeriodTrackerList.css'; 

// // const PeriodTrackerList = ({ userEmail }) => {
// //     const [periodTrackers, setPeriodTrackers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [newPeriodTracker, setNewPeriodTracker] = useState({
// //         name: '',
// //         startDate: '',
// //         endDate: ''
// //     });

// //     const fetchPeriodTrackers = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9090/PCOS/PeriodTracker/${userEmail}`);
// //             setPeriodTrackers(response.data);
// //         } catch (error) {
// //             console.error('Error fetching period trackers:', error);
// //             setError(error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchPeriodTrackers();
// //     }, [userEmail]);

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setNewPeriodTracker({ ...newPeriodTracker, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:9090/PCOS/PeriodTracker/add', {
// //                 userEmail,
// //                 name: newPeriodTracker.name,
// //                 startDate: newPeriodTracker.startDate,
// //                 endDate: newPeriodTracker.endDate
// //             });
// //             setNewPeriodTracker({
// //                 name: '',
// //                 startDate: '',
// //                 endDate: ''
// //             });
// //             fetchPeriodTrackers(); 
// //         } catch (error) {
// //             console.error('Error adding period tracker:', error);
// //         }
// //     };

// //     if (error) {
// //         return <div>Error fetching period trackers: {error.message}</div>;
// //     }

// //     const tileContent = ({ date, view }) => {
// //         if (view === 'month') {
// //             const formattedDate = date.toISOString().split('T')[0];
// //             const periodDates = periodTrackers.flatMap(tracker => {
// //                 const start = new Date(tracker.startDate);
// //                 const end = new Date(tracker.endDate);
// //                 const dates = [];
// //                 for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
// //                     dates.push(new Date(d).toISOString().split('T')[0]);
// //                 }
// //                 return dates;
// //             });
// //             if (periodDates.includes(formattedDate)) {
// //                 return <div className="period-day"></div>;
// //             }
// //         }
// //     };

// //     return (
// //         <div className="container mt-5">
// //             <h2>Period Trackers for {userEmail}</h2>
// //             <form onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                     <label>Name:</label>
// //                     <input type="text" className="form-control" name="name" value={newPeriodTracker.name} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>Start Date:</label>
// //                     <input type="date" className="form-control" name="startDate" value={newPeriodTracker.startDate} onChange={handleInputChange} required />
// //                 </div>
// //                 <div className="form-group">
// //                     <label>End Date:</label>
// //                     <input type="date" className="form-control" name="endDate" value={newPeriodTracker.endDate} onChange={handleInputChange} required />
// //                 </div>
// //                 <button type="submit" className="btn btn-primary">Add Period Tracker</button>
// //             </form>
// //             <Calendar
// //                 tileContent={tileContent}
// //                 className="period-calendar"
// //             />
// //         </div>
// //     );
// // };

// // export default PeriodTrackerList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import styles from './PeriodTrackerList.css'; // Import CSS module

// // const PeriodTrackerList = ({ userEmail }) => {
// //     const [periodTrackers, setPeriodTrackers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [newPeriodTracker, setNewPeriodTracker] = useState({
// //         name: '',
// //         startDate: '',
// //         endDate: ''
// //     });

// //     const fetchPeriodTrackers = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9090/PCOS/PeriodTracker/${userEmail}`);
// //             setPeriodTrackers(response.data);
// //         } catch (error) {
// //             console.error('Error fetching period trackers:', error);
// //             setError(error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchPeriodTrackers();
// //     }, [userEmail]);

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setNewPeriodTracker({ ...newPeriodTracker, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:9090/PCOS/PeriodTracker/add', {
// //                 userEmail,
// //                 name: newPeriodTracker.name,
// //                 startDate: newPeriodTracker.startDate,
// //                 endDate: newPeriodTracker.endDate
// //             });
// //             setNewPeriodTracker({
// //                 name: '',
// //                 startDate: '',
// //                 endDate: ''
// //             });
// //             fetchPeriodTrackers(); 
// //         } catch (error) {
// //             console.error('Error adding period tracker:', error);
// //         }
// //     };

// //     if (error) {
// //         return <div>Error fetching period trackers: {error.message}</div>;
// //     }

// //     const tileContent = ({ date, view }) => {
// //         if (view === 'month') {
// //             const formattedDate = date.toISOString().split('T')[0];
// //             const periodDates = periodTrackers.flatMap(tracker => {
// //                 const start = new Date(tracker.startDate);
// //                 const end = new Date(tracker.endDate);
// //                 const dates = [];
// //                 for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
// //                     dates.push(new Date(d).toISOString().split('T')[0]);
// //                 }
// //                 return dates;
// //             });
// //             if (periodDates.includes(formattedDate)) {
// //                 return <div className={styles.periodTrackerDay}></div>; // Use CSS module class
// //             }
// //         }
// //     };

// //     return (
// //         <div className="container-fluid p-4">
// //             <div className="row">
// //                 <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
// //                     <div className={styles.periodTrackerContainer}>
// //                         <h2 className={styles.periodTrackerHeading}>Period Trackers for {userEmail}</h2>
// //                         <form onSubmit={handleSubmit}>
// //                             <div className={`form-group ${styles.periodTrackerFormGroup}`}>
// //                                 <label className={styles.periodTrackerLabel}>Name:</label>
// //                                 <input type="text" className={`form-control ${styles.periodTrackerInput}`} name="name" value={newPeriodTracker.name} onChange={handleInputChange} required />
// //                             </div>
// //                             <div className={`form-group ${styles.periodTrackerFormGroup}`}>
// //                                 <label className={styles.periodTrackerLabel}>Start Date:</label>
// //                                 <input type="date" className={`form-control ${styles.periodTrackerInput}`} name="startDate" value={newPeriodTracker.startDate} onChange={handleInputChange} required />
// //                             </div>
// //                             <div className={`form-group ${styles.periodTrackerFormGroup}`}>
// //                                 <label className={styles.periodTrackerLabel}>End Date:</label>
// //                                 <input type="date" className={`form-control ${styles.periodTrackerInput}`} name="endDate" value={newPeriodTracker.endDate} onChange={handleInputChange} required />
// //                             </div>
// //                             <button type="submit" className={`btn btn-primary ${styles.periodTrackerButton}`}>Add Period Tracker</button>
// //                         </form>
// //                         <div className={styles.periodTrackerCalendar}>
// //                             <Calendar
// //                                 tileContent={tileContent}
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PeriodTrackerList;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Calendar from 'react-calendar';
// // import 'react-calendar/dist/Calendar.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './PeriodTrackerList.css'; // Import CSS module

// // const PeriodTrackerList = ({ userEmail }) => {
// //     const [periodTrackers, setPeriodTrackers] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [newPeriodTracker, setNewPeriodTracker] = useState({
// //         name: '',
// //         startDate: '',
// //         endDate: ''
// //     });

// //     const fetchPeriodTrackers = async () => {
// //         try {
// //             const response = await axios.get(`http://localhost:9090/PCOS/PeriodTracker/${userEmail}`);
// //             setPeriodTrackers(response.data);
// //         } catch (error) {
// //             console.error('Error fetching period trackers:', error);
// //             setError(error);
// //         }
// //     };

// //     useEffect(() => {
// //         fetchPeriodTrackers();
// //     }, [userEmail]);

// //     const handleInputChange = (e) => {
// //         const { name, value } = e.target;
// //         setNewPeriodTracker({ ...newPeriodTracker, [name]: value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             await axios.post('http://localhost:9090/PCOS/PeriodTracker/add', {
// //                 userEmail,
// //                 name: newPeriodTracker.name,
// //                 startDate: newPeriodTracker.startDate,
// //                 endDate: newPeriodTracker.endDate
// //             });
// //             setNewPeriodTracker({
// //                 name: '',
// //                 startDate: '',
// //                 endDate: ''
// //             });
// //             fetchPeriodTrackers(); 
// //         } catch (error) {
// //             console.error('Error adding period tracker:', error);
// //         }
// //     };

// //     if (error) {
// //         return <div>Error fetching period trackers: {error.message}</div>;
// //     }

// //     const tileContent = ({ date, view }) => {
// //         if (view === 'month') {
// //             const formattedDate = date.toISOString().split('T')[0];
// //             const periodDates = periodTrackers.flatMap(tracker => {
// //                 const start = new Date(tracker.startDate);
// //                 const end = new Date(tracker.endDate);
// //                 const dates = [];
// //                 for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
// //                     dates.push(new Date(d).toISOString().split('T')[0]);
// //                 }
// //                 return dates;
// //             });
// //             if (periodDates.includes(formattedDate)) {
// //                 return <div className="period-tracker-day"></div>; 
// //             }
// //         }
// //     };

// //     return (
// //         <div className="period-tracker-background">
// //             <div className="period-tracker-content">
// //                 <h2 className="period-tracker-heading">Period Trackers for {userEmail}</h2>
// //                 <div className="period-tracker-calendar">
// //                     <Calendar
// //                         tileContent={tileContent}
// //                         showDoubleView={true}
// //                     />
// //                 </div>
// //                 <h2 className="period-tracker-heading">Add New Period Tracker</h2>
// //                 <form onSubmit={handleSubmit}>
// //                     <div className="form-group period-tracker-form-group">
// //                         <label className="period-tracker-label">Name:</label>
// //                         <input type="text" className="form-control period-tracker-input" name="name" value={newPeriodTracker.name} onChange={handleInputChange} required />
// //                     </div>
// //                     <div className="form-group period-tracker-form-group">
// //                         <label className="period-tracker-label">Start Date:</label>
// //                         <input type="date" className="form-control period-tracker-input" name="startDate" value={newPeriodTracker.startDate} onChange={handleInputChange} required />
// //                     </div>
// //                     <div className="form-group period-tracker-form-group">
// //                         <label className="period-tracker-label">End Date:</label>
// //                         <input type="date" className="form-control period-tracker-input" name="endDate" value={newPeriodTracker.endDate} onChange={handleInputChange} required />
// //                     </div>
// //                     <button type="submit" className="btn btn-primary period-tracker-button">Add Period Tracker</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PeriodTrackerList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PeriodTrackerList.css'; // Import CSS module

const PeriodTrackerList = ({ userEmail }) => {
    const [periodTrackers, setPeriodTrackers] = useState([]);
    const [error, setError] = useState(null);
    const [newPeriodTracker, setNewPeriodTracker] = useState({
        name: '',
        startDate: '',
        endDate: ''
    });
    const [showForm, setShowForm] = useState(false);

    const fetchPeriodTrackers = async () => {
        try {
            const response = await axios.get(`http://localhost:9090/PCOS/PeriodTracker/${userEmail}`);
            setPeriodTrackers(response.data);
        } catch (error) {
            console.error('Error fetching period trackers:', error);
            setError(error);
        }
    };

    useEffect(() => {
        fetchPeriodTrackers();
    }, [userEmail]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPeriodTracker({ ...newPeriodTracker, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:9090/PCOS/PeriodTracker/add', {
                userEmail,
                name: newPeriodTracker.name,
                startDate: newPeriodTracker.startDate,
                endDate: newPeriodTracker.endDate
            });
            setNewPeriodTracker({
                name: '',
                startDate: '',
                endDate: ''
            });
            fetchPeriodTrackers(); 
        } catch (error) {
            console.error('Error adding period tracker:', error);
        }
    };

    if (error) {
        return <div>Error fetching period trackers: {error.message}</div>;
    }

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const formattedDate = date.toISOString().split('T')[0];
            const periodDates = periodTrackers.flatMap(tracker => {
                const start = new Date(tracker.startDate);
                const end = new Date(tracker.endDate);
                const dates = [];
                for (let d = start; d <= end; d.setDate(d.getDate() + 1 )) {
                    dates.push(new Date(d).toISOString().split('T')[0]);
                }
                return dates;
            });
            if (periodDates.includes(formattedDate)) {
                return <div className="period-tracker-day">❤️</div>; 
            }
        }
    };

    return (
        <div className="period-tracker-background">
            <div className="period-tracker-content">
                {/* <h2 className="period-tracker-heading">Period Trackers for {userEmail} Keep a track of your periods! </h2> */}
                <h2 className="period-tracker-heading">Keep a track of your periods! </h2>
                <div className="period-tracker-description">
                    Keeping track of your cycles just got easier!<br />
                    Mark your important dates.<br />
                    Stay on top of your health.<br />
                    Add your periods with a click.<br />
                    Let's make periods less stressful!
                </div>
                <div className="period-tracker-calendar">
                    <Calendar
                        tileContent={tileContent}
                        showNeighboringMonth={false}
                    />
                </div>
                <button 
                    className="btn btn-primary period-tracker-button" 
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Hide Form' : 'Add New Period Tracker'}
                </button>
                {showForm && (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group period-tracker-form-group">
                            <label className="period-tracker-label">Name:</label>
                            <input type="text" className="form-control period-tracker-input" name="name" value={newPeriodTracker.name} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group period-tracker-form-group">
                            <label className="period-tracker-label">Start Date:</label>
                            <input type="date" className="form-control period-tracker-input" name="startDate" value={newPeriodTracker.startDate} onChange={handleInputChange} required />
                        </div>
                        <div className="form-group period-tracker-form-group">
                            <label className="period-tracker-label">End Date:</label>
                            <input type="date" className="form-control period-tracker-input" name="endDate" value={newPeriodTracker.endDate} onChange={handleInputChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary period-tracker-button">Add Period Tracker</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PeriodTrackerList;


