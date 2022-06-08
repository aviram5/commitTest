import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import styles from './User.style';

const NoData = () => (
  <Layout>
    <Text style={styles.noDataText}>
      No user information as been submitted, please go to form page and submit
      your information
    </Text>
  </Layout>
);

const DataText = ({label, data}) => (
  <Layout style={styles.textContainer}>
    <Text style={styles.textLable}>{label}</Text>
    <Text style={styles.textData}>{data}</Text>
  </Layout>
);

const User = () => {
  const formState = useSelector(state => state.form);

  return (
    <Layout style={styles.container}>
      {!Object.keys(formState.formData).length ? (
        <NoData />
      ) : (
        <Layout style={{justifyContent: 'center', alignItems: 'center'}}>
          <DataText label="User Name: " data={formState.formData.userName} />
          <DataText
            label="Phone Number: "
            data={formState.formData.phoneNumber}
          />
        </Layout>
      )}
    </Layout>
  );
};

export default User;
