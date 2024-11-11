import { useEffect, useRef, useState } from 'react';

const BarChart = () => {
    const canvasRef = useRef(null);
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, text: '' });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const data = {
            male: 2305,
            female: 2199,
        };

        const total = data.male + data.female;
        const maleHeight = (data.male / total) * 200;
        const femaleHeight = (data.female / total) * 200;

        const colors = {
            male: '#3498db',
            female: '#e74c3c',
        };

        // Function to draw the bar chart
        const drawChart = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Male bar
            ctx.fillStyle = colors.male;
            ctx.fillRect(50, canvas.height - maleHeight, 100, maleHeight);
            ctx.fillStyle = '#000';
            ctx.fillText('Male', 85, canvas.height - maleHeight - 10);

            // Female bar
            ctx.fillStyle = colors.female;
            ctx.fillRect(200, canvas.height - femaleHeight, 100, femaleHeight);
            ctx.fillStyle = '#000';
            ctx.fillText('Female', 225, canvas.height - femaleHeight - 10);
        };

        // Initial chart drawing
        drawChart();

        // Function to handle mouse move
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Check if mouse is over male bar
            if (x > 50 && x < 150 && y > canvas.height - maleHeight) {
                setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: `Male: ${data.male}` });
            }
            // Check if mouse is over female bar
            else if (x > 200 && x < 300 && y > canvas.height - femaleHeight) {
                setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: `Female: ${data.female}` });
            } else {
                setTooltip({ visible: false, x: 0, y: 0, text: '' });
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        return () => {
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }}>
            <canvas ref={canvasRef} width="400" height="300" />
            {tooltip.visible && (
                <div
                    style={{
                        position: 'absolute',
                        top: tooltip.y,
                        left: tooltip.x,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        color: '#fff',
                        padding: '5px',
                        borderRadius: '3px',
                        pointerEvents: 'none',
                        transform: 'translate(-50%, -120%)',
                    }}
                >
                    {tooltip.text}
                </div>
            )}
        </div>
    );
};

export default BarChart;
