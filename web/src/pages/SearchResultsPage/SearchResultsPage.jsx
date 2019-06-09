import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as trackSelectors from 'resources/track/track.selectors';
import * as trackActions from 'resources/track/track.actions';
import * as playlistActions from 'resources/playlist/playlist.actions';

import Loader from 'components/Loader';
import Track from 'components/Track';

import * as SC from './SearchResultsPage.styled';

class SearchResultsPage extends React.Component {
  state = {
    isLoading: true,
  }

  componentDidMount() {
    const { searchValue } = this.props.match.params;
    const { searchTracks, getPlaylists } = this.props;
    getPlaylists();
    searchTracks(searchValue)
      .then(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Loader />;
    }

    const { tracks } = this.props;
    const { searchValue } = this.props.match.params;
    return (
      <SC.Page>
        <SC.Title>
          Search results for
          {' '}
          {searchValue}
        </SC.Title>
        <SC.TracksList>
          {tracks.map((track) => {
            return <Track key={track._id} track={track} />;
          })}
        </SC.TracksList>
        {!tracks.length
          && <SC.EmptyList>Sorry, you search didn&#39;t return any results.</SC.EmptyList>
        }
      </SC.Page>
    );
  }
}

SearchResultsPage.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
    composer: PropTypes.string,
    genres: PropTypes.array,
    duration: PropTypes.number,
    appleMusicId: PropTypes.string,
    cover: PropTypes.shape,
  })),
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
  searchTracks: PropTypes.func.isRequired,
  getPlaylists: PropTypes.func.isRequired,
};

SearchResultsPage.defaultProps = {
  tracks: [],
};

const mapStateToProps = state => ({
  tracks: trackSelectors.getSearchTracks(state),
});

const mapDispatchToProps = {
  getPlaylists: playlistActions.getPlaylists,
  searchTracks: trackActions.searchTracks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultsPage);
