import React from 'react';
import { Card, Table } from 'react-bootstrap';
import './contentModeration.css';

const ContentModeration = ({ data }) => {
  const { daily, monthly } = data;

  return (
    <Card>
      <Card.Header>
        <Card.Title>Content Moderation</Card.Title>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Daily</th>
              <th>Monthly</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Total Posts</td>
              <td>{daily.totalPosts}</td>
              <td>{monthly.totalPosts}</td>
            </tr>
            <tr>
              <td>Total Views</td>
              <td>{daily.totalViews}</td>
              <td>{monthly.totalViews}</td>
            </tr>
            <tr>
              <td>Posts Blocked</td>
              <td>{daily.totalPostBlocked}</td>
              <td>{monthly.totalPostBlocked}</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default ContentModeration;
