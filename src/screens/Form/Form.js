import React from 'react';
import {Layout, Input, Button, Text} from '@ui-kitten/components';
import {Formik} from 'formik';
import styles from './Form.style';
import formSchema from './formScheme';
import {fetchData} from '../../features/form/formSlice';
import {useDispatch} from 'react-redux';
const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = formData => {
    dispatch(fetchData({formData}));
  };

  return (
    <Layout>
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
          <Layout style={{flex: 1}}>
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
                style={styles.input}
                label={() => <Text>Phone Number</Text>}
                placeholder="XX-XXX-XX"
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                caption={touched.phoneNumber && errors.phoneNumber}
                status={(errors.phoneNumber && 'danger') || 'basic'}
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
                status={(errors.password && 'danger') || 'basic'}
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
                status={(errors.confirmPassword && 'danger') || 'basic'}
              />
            </Layout>

            <Button
              style={styles.button}
              appearance="outline"
              onPress={handleSubmit}
              // disabled={isSubmitting}
            >
              Save
            </Button>
          </Layout>
        )}
      </Formik>
      {/*if error render here a message */}
    </Layout>
  );
};

export default Form;
