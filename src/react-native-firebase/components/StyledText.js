import * as React from 'react';

import { Text } from 'react-native';

export function AbrilFatFaceText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'AbrilFatface' }]} />
  );
}

export function QuickSandText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'Quicksand' }]} />;
}

export function SpaceMonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
