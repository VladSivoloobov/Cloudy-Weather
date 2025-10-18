import { ComponentPropsWithoutRef } from 'react';
import Text from '../text/Text';

export default function Title(props: ComponentPropsWithoutRef<'p'>) {
  return <Text {...props} />;
}
