import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Formik} from 'formik'

const FormComponent = ({children}) => {
    return (
        <Formik>
            {children}
        </Formik>
    )
}

export default FormComponent

const styles = StyleSheet.create({})
