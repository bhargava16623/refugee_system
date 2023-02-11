import React, {useState} from 'react';
import {Card, CardContent, Grid, TextField,Button, Typography} from '@material-ui/core'
import { UserConsumer } from './RefugeeContext';


export const Refugeeform = () => {
    const [inputs, setInputs] = useState({
        firstname:"",
        lastname:"",
        dob:"",
        age:"",
        nationality:"",
        profilephoto:"",
        mobilenumber:"",
        email:""
      })
      const onhandleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...inputs, [name]: value}))
        console.log(name,value);
      }
      const onhandleSubmit = async(e) =>{
        e.preventDefault();
        const _userID = "gowtham0210"
        const fname = inputs.firstname
        const lname = inputs.lastname
        const mobile = inputs.mobilenumber
        const dob = inputs.dob
        const nationality = inputs.nationality
        const gender = inputs.gender
        this.props.createUser(_userID,fname,lname,mobile,dob,nationality,gender)

      }
  return (
    <Card style={{maxWidth:450, margin:"60px auto", padding:"20px 5px"}}>
        <CardContent>
            <Typography gutterBottom variant="h5">Refugee</Typography>
            <Typography gutterBottom color='textSecondary' variant='body2' component="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra </Typography>
            <form onSubmit={onhandleSubmit}>
            <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                    <TextField
                      label="First Name"
                      placeholder="First Name"
                      variant='outlined'
                      name="firstname"
                      value={inputs.firstname}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField
                      label="Last Name"
                      placeholder="Last Name"
                      variant='outlined'
                      name="lastname"
                      value={inputs.lastname}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="date"
                      placeholder="DOB"
                      variant='outlined'
                      name="dob"
                      value={inputs.dob}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="number"
                      label="Age"
                      placeholder="Age"
                      variant='outlined'
                      name="age"
                      value={inputs.age}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="text"
                      label="Nationality"
                      placeholder="Nationality"
                      variant='outlined'
                      name="nationality"
                      
                      value={inputs.nationality}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="text"
                      label="Profile Photo"
                      placeholder="Profile Photo"
                      variant='outlined'
                      name="profilephoto"
                      value={inputs.profilephoto}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Email"
                      variant='outlined'
                      name="email"
                      value={inputs.email}
                      onChange={onhandleChange}
                      fullWidth
                      required
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <TextField
                      type="text"
                      label="Phone number"
                      placeholder="Phone Number"
                      name="mobilenumber"
                      value={inputs.mobilenumber}
                      onChange={onhandleChange}
                      variant='outlined'
                      fullWidth
                    ></TextField>
                </Grid>
                <Grid xs={12} item>
                    <Button variant='contained' color='primary' fullWidth>Submit</Button>
                </Grid>
            </Grid>
            </form>
            <div>
              <UserConsumer>
                {
                   username =>{
                    return <p>First name: {username}</p>
                   }
                }
              </UserConsumer>
                <p>Last name: {inputs.lastname}</p>
            </div>
        </CardContent>
    </Card>
  )
}
