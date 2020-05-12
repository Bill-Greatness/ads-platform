import React from 'react';
import {List,Header, Container} from 'semantic-ui-react'

class Tips extends React.Component{
    render(){
        return(
            <>
            <Header as='h3' content='Tips on Posting' subheader='reach out with great contents' icon='info' />
            <Container>
                Eiusmod esse est cupidatat aliqua esse culpa id veniam qui. Minim nulla qui nisi quis ea consequat. In eu ea ad non irure adipisicing aute proident aute. Ullamco velit consectetur excepteur minim veniam. Magna amet mollit do ad esse esse non voluptate ea qui. Id esse officia irure pariatur excepteur nostrud adipisicing nostrud commodo quis excepteur culpa occaecat. Do ipsum sint excepteur id id labore.
            </Container>
            
            <List divided relaxed>
                <List.Item>
                    <List.Icon name='check' size='large' verticalAlign='middle'/>
                    <List.Content>
                        <List.Header content='Side One' />
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name='check'  size='large' verticalAlign='middle'/>
                    <List.Content>
                        <List.Header content='Side One' />
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name='check'  size='large' verticalAlign='middle'/>
                    <List.Content>
                        <List.Header content='Side One' />
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name='check'  size='large' verticalAlign='middle'/>
                    <List.Content>
                        <List.Header content='Side One' />
                    </List.Content>
                </List.Item>
            </List>
            </>
        )
    }
}

export default Tips