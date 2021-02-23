import React, {useEffect} from 'react';
import InstantAlert from '../../components/InstantAlert';
import { useNavigation } from '@react-navigation/native';

const InstantAlertContainer = () => {
  return (
    <InstantAlert
    onPressButton={()=> console.log('sdgfh')}
    />
  );
};

export default InstantAlertContainer;
