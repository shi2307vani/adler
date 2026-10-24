import React from 'react';

export default function Textarea({
  label,
  id,
  placeholder,
  value,
  onChange,
  rows = 3,
  required = false,
  className = '',
  name,
  error
}) {
  return (
    <div className={`flex flex-col gap-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold"
        >
          {label} {required && <span className="text-secondary font-bold">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-primary font-body-sm text-body-sm border border-transparent focus:border-primary-container focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-all shadow-sm resize-none"
      />
      {error && <span className="text-error font-body-sm text-xs mt-0.5">{error}</span>}
    </div>
  );
}
