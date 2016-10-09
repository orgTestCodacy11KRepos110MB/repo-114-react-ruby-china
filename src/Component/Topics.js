import React, { Component } from 'react';
import {Link} from 'react-router';
import Lists from './Lists';

export default class Topics extends Component {
  componentDidMount() {
    const type = this.props.location.query.type
    this.props.actions.fetchTopics({type: type||'last_actived'})
  }

  handleClick(type) {
    this.props.actions.fetchTopics({type: type})
  }

  render() {
    return (
      <div className='panel panel-default topic-lists'>
        <div className='panel-heading text-right'>
          <span className='separator light-gray-color'>查看:</span>
          <Link to='/topics' onClick={() => this.handleClick('last_actived')}>默认</Link>
          <span className='separator'>/</span>
          <Link to='/topics?type=excellent' onClick={() => this.handleClick('excellent')}>优质帖子</Link>
          <span className='separator'>/</span>
          <Link to='/topics?type=no_reply' onClick={() => this.handleClick('no_reply')}>无人问津</Link>
          <span className='separator'>/</span>
          <Link to='/topics?type=recent' onClick={() => this.handleClick('recent')}>最新创建</Link>
        </div>
        <Lists topics={this.props.results.topics} />
        <div className='panel-footer'>
        </div>
      </div>
    );
  }
}