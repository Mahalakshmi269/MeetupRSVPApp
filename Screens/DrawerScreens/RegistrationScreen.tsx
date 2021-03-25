import React from 'react'
import {View, Button, TextInput} from 'react-native'

class RegistrationScreen extends React.component{
	cosntructor()
	{
		super();
		this.state={
			name: '',
			age: '',
			dob: '',
			profession: '',
			locality: '',
			noOfGuests: '',
			address: '',
		}
	}

	render(){
		return{
			<View>
				
			</View>
		}
	}
}

export default RegistrationScreen