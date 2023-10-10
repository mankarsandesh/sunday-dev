import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const getTimestamp = (createdAt: Date): string => {
    const now = new Date();
    const timeDifferenceInSeconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

    if (timeDifferenceInSeconds < 60) {
        // Less than a minute ago
        return `${timeDifferenceInSeconds} second${timeDifferenceInSeconds !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 3600) {
        // Minutes ago
        const minutes = Math.floor(timeDifferenceInSeconds / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 86400) {
        // Hours ago
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 604800) {
        // Days ago
        const days = Math.floor(timeDifferenceInSeconds / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 2419200) {
        // Weeks ago
        const weeks = Math.floor(timeDifferenceInSeconds / 604800);
        return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (timeDifferenceInSeconds < 29030400) {
        // Months ago
        const months = Math.floor(timeDifferenceInSeconds / 2419200);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        // Years ago
        const years = Math.floor(timeDifferenceInSeconds / 29030400);
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
};


export const simplifyNumber = (number: number): string => {
    if (number >= 1000000) {
        // Convert to millions (M)
        const millions = (number / 1000000).toFixed(1);
        return `${millions}M`;
    } else if (number >= 1000) {
        // Convert to thousands (k)
        const thousands = (number / 1000).toFixed(1);
        return `${thousands}k`;
    } else {
        return number.toString();
    }
};

