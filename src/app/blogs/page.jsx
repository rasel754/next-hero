import Link from 'next/link';
import React from 'react';

const blogPage = () => {
    return (
        <div>
            {
                blogs.map(blog => (
                    <div className='border-2 space-y-5 mt-3 text-center h-44 w-1/2 ' key={blog.slug}>
                        <h2>{blog.title}</h2>
                        <p>{blog.description}</p>
                        <button className='text-yellow-500 bg-gray-400 p-2 rounded-2xl'>
                            <Link href={`/blogs/${blog.slug}`}>view Details</Link>
                            </button>
                    </div>
                ))
            }
        </div>
    );
};

export default blogPage;

const blogs = [
    {
      "slug": "productivity-tips",
      "title": "Top 10 Productivity Tips",
      "description": "Learn the best tips to boost your productivity and get more done in less time."
    },
    {
      "slug": "healthy-eating",
      "title": "Healthy Eating for Beginners",
      "description": "A guide to starting a healthy eating lifestyle with easy-to-follow tips."
    },
    {
      "slug": "workout-routine",
      "title": "Daily Workout Routine",
      "description": "A simple daily workout routine to keep you fit and active."
    },
    {
      "slug": "time-management",
      "title": "Mastering Time Management",
      "description": "Effective time management strategies to help you balance work and life."
    },
    {
      "slug": "travel-hacks",
      "title": "Top Travel Hacks",
      "description": "Discover the best travel hacks to save money and time on your next trip."
    },
    {
      "slug": "financial-planning",
      "title": "Financial Planning Basics",
      "description": "An introduction to financial planning to secure your financial future."
    },
    {
      "slug": "digital-marketing",
      "title": "Digital Marketing 101",
      "description": "A beginner's guide to digital marketing strategies and tools."
    },
    {
      "slug": "mindfulness-practices",
      "title": "Mindfulness Practices for Beginners",
      "description": "Learn simple mindfulness practices to reduce stress and improve mental clarity."
    },
    {
      "slug": "eco-friendly-living",
      "title": "Eco-Friendly Living",
      "description": "Tips and tricks for living an eco-friendly and sustainable lifestyle."
    },
    {
      "slug": "personal-growth",
      "title": "Personal Growth Strategies",
      "description": "Effective strategies to promote personal growth and self-improvement."
    },
    {
      "slug": "remote-work-tips",
      "title": "Remote Work Tips",
      "description": "How to stay productive and balanced while working remotely."
    },
    {
      "slug": "coding-basics",
      "title": "Coding Basics for Beginners",
      "description": "An introduction to coding for those new to programming."
    },
    {
      "slug": "creative-writing",
      "title": "Creative Writing Exercises",
      "description": "Fun and engaging exercises to spark your creativity in writing."
    },
    {
      "slug": "mental-health-awareness",
      "title": "Mental Health Awareness",
      "description": "Understanding and promoting mental health awareness."
    },
    {
      "slug": "budgeting-tips",
      "title": "Budgeting Tips for Beginners",
      "description": "Simple tips to help you start budgeting and managing your money."
    },
    {
      "slug": "public-speaking",
      "title": "Public Speaking Tips",
      "description": "Learn the essential skills to become a confident public speaker."
    },
    {
      "slug": "gardening-guide",
      "title": "Beginner's Gardening Guide",
      "description": "A comprehensive guide to starting your own garden."
    },
    {
      "slug": "photography-tips",
      "title": "Photography Tips for Beginners",
      "description": "Tips and tricks to improve your photography skills."
    },
    {
      "slug": "stress-management",
      "title": "Stress Management Techniques",
      "description": "Effective techniques to manage and reduce stress."
    },
    {
      "slug": "home-organization",
      "title": "Home Organization Tips",
      "description": "Practical tips for keeping your home organized and clutter-free."
    }
  ]
  