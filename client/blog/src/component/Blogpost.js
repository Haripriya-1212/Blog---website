import { formatISO9075 } from 'date-fns'
import { Link } from 'react-router-dom';
import React from 'react'

export default function Blogpost({_id, title, summary, content, cover, createdAt, author}) {
  return (
    <div className="post">
        <div className="image">
          <Link to={'/post/'+_id}>
            <img src={'http://localhost:4000/'+ cover} alt=""/>
          </Link>
        </div>
        <div className="text">
          <Link to={'/post/'+_id}>
            <h2>{title}</h2>
          </Link>
          <p className="info">
            <a className="author">{author.username}</a> &nbsp;|
            <date>{formatISO9075(createdAt)}</date>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
  )
}
