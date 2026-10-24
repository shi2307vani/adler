import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function SensoryArcItem({ title, time, description, icon, iconBg = 'bg-primary-container text-secondary-fixed' }) {
  return (
    <div className="p-5 rounded-xl bg-surface-container shadow-sm flex items-start gap-4 border border-secondary/10">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-xs ${iconBg}`}>
        <Icon name={icon} size="20px" />
      </div>
      <div>
        <h4 className="font-headline-sm text-headline-sm text-primary mb-1 font-bold">
          {title} <span className="font-label-sm text-secondary font-normal">// {time}</span>
        </h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
