// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './componentStyles/LevelsPage.css'; // Import CSS file for styling
// import lock from '../assests/lock.png';
// import logo from '../assests/logo.png';

// const LevelsPage = () => {
//     const navigate = useNavigate();
//     const [isAdmin, setIsAdmin] = useState(false);

//     useEffect(() => {
//         const isAdminLocalStorage = localStorage.getItem('isAdmin');
//         if (isAdminLocalStorage === 'true') {
//             setIsAdmin(true);
//         }
//     }, []);

//     const navigateToFirstLevel = (buttonId) => {
//         navigate('/first-level', { state: { buttonId } }); // Pass buttonId in state object
//     };
//     const navigateToSecondLevel = (buttonId) => {
//         navigate('/second-level', { state: { buttonId } }); // Pass buttonId in state object
//     };
//     const navigateToThirdLevel = (buttonId) => {
//         navigate('/third-level', { state: { buttonId } }); // Pass buttonId in state object
//     };
//     return (
//         <>
//             {/* Header Section Start Here! */}
//             <div className="header">
//                 <div className="logo-section">
//                     <div className="logo">
//                          <img src={logo} alt="logo" />
//                     </div>
//                     <div className="home-level">
//                         <span>Home</span> |
//                         <span className="level-heading">Levels</span>
//                     </div>
//                 </div>
//                 <div className="task-header">
//                     <h2>TASK </h2>
//                 </div>
//             </div>
//             {/* Level Section Start Here! */}
//             <div className="levels-page mt-5">
//                 <div className="container oval-container mt-5">
//                     <div id="TASK 1" className="oval-button mb-3" style={{ backgroundColor: ' rgb(19, 203, 28)' }} onClick={() => navigateToFirstLevel('TASK 1')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 1</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 2" className="oval-button mb-3" style={{ backgroundColor: 'rgb(16, 241, 94)' }} onClick={() => navigateToFirstLevel('TASK 2')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 2</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 3" className="oval-button mb-3" style={{ backgroundColor: 'rgb(19, 223, 91)' }} onClick={() => navigateToFirstLevel('TASK 3')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 3</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 4" className="oval-button mb-3" style={{ backgroundColor: 'rgb(19, 223, 148)' }} onClick={() => navigateToSecondLevel('TASK 4')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 4</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 5" className="oval-button mb-3" style={{ backgroundColor: 'rgb(11, 156, 103)' }} onClick={() => navigateToSecondLevel('TASK 5')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 5</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 6" className="oval-button mb-3" style={{ backgroundColor: 'rgb(132, 156, 11)' }} onClick={() => navigateToSecondLevel('TASK 6')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 6</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 7" className="oval-button mb-3" style={{ backgroundColor: 'rgb(11, 103, 156)' }} onClick={() => navigateToThirdLevel('TASK 7')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 7</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 8" className="oval-button mb-3" style={{ backgroundColor: 'rgb(110, 11, 156)' }} onClick={() => navigateToThirdLevel('TASK 8')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 8</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 9" className="oval-button mb-3" style={{ backgroundColor: 'rgb(156, 11, 98)' }} onClick={() => navigateToThirdLevel('TASK 9')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 9</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                     <div id="TASK 10" className="oval-button mb-3" style={{ backgroundColor: 'rgb(255, 15, 15)' }} onClick={() => navigateToThirdLevel('TASK 10')}>
//                         <div className="left-side">*</div>
//                         <span>TASK 10</span>
//                         <div className="right-side">
//                             <img src={lock} alt="Image" style={{ width: '20px', height: '20px', color: 'white' }} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Footer Section Start Here! */}
//             <div className="footer">
//                 <h3 className="footer-heading">Copy@ 2024 fleming.com, All Right Reserved</h3>
//             </div>
//         </>
//     );
// };

// export default LevelsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import lock from '../assests/lock.png'; // Make sure the lock image path is correct
// import logo from '../assests/logo.png';
// import { useNavigate } from 'react-router-dom';

// function LevelsPage() {
//     const [games, setGames] = useState([]);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         getGameData();
//     }, []);

//     const refreshAccessToken = () => {
//         const refreshToken = localStorage.getItem('refreshToken');
//         if (!refreshToken) {
//             console.error('Refresh token not found in local storage');
//             return Promise.reject('No refresh token');
//         }

//         return axios.post('https://api-flrming.dhoomaworksbench.site/api/token/refresh/', {
//             refresh: refreshToken
//         })
//             .then(response => {
//                 const { access } = response.data;
//                 localStorage.setItem('accessToken', access);
//                 return access;
//             })
//             .catch(error => {
//                 console.error('Error refreshing access token:', error);
//                 return Promise.reject('Token refresh failed');
//             });
//     };

//     const getGameData = () => {
//         const token = localStorage.getItem('accessToken');
//         if (!token) {
//             console.error('Access token not found in local storage');
//             return;
//         }

//         axios.get('https://api-flrming.dhoomaworksbench.site/api/game/type/', {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 setGames(response.data.results);
//             })
//             .catch(error => {
//                 if (error.response && error.response.data.code === 'token_not_valid') {
//                     console.log('Token expired, refreshing token...');
//                     refreshAccessToken().then(newToken => {
//                         if (newToken) {
//                             axios.get('https://api-flrming.dhoomaworksbench.site/api/game/type/', {
//                                 headers: {
//                                     Authorization: `Bearer ${newToken}`
//                                 }
//                             })
//                                 .then(response => {
//                                     setGames(response.data.results);
//                                 })
//                                 .catch(error => {
//                                     console.error('Error fetching game data with new token:', error);
//                                     setError('Failed to fetch game data.');
//                                 });
//                         }
//                     });
//                 } else {
//                     console.error('Error fetching game data:', error);
//                     setError('Failed to fetch game data.');
//                 }
//             });
//     };
//     const navigate = useNavigate();

