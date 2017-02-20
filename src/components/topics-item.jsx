import React from 'react'
import Link from 'react-router/lib/Link'
import Actions from './item-actions'

export default props => {
    const item = props.payload
    return (
        <div className="card feed">
            <div className="feed-content"> <span className="feed-time">{ item.creat_date }</span><span className="feed-source">来自分类 <Link to={'/category/' + item.category} className="feed-minor-link">{item.category_name}</Link></span>
                <div className="feed-main-link-wrap"><Link to={'/article/' + item._id} className="feed-main-link">{item.title}</Link></div>
                <div className="feed-desc-wrap">
                    <div className="feed-article-content markdown-body">{item.content}</div>
                </div>
            </div>
            <Actions payload={item} />
        </div>
    )
}
