export interface Fundraiser {
  id: string;
  title: string;
  category: string;
  goal: number;
  raised: number;
  organizer: string;
  location: string;
  image: string;
  description: string;
  donors: number;
  created_at: string;
}
