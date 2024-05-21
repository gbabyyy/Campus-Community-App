import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './componentStyles/LevelsPage.css';
import logo from '../assests/logo.png';
import lock from '../assests/lock.png';

const GameListPage = () => {

    const [gameData, setGameData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getGameList();
    }, []);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const taskId = queryParams.get('taskId');

    const getGameList = () => {
        const token = sessionStorage.getItem('accessToken');
        const url = `https://api-flrming.dhoomaworksbench.site/user-game-list?game_type=${taskId}`;
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setGameData(response.data.data);
                console.log(response.data.data, 'response')
            })
            .catch(error => {
                console.error('Error fetching game data:', error);
                setError('Failed to fetch game data.');
            });
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
            {/* Header Section Start Here! */}
            <div className="header">
                <div className="logo-section">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="home-level">
                        <span>Home</span> |
                        <span className="level-heading">Levels</span>
                    </div>
                </div>
                <div className="task-header">
                    <h2>TASK COMPLETED</h2>
                </div>
            </div>
            {/* Level Section Start Here! */}
            <div className="levels-page mt-5">
                {error && <div className="error-message" style={{ color: 'white' }}>{error}</div>}
                <div className="container oval-container mt-5" >
                    {gameData.map((game, index) => (
                        <div key={game.id} id={`task-${game.id}`} className="oval-button mb-3" style={{ backgroundColor: taskColors[index % taskColors.length] }}>
                            <div className="left-side">*</div>
                            <span style={{ cursor: 'pointer' }}>{game.tittle}</span>
                            <div className="right-side">
                                <img src={lock} alt="Lock" style={{ width: '20px', height: '20px', color: 'white' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Section Start Here! */}
            <div className="footer">
                <h3 className="footer-heading">Copy@ 2024 fleming.ca, All Right Reserved</h3>
            </div>
        </>
    );
};

export default GameListPage;


