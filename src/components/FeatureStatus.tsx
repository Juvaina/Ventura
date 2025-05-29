type FeatureStatusProps = {
  status: string;
};

const FeatureStatus = ({ status }: FeatureStatusProps) => {
  let statusClass;
  switch (status) {
    case 'Planned':
      statusClass = 'border-blue-200 bg-blue-100 text-blue-800';
      break;
    case 'Under Consideration':
      statusClass = 'border-orange-200 bg-orange-100 text-orange-800';
      break;
    case 'Completed':
      statusClass = 'border-emerald-200 bg-emerald-100 text-emerald-800';
      break;
    case 'Under Review':
      statusClass = 'border-purple-200 bg-purple-100 text-purple-800';
      break;
    case 'In Progress':
      statusClass = 'border-cyan-200 bg-cyan-100 text-cyan-800';
      break;
  }
  return (
    <span
      className={`inline-block text-xs font-medium px-2 py-1 rounded-sm border ${statusClass}`}
    >
      {status}
    </span>
  );
};

export default FeatureStatus;
