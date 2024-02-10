import {FC} from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './Layout.style';
import LayoutProps from './Layout.type';
import Header from './Header';

const behavior = Platform.OS === 'ios' ? 'padding' : 'height';

const Layout: FC<LayoutProps> = ({
  HeaderVisablity = false,
  style,
  children,
}) => {
  const {top} = useSafeAreaInsets();
  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={[styles.wrapper, {paddingTop: top}]}>
      <View style={[styles.content, style]}>
        {HeaderVisablity && <Header />}
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Layout;
