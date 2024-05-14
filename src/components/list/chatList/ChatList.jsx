import React, { useState } from 'react';
import './chatList.css';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList'>
        <div className='search'>
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add' onClick={() => setAddMode((prev) => !prev)}/>
        </div>

        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Sreya Ghosh</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Rusha Roy</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Priya Ghosh</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
        <div className="item">
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Imtiaz Ali</span>
                <p>keep smiling</p>
            </div>
        </div>
    </div>
  )
}

export default ChatList