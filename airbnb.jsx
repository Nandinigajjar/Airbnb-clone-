import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AirbnbDashboard = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Bookings',
                data: [12, 19, 3, 5, 2, 3, 15],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        };

        setChartData(data);
    }, []);

    useEffect(() => {
        if (chartData) {
            // Initialize Chart.js
            const ctx = document.getElementById('bookingChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }, [chartData]);

    return (
        <div>
            <h2>Booking Statistics</h2>
            <div>
                <canvas id="bookingChart" width="400" height="200"></canvas>
            </div>
        </div>
    );
};

export default AirbnbDashboard;
