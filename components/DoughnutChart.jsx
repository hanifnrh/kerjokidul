import { useEffect, useRef, useState } from 'react';

const DoughnutChart = () => {
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
        const malePercentage = (data.male / total) * 100;
        const femalePercentage = (data.female / total) * 100;

        const colors = {
            male: '#3498db',
            female: '#e74c3c',
        };

        // Function to draw a segment
        const drawSegment = (ctx, startAngle, endAngle, color) => {
            ctx.beginPath();
            ctx.arc(150, 150, 100, startAngle, endAngle);
            ctx.lineTo(150, 150);
            ctx.fillStyle = color;
            ctx.fill();
        };

        // Function to draw the chart
        const drawChart = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const maleStartAngle = 0;
            const maleEndAngle = (malePercentage / 100) * 2 * Math.PI;
            const femaleStartAngle = maleEndAngle;
            const femaleEndAngle = femaleStartAngle + (femalePercentage / 100) * 2 * Math.PI;
            drawSegment(ctx, maleStartAngle, maleEndAngle, colors.male);
            drawSegment(ctx, femaleStartAngle, femaleEndAngle, colors.female);
            ctx.beginPath();
            ctx.arc(150, 150, 60, 0, 2 * Math.PI);
            ctx.fillStyle = '#ffffff';
            ctx.fill();
        };

        // Initial chart drawing
        drawChart();

        // Function to handle mouse move
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const distanceFromCenter = Math.sqrt(Math.pow(x - 150, 2) + Math.pow(y - 150, 2));

            if (distanceFromCenter > 60 && distanceFromCenter < 100) {
                const angle = Math.atan2(y - 150, x - 150);
                const adjustedAngle = angle < 0 ? angle + 2 * Math.PI : angle;
                if (adjustedAngle >= 0 && adjustedAngle <= (malePercentage / 100) * 2 * Math.PI) {
                    setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: `Male: ${data.male}` });
                } else {
                    setTooltip({ visible: true, x: e.clientX, y: e.clientY, text: `Female: ${data.female}` });
                }
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
            <canvas ref={canvasRef} width="300" height="300" />
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

export default DoughnutChart;
