import React, { Component } from 'react';
import { Header, Segment, Input, Icon } from 'semantic-ui-react';

class MessagesHeader extends Component {
  render() {
    const { channelName, numUniqueUsers, handleSearchChange, searchLoading } = this.props;
    return (
      <Segment clearing>
        {/* channel header */}
        <Header
          fluid='true'
          as='h2'
          floated='left'
          style={{ marginBottom: 0 }}
        >
          <span>
            {channelName}
            <Icon name={ 'star outline' } color='black' />
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>

        {/* channel search input */}
        <Header floated='right'>
          <Input
            onChange={handleSearchChange}
            loading={searchLoading}
            size='mini'
            icon='search'
            name='searchTerm'
            placeholder='Search Messages'
          />
        </Header>
      </Segment>
    )
  }
}

export default MessagesHeader;