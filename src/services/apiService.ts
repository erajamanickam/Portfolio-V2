import { PortfolioData } from '../types';

export const fetchData = async (): Promise<PortfolioData | null> => {
    try {
        const response = await fetch('/api/data.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: PortfolioData = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};
