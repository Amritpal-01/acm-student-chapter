export interface IconPropType {
    width: number,
    height: number,
    color: string
}

export interface NotifyPropType {
  message: string;
  duration?: number;
}

export type formPayloadType = {
  email: string;
  full_name: string;
  justification?: string;
  skill?: string[];
  course_name: string;
  study_year: string;
  role: string;
};