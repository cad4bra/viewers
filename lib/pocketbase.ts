import PocketBase from 'pocketbase';

// Initialize PocketBase client
// In production, use environment variable for the URL
const pb = new PocketBase(
  process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://127.0.0.1:8090'
);

// Types for PocketBase collections
export interface ProjectContent {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  key: string;
  title: string;
  content: string;
}

export interface Service {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface ShowcaseItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  featured: boolean;
  order: number;
}

// Helper functions to fetch data
export const fetchProjectContent = async (key: string): Promise<ProjectContent | null> => {
  try {
    const record = await pb
      .collection('project_content')
      .getFirstListItem(`key="${key}"`);
    return record as ProjectContent;
  } catch (error) {
    console.error(`Error fetching project content for key "${key}":`, error);
    return null;
  }
};

export const fetchAllServices = async (): Promise<Service[]> => {
  try {
    const records = await pb
      .collection('services')
      .getFullList<Service>({
        sort: 'order',
      });
    return records;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const fetchAllShowcaseItems = async (featuredOnly: boolean = false): Promise<ShowcaseItem[]> => {
  try {
    const filter = featuredOnly ? 'featured=true' : '';
    const records = await pb
      .collection('showcase')
      .getFullList<ShowcaseItem>({
        sort: 'order',
        filter,
      });
    return records;
  } catch (error) {
    console.error('Error fetching showcase items:', error);
    return [];
  }
};

export default pb;