//     const navigateToTask = (task) => {
//         console.log('Task ID:', task);
//         const url = `https://api-flrming.dhoomaworksbench.site/user-game-list?game_type=${task}`;
//         const token = localStorage.getItem('accessToken');

//         axios.get(url, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//             .then(response => {
//                 console.log(response.data);
//                 navigate('/game-list');
//                 // if (response.data && response.data.length > 0) {
//                 //     navigate('/home');
//                 // } else {

//                 //     console.error('Invalid response data');
//                 // }
//             })
//             .catch(error => {
//                 console.error('Error fetching game data:', error);
//             });
//     };

//     // Define an array of colors for the tasks
//     const taskColors = [
//         'rgb(19, 203, 28)',
//         'rgb(16, 241, 94)',
//         'rgb(19, 223, 91)',
//         'rgb(19, 223, 148)',
//         'rgb(11, 156, 103)',
//         'rgb(132, 156, 11)',
//         'rgb(11, 103, 156)',
//         'rgb(110, 11, 156)',
//         'rgb(156, 11, 98)',
//         'rgb(255, 15, 15)'
//     ];

//     return (
//         <>
//             <div className="header">
//                 <div className="logo-section">
//                     <div className="logo">
//                         <img src={logo} alt="logo" />
//                     </div>
//                     <div className="home-level">
//                         <span>Home</span> |
//                         <span className="level-heading">Levels</span>
//                     </div>
//                 </div>
//                 <div className="task-header">
//                     <h2>TASK </h2>
//                 </div>
//             </div>
//             <div className="levels-page mt-5">
//                 {error && <div className="error-message" style={{ color: 'white' }}>{error}</div>}
//                 <div className="container oval-container mt-5" >
//                     {games.map((game, index) => (
//                         <div key={game.id} id={`task-${game.id}`} className="oval-button mb-3" style={{ backgroundColor: taskColors[index % taskColors.length] }} onClick={() => navigateToTask(game.id)}>
//                             <div className="left-side">*</div>
//                             <span>{game.tittle}</span>
//                             <div className="right-side">
//                                 <img src={lock} alt="Lock" style={{ width: '20px', height: '20px', color: 'white' }} />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="footer">
//                 <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
//             </div></>
//     );
// }

// export default LevelsPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import lock from '../assests/lock.png';
import logo from '../assests/logo.png';
import { useNavigate } from 'react-router-dom';

function LevelsPage() {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getGameData();
    }, []);

    const refreshAccessToken = () => {
        const refreshToken = sessionStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error('Refresh token not found in local storage');
            return Promise.reject('No refresh token');
        }

        return axios.post('https://api-flrming.dhoomaworksbench.site/api/token/refresh/', {
            refresh: refreshToken
        })
            .then(response => {
                const { access } = response.data;
                sessionStorage.setItem('accessToken', access);
                return access;
            })
            .catch(error => {
                console.error('Error refreshing access token:', error);
                return Promise.reject('Token refresh failed');
            });
    };

    const getGameData = () => {
        const token = sessionStorage.getItem('accessToken');
        if (!token) {
            console.error('Access token not found in local storage');
            return;
        }

        axios.get('https://api-flrming.dhoomaworksbench.site/api/game/type/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setGames(response.data.results);
            })
            .catch(error => {
                if (error.response && error.response.data.code === 'token_not_valid') {
                    console.log('Token expired, refreshing token...');
                    refreshAccessToken().then(newToken => {
                        if (newToken) {
                            axios.get('https://api-flrming.dhoomaworksbench.site/api/game/type/', {
                                headers: {
                                    Authorization: `Bearer ${newToken}`
                                }
                            })
                                .then(response => {
                                    setGames(response.data.results);
                                })
                                .catch(error => {
                                    console.error('Error fetching game data with new token:', error);
                                    setError('Failed to fetch game data.');
                                });
                        }
                    });
                } else {
                    console.error('Error fetching game data:', error);
                    setError('Failed to fetch game data.');
                }
            });
    };

    const navigate = useNavigate();
    const navigateToTask = (taskId) => {
        const url = `/game-list?taskId=${taskId}`;
        navigate(url);
    };
    

    const taskColors = [
        'rgb(19, 203, 28)',
        'rgb(16, 241, 94)',
        'rgb(19, 223, 91)',
        'rgb(19, 223, 148)',
        'rgb(11, 156, 103)',
        'rgb(132, 156, 11)',
        'rgb(11, 103, 156)',
        'rgb(110, 11, 156)',
        'rgb(156, 11, 98)',
        'rgb(255, 15, 15)'
    ];

    return (
        <>
            <div className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="home-level">
                        <span>Home</span> |
                        <span className="level-heading">Logout</span>
                    </div>
                </div>
                <div className="task-header">
                    <h2>TASK </h2>
                </div>
            </div>
            <div className="levels-page mt-5">
                {error && <div className="error-message" style={{ color: 'white' }}>{error}</div>}
                <div className="container oval-container mt-5" >
                    {games.map((game, index) => (
                        <div key={game.id} id={`task-${game.id}`} className="oval-button mb-3" style={{ backgroundColor: taskColors[index % taskColors.length] }} onClick={() => navigateToTask(game.id)}>
                            <div className="left-side">*</div>
                            <span style={{ cursor: 'pointer' }}>{game.tittle}</span>
                            <div className="right-side">
                                <img src={lock} alt="Lock" style={{ width: '20px', height: '20px', color: 'white' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div></>
    );
}

export default LevelsPage;
