import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BootstrapForm = props => (
    <Form inline className ="form" onSubmit={ props.getWeather }>
    <FormGroup>
        <Label for="city">City Name</Label>
        <Input type="city" name="city" id="City" placeholder="U.S. or Int'l." />
        <Label for="country">Country or State</Label>
        <Input type="country" name="country" id="Country" placeholder="U.S. or Int'l" />
    {/* <input type="text" name="city" placeholder="City Name (U.S. or International)" />
    <input type="text" name="country" placeholder="State or Country Name"/> */}
    <Button>Get Weather</Button>
    </FormGroup>
    </Form>
); 
export default BootstrapForm;
