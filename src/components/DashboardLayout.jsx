import React, { useState, useEffect } from 'react';
import './DashboardLayout.css';
import UserMetrics from './UserMetrics';
import ContentModeration from './ContentModeration';
import EngagementAnalytics from './EngagementAnalytics';
import BlockchainMetrics from './BlockchainMetrics';

const DashboardLayout = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('users');

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const response = await fetch('/data.json', {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setDashboardData(data.dashboard);
        console.log('Dashboard data:', data.dashboard);
      } catch (error) {
        console.error('Failed to load dashboard data', error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="dashboard-tabs">
        <button
          onClick={() => setActiveTab('users')}
          className={`dashboard-tab-button ${
            activeTab === 'users' ? 'active' : ''
          }`}
        >
          User Metrics
        </button>
        <button
          onClick={() => setActiveTab('content')}
          className={`dashboard-tab-button ${
            activeTab === 'content' ? 'active' : ''
          }`}
        >
          Content
        </button>
        <button
          onClick={() => setActiveTab('engagement')}
          className={`dashboard-tab-button ${
            activeTab === 'engagement' ? 'active' : ''
          }`}
        >
          Engagement
        </button>
        <button
          onClick={() => setActiveTab('blockchain')}
          className={`dashboard-tab-button ${
            activeTab === 'blockchain' ? 'active' : ''
          }`}
        >
          Blockchain
        </button>
      </div>
      <div className="dashboard-content">
        {activeTab === 'users' && <UserMetrics data={dashboardData.userMetrics} />}
        {activeTab === 'content' && (
          <ContentModeration data={dashboardData.contentMetrics} />
        )}
        {activeTab === 'engagement' && (
          <EngagementAnalytics
            userChartData={dashboardData.userMetrics.daily.chartData}
            engagementData={dashboardData.engagementMetrics}
          />
        )}
        {activeTab === 'blockchain' && (
          <BlockchainMetrics data={dashboardData.blockchainMetrics} />
        )}
      </div>
    </div>
  );
};

export default DashboardLayout;
