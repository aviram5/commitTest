import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

const User = () => {
  const formState = useSelector(state => state.form);

  const NoData = () => {
    return (
      <View>
        <Text>
          No user information as been submitted, please go to form page and
          submit your information
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!Object.keys(formState.formData).length ? (
        <NoData />
      ) : (
        <View>
          <Text>User Name: {formState.formData.userName}</Text>
          <Text>PhoneNumber: {formState.formData.phoneNumber}</Text>
        </View>
      )}
    </View>
  );
};

export default User;
