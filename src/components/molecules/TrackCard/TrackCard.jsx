import React from 'react';
import Icon from '../../atoms/Icon/Icon';

export default function TrackCard({ track, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className="group relative rounded-xl bg-surface-container-lowest p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer border border-secondary/10 transform hover:-translate-y-1"
    >
      <div
        className={`absolute -top-3 left-6 px-3 py-0.5 rounded-full font-label-sm text-label-sm uppercase tracking-widest font-bold shadow-xs ${track.badgeClass}`}
      >
        {track.track}
      </div>
      <div className="pt-2">
        <div
          className={`w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-5 transition-colors ${track.iconColor} ${track.hoverBg}`}
        >
          <Icon name={track.icon} size="24px" />
        </div>
        <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-bold">
          {track.title}
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 leading-relaxed">
          {track.description}
        </p>
      </div>
      <div className="pt-4 flex items-center justify-between text-secondary border-t border-surface-container">
        <span className="font-label-md text-label-md uppercase tracking-wider font-semibold">
          {track.requirement}
        </span>
        <Icon
          name="arrow_forward"
          size="20px"
          className="transform group-hover:translate-x-1.5 transition-transform"
        />
      </div>
    </div>
  );
}
