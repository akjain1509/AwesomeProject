import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Layout, Colors} from '../utilities/constant';
import {Formik} from 'formik';
import validationSchema from '../utilities/formSchema';
import {setData} from '../Features/auth/authSlice';
import {Selector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

const AddEmployee = ({navigation}) => {
  const dispatch = useDispatch();

  const handleAdd = values => {
    dispatch(setData(values));
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Added Successfully',
      position: 'bottom',
    });
    navigation.navigate('Drawer');
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter Employee Details</Text>
      </View>
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          jobTitle: '',
          salary: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleAdd}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <View style={styles.input}>
              <Text style={styles.label}>First name</Text>
              <TextInput
                onChangeText={handleChange('first_name')}
                onBlur={handleBlur('first_name')}
                value={values.first_name}
                style={styles.text}
              />
              <Text style={styles.error}>{errors.first_name}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Last name</Text>
              <TextInput
                onChangeText={handleChange('last_name')}
                onBlur={handleBlur('last_name')}
                value={values.last_name}
                style={styles.text}
              />
              <Text style={styles.error}>{errors.last_name}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Job Title</Text>
              <TextInput
                onChangeText={handleChange('jobTitle')}
                onBlur={handleBlur('jobTitle')}
                value={values.jobTitle}
                style={styles.text}
              />
              <Text style={styles.error}>{errors.jobTitle}</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>Salary</Text>
              <TextInput
                onChangeText={handleChange('salary')}
                onBlur={handleBlur('salary')}
                value={values.salary}
                style={styles.text}
              />
              <Text style={styles.error}>{errors.salary}</Text>
            </View>
            <View style={styles.btnView}>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default AddEmployee;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1 / 3,
  },
  headerText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    flex: 1 / 3,
    paddingHorizontal: Layout.width * 0.1,
    justifyContent: 'center',
    paddingVertical: '1%',
  },
  label: {
    color: Colors.black,
    fontSize: 15,
  },
  text: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
    paddingVertical: '1%',
    fontSize: 14,
  },
  btnView: {flex: 1 / 2, justifyContent: 'center'},
  btn: {
    width: Layout.width * 0.8,
    height: Layout.height * 0.07,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btnText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  error: {
    color: Colors.red,
    fontSize: 14,
  },
});
