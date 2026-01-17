'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const VisualEditsMessenger = dynamic(
    () => import('../visual-edits/VisualEditsMessenger').then((mod) => mod.default),
    { ssr: false }
);

export default function VisualEditsWrapper() {
    return <VisualEditsMessenger />;
}
