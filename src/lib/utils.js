import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getFirstLetter(str) {
  return str.charAt(0).toUpperCase();
}


export function getFirstName(fullName) {
  if (!fullName) return fullName;
  return fullName.split(' ')[0];
}

// function to get last name of full name
export function getLastName(fullName) {
  if (!fullName) return fullName;
  return fullName.split(' ').slice(-1).join(' ');
}

//get mail id from username
export function getMailId(username) {
  if (!username) return username;
  username = username.toLowerCase();
  return username.replace(/\s/g, '') + "@gmail.com";
}

export function timeAgoFromISO(timestamp) {
  const currentTimestamp = new Date();
  const providedTimestamp = new Date(timestamp);

  // Calculate the time difference in milliseconds
  const timeDifference = currentTimestamp - providedTimestamp;

  // Convert milliseconds to minutes
  const minutesAgo = Math.floor(timeDifference / (1000 * 60));

  if (minutesAgo < 1) {
    return 'Just now';
  } else if (minutesAgo === 1) {
    return '1 min ago';
  } else {
    return `${minutesAgo} mins ago`;
  }
}

export const Loader = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <style>
      {`.spinner_P7sC {
          transform-origin: center;
          animation: spinner_svv2 .75s infinite linear;
        }
        @keyframes spinner_svv2 {
          100% { transform: rotate(360deg); }
        }`}
    </style>
    <path
      d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
      className="spinner_P7sC text-white bg-white"
    />
  </svg>
)
