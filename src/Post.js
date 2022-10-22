import React from 'react';
import "./Post.css"
import {Avatar} from '@material-ui/core';
import InputOption from "./InputOption";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined"
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined"
import SharedOutlinedIcon from "@material-ui/icons/Share"
import SendOutlinedIcon from "@material-ui/icons/SendOutlined"

const Post = ({name, description, message, photoUrl}) => {



    return (
        <div className="post">
            <div className="post__header">
                <Avatar/>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon}
                             title="Like"
                             color="gray"
                />
                <InputOption Icon={ChatOutlinedIcon}
                             title="Comment"
                             color="gray"
                />
                <InputOption Icon={SharedOutlinedIcon}
                             title="Share"
                             color="gray"
                />
                <InputOption Icon={SendOutlinedIcon}
                             title="Send"
                             color="gray"
                />


            </div>

        </div>
    )
}

export default Post;