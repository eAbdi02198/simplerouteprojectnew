import React from 'react';
import './Panel.css';

export default function Panel() {
  return (
    <div className="panel">
      <div className="panel-header">
        <h1>پنل مدیریت</h1>
      </div>
      <div className="panel-content">
        <div className="panel-card">کاربران</div>
        <div className="panel-card">سفارش‌ها</div>
        <div className="panel-card">پیام‌ها</div>
      </div>
    </div>
  );
}