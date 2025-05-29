import React from 'react';
import type { FeatureStatusType } from '../models/FeatureStatusType';

type FeatureStatusProps = {
  status: FeatureStatusType;
};

const STATUS_STYLES: Record<FeatureStatusType, string> = {
  Planned: 'border-blue-200 bg-blue-100 text-blue-800',
  'Under Consideration': 'border-orange-200 bg-orange-100 text-orange-800',
  Completed: 'border-emerald-200 bg-emerald-100 text-emerald-800',
  'Under Review': 'border-purple-200 bg-purple-100 text-purple-800',
  'In Progress': 'border-cyan-200 bg-cyan-100 text-cyan-800'
};

const FeatureStatus: React.FC<FeatureStatusProps> = ({ status }) => {
  const statusClass =
    STATUS_STYLES[status] ?? 'border-gray-200 bg-gray-100 text-gray-800';

  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-1 rounded-sm border ${statusClass}`}
    >
      {status}
    </span>
  );
};

export default FeatureStatus;
