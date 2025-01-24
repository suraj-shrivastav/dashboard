import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processChartData, getColorScheme } from '../utils/chartUtils';
import './EngagementAnalytics.css';

const EngagementAnalytics = ({ userChartData, engagementData }) => {
  const { daily } = engagementData;

  return (
    <div className="engagement-analytics-card">
      <div className="engagement-analytics-header">
        <h2>Engagement Analytics</h2>
      </div>
      <div className="engagement-analytics-body">
        <div className="engagement-analytics-statistics">
          <h3>Daily Engagement</h3>
          <ul>
            <li>Likes: {daily.totalLikes}</li>
            <li>Views: {daily.totalViews}</li>
            <li>Messages: {daily.totalMessage}</li>
            <li>Private Chats: {daily.privateChats}</li>
          </ul>
        </div>
        <div className="engagement-analytics-chart">
          <ResponsiveContainer>
            <LineChart data={processChartData(userChartData)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke={getColorScheme(1)}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EngagementAnalytics;
