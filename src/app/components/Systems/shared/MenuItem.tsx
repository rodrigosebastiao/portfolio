import React from 'react';

export default function MenuItem({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex items-center whitespace-nowrap cursor-pointer select-none px-4">
      {children}
    </div>
  );
}