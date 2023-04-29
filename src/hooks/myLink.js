import React from 'react';
import { Link } from 'react-router-dom';

const baseUrl2 = 'http://localhost:3600';
function MyLink({ to, children }) {
  return <Link to={`${baseUrl2}${to}`}>{children}</Link>;
}

export default MyLink;