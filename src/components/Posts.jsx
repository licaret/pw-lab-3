import React from 'react';
import CardPost from './CardPost';

export default function Posts() {
    return (
        <div className="posts">
            <h1>Posts</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardPost />
                <CardPost />
                <CardPost />
            </div>
        </div>
    );
}