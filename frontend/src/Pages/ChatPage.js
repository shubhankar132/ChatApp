import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        try {
            const response = await axios.get('/api/chat');
            setChats(response.data); // Assuming response.data is an array
        } catch (error) {
            console.error('Error fetching chats:', error);
        }
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}> {/* Assuming _id is a unique identifier */}
                    {chat.chatName}
                </div>
            ))}
        </div>
    );
};

export default ChatPage;
