import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processChartData, getColorScheme } from '../utils/chartUtils';
import './UserMetrics.css';

const UserMetrics = ({ data }) => {
  const { daily, monthly, allTime } = data;

  return (
    <div className="user-metrics-card">
      <div className="user-metrics-header">
        <h2>User Metrics</h2>
      </div>
      <div className="user-metrics-body">
        <div className="user-metrics-statistics">
          <h3>User Statistics</h3>
          <ul>
            <li>Daily Users: {daily.totalUser}</li>
            <li>Active Users: {daily.activeUser}</li>
            <li>Monthly Total Users: {monthly.totalUser}</li>
            <li>All-Time Users: {allTime.totalUser}</li>
          </ul>
        </div>
        <div className="user-metrics-chart">
          <ResponsiveContainer>
            <LineChart data={processChartData(daily.chartData)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="count"
                stroke={getColorScheme(0)}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserMetrics;
