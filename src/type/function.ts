  export function getBanglaTimeAgo(dateString: string): string {
    const publishedDate = new Date(dateString);
    const now = new Date();

    const diffInSeconds = Math.floor(
      (now.getTime() - publishedDate.getTime()) / 1000,
    );

    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;

    const toBanglaNumber = (num: number): string => {
      return num.toString().replace(/\d/g, (digit: string) => {
        return "০১২৩৪৫৬৭৮৯"[Number(digit)];
      });
    };

    if (diffInSeconds < minute) {
      return "এইমাত্র";
    }

    if (diffInSeconds < hour) {
      const minutes = Math.floor(diffInSeconds / minute);
      return `${toBanglaNumber(minutes)} মিনিট আগে`;
    }

    if (diffInSeconds < day) {
      const hours = Math.floor(diffInSeconds / hour);
      return `${toBanglaNumber(hours)} ঘণ্টা আগে`;
    }

    const days = Math.floor(diffInSeconds / day);

    if (days < 7) {
      return `${toBanglaNumber(days)} দিন আগে`;
    }

    return publishedDate.toLocaleDateString("bn-BD");
  }



  // make text shorter
  export function textshorter(text: string): string {
  const words = text.trim().split(/\s+/);
  
  if (words.length <= 14) {
    return text;
  }
  
  return words.slice(0, 14).join(" ") + "...";
}
