import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Layout, Input, Button, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import styles from './Form.style';
import formSchema from './formScheme';
import {fetchData, resetMessage} from '../../features/form/formSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

const Form = () => {
  const isFocused = useIsFocused();
  const formState = useSelector(state => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isFocused) {
      dispatch(resetMessage());
    }
  }, [isFocused, dispatch]);

  const handleSubmit = formData => {
    dispatch(fetchData({formData}));
  };

  return (
    <Layout style={{flex: 1}}>
      <Formik
        initialValues={{
          userName: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={formSchema}
        onSubmit={values => handleSubmit(values)}>
        {({handleChange, handleSubmit, values, touched, errors}) => (
          <KeyboardAwareScrollView
            resetScrollToCoords={{x: 0, y: 0}}
            style={{marginTop: 40}}>
            <Layout style={styles.inputContainer}>
              <Input
                style={styles.input}
                label={() => <Text>User Name</Text>}
                placeholder="User Name"
                value={values.userName}
                onChangeText={handleChange('userName')}
                caption={touched.userName && errors.userName}
                status={(errors.userName && 'danger') || 'basic'}
              />
            </Layout>
            <Layout style={styles.inputContainer}>
              <Input
                keyboardType="phone-pad"
                style={styles.input}
                label={() => <Text>Phone Number</Text>}
                placeholder="XX-XXX-XX"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                caption={touched.phoneNumber && errors.phoneNumber}
                status={
                  (touched.phoneNumber && errors.phoneNumber && 'danger') ||
                  'basic'
                }
              />
            </Layout>
            <Layout style={styles.inputContainer}>
              <Input
                style={styles.input}
                label={() => <Text>Password</Text>}
                placeholder="********"
                value={values.password}
                onChangeText={handleChange('password')}
                caption={touched.password && errors.password}
                status={
                  (touched.password && errors.password && 'danger') || 'basic'
                }
              />
            </Layout>
            <Layout style={styles.inputContainer}>
              <Input
                style={styles.input}
                label={() => <Text>Confirm Password</Text>}
                placeholder="********"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                caption={touched.confirmPassword && errors.confirmPassword}
                status={
                  (touched.confirmPassword &&
                    errors.confirmPassword &&
                    'danger') ||
                  'basic'
                }
              />
            </Layout>

            <Button
              style={styles.button}
              appearance="outline"
              onPress={handleSubmit}
              disabled={formState.isLoading}>
              {formState.isLoading ? <ActivityIndicator /> : 'Save'}
            </Button>
          </KeyboardAwareScrollView>
        )}
      </Formik>

      <Layout style={styles.massageContainer}>
        {!formState.isLoading ? (
          formState.error ? (
            <Text style={styles.message}>{formState.error}</Text>
          ) : (
            <Text style={styles.message}>{formState.succsess}</Text>
          )
        ) : null}
      </Layout>
    </Layout>
  );
};

export default Form;
