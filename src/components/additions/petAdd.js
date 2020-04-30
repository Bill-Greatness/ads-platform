import React from 'react'
import {Grid, Form, Button} from 'semantic-ui-react'
import Title from '../_components/TopHead'

class  AddPet extends React.Component {
    render(){
        return(
            <Grid padded>
                <Title icon='user' content='Send Pet to Market' subheader='Some Subheader'/>
                <Grid.Column computer={16} tablet={16} mobile={16}>
                    <Grid padded centered>
                        <Grid.Column computer={10} mobile={16} tablet={10} >
                            <Form size='small' >
                                <Form.Input
                                required
                                placeholder='Animal or Pet name'
                                label='Animal Name'
                                />
                                
                                <Form.Input
                                required
                                placeholder='0.00$'
                                label='Price'
                                />
                                
                                <Form.Input
                                required
                                type='file'
                                label='Animal or Pet Images'
                                />
                                
                                <Form.Input
                                required
                                type='number'
                                label='Number Available'
                                />
                                <Form.TextArea
                                    required
                                    label='Description'
                                    />
                                    
                                <Button circular > Advertise </Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
            </Grid>
        )
    }
}

export default AddPet