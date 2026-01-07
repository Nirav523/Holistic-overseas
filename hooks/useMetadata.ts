import { useEffect } from "react";

export default function useMetadata(title: string, description: string) {
  useEffect(() => {
    // Update Browser Tab Title
    if (title) {
      document.title = title;
    }

    // Update Meta Description for Google Search
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = description;
        document.head.appendChild(meta);
      }
    }
  }, [title, description]);
}