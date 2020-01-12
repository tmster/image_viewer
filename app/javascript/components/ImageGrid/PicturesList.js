import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Row from './Row';

class PicturesList extends React.Component {
  showItems() {
    const groups = this.groupedPictures();
    const items = groups.map((group, index) => (
      <Row key={index} group={group} />
    ));
    return items;
  }

  groupedPictures(n = 4) {
    const { pictures } = this.props;
    const group = [];
    for (let i = 0, end = pictures.length / n; i <= end; i += 1)
      group.push(pictures.slice(i * n, (i + 1) * n));
    return group;
  }

  render() {
    return (
      <div className="container image-grid">
        <InfiniteScroll
          loadMore={this.props.onLoadMore.bind(this)}
          hasMore={this.props.hasMorePictures}
          useWindow={true}
        >
          {this.showItems()}
        </InfiniteScroll>
      </div>
    );
  }
}

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  hasMorePictures: PropTypes.bool.isRequired,
};

export default PicturesList;
