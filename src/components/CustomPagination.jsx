import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Pagination } from 'react-bootstrap';

export default class CustomPagination extends Component {
  render() {
    const { offset, itemsCount, limit } = this.props;
    const pagesCount = Math.ceil(itemsCount / limit);

    const buttons = [];
    for (let i = offset - 2; i < offset + 3; i++) {
      if (i >= 0) {
        buttons.push(
          <Pagination.Item key={i} active={i === offset}>
            {i + 1}
          </Pagination.Item>
        );
      }
    }

    if (offset >= 2) {
      buttons.unshift(<Pagination.Ellipsis></Pagination.Ellipsis>);
      buttons.unshift(<Pagination.Prev></Pagination.Prev>);
      buttons.unshift(<Pagination.First></Pagination.First>);
    }

    if (offset <= pagesCount - 3) {
      buttons.push(<Pagination.Ellipsis></Pagination.Ellipsis>);
      buttons.push(<Pagination.Next></Pagination.Next>);
      buttons.push(<Pagination.Last></Pagination.Last>);
    }

    return <Pagination bsSize="medium">{buttons}</Pagination>;
  }
}

CustomPagination.propTypes = {
  offset: PropTypes.number.isRequired,
  itemsCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
