import type { FeatureStatusType } from "../models/FeatureStatusType";

type FeatureStatusProps = {
  status: FeatureStatusType;
};

const STATUS_STYLES: Record<FeatureStatusType, string> = {
  Planned: "border-blue-200 bg-blue-100 text-blue-800",
  "On hold": "border-orange-200 bg-orange-100 text-orange-800",
  Completed: "border-emerald-200 bg-emerald-100 text-emerald-800",
  Review: "border-purple-200 bg-purple-100 text-purple-800",
  Progress: "border-cyan-200 bg-cyan-100 text-cyan-800",
};

const FeatureStatus = ({ status }: FeatureStatusProps) => {
  const statusClass =
    STATUS_STYLES[status] ?? "border-gray-200 bg-gray-100 text-gray-800";

  return (
    <span
      className={`inline-block md:text-sm text-xs font-medium px-1 md:px-2  py-[0.5] rounded-sm border ${statusClass}`}
    >
      {status}
    </span>
  );
};

export default FeatureStatus;
