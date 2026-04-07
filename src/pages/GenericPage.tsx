import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GenericPage({ title }: { title: string }) {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-carbon text-center">
      <h1 className="text-3xl font-display font-light text-white mb-4">{title}</h1>
      <p className="text-mist font-sans">More detailed implementation mapped to Stitch spec.</p>
    </div>
  );
}
