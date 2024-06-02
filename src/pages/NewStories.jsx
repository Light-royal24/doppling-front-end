import React, { useState } from 'react'
import PostStory from '../components/PostStory'
import Stories from '../components/StoryViewer'

const NewStories = () => {
    const [stories, setStories] = useState([
        { id: 1, imageUrl: 'https://via.placeholder.com/300', caption: 'First story' },
        { id: 2, imageUrl: 'https://via.placeholder.com/300', caption: 'Second story' },
        { id: 3, imageUrl: 'https://via.placeholder.com/300', caption: 'Third story' },
      ]);
    
      const addStory = (story) => {
        setStories([...stories, { id: stories.length + 1, ...story }]);
      };
  return (
    <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 text-center">
            <h1 className="text-2xl">Story App</h1>
        </header>
        <main className="p-4">
            <PostStory addStory={addStory} />
            <Stories stories={stories} />
        </main>
    </div>
  )
}

export default NewStories
