import type { FeatureStatusType } from "./FeatureStatusType";


export interface FeatureRequest {
  title: string;
  description: string;
  count?: number;
  name?: string;
  email?: string;
  date: string; 
  topic: 'Improvement' | 'New feature' | 'Styling' | 'Bug Report'|string;
  status: FeatureStatusType;
}