import React, { Component } from 'react';
import { FlatList, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
// Files
import ListItem from './ListItem';

class LibraryList extends Component {

  render() {
    return (
      <View>
        <ScrollView>
          {this.props.libraries.map(library => <ListItem library={library} key={library.id} />)}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
