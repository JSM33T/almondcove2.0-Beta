import  { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function BlogView() {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    async function fetchMarkdownContent() {
      try {
        const response = await fetch('./src/assets/content.md');
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
        console.log(response);
      } catch (error) {
        console.error('Error fetching markdown content:', error);
      }
    }

    fetchMarkdownContent();
  }, []);

  return (
    <div className='pt-5 mt-5 container'>
      <Markdown>{markdownContent}</Markdown>
    </div>
  );
}

export default BlogView;
