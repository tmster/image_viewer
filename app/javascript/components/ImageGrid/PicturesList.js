import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Row from './Row';

class PicturesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchMore: props.fetchMore,
      hasMore: true,
      pictures: props.pictures,
    };
  }

  loadMore() {
    this.state.fetchMore({
      variables: {
        offset: this.state.pictures.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return this.state.pictures;

        const pictures = [...this.state.pictures, ...fetchMoreResult.pictures];

        if (this.state.pictures.length === pictures.length) {
          return this.setState({ hasMore: false });
        }

        return this.setState({
          pictures,
        });
      },
    });
  }

  showItems() {
    const groups = this.groupedPictures();
    const items = groups.map((group, index) => (
      <Row key={index} group={group} />
    ));
    return items;
  }

  groupedPictures(n = 4) {
    const { pictures } = this.state;
    const group = [];
    for (let i = 0, end = pictures.length / n; i < end; i += 1)
      group.push(pictures.slice(i * n, (i + 1) * n));
    return group;
  }

  render() {
    return (
      <div className="container image-grid">
        <InfiniteScroll
          loadMore={this.loadMore.bind(this)}
          hasMore={this.state.hasMore}
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
  fetchMore: PropTypes.func.isRequired,
};

export default PicturesList;
