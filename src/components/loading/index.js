import React from 'react';
import './index.scss';

export default function Loading({ loading }) { 
  return loading && <div className="loading" />;
}