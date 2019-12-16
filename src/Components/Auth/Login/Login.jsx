import React, { Fragment } from 'react'
import {
  Message,
  Form,
  Segment,
  Button,
  Icon,
  Container
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
      <Container text>
        <Message
          attached
          icon="settings"
          header="Get Started!"
          content="Create a new account"
        />
        <Form
        // onSubmit={handleSubmit} loading={loading} error={Boolean(error)}
        >
          <Message
            error
            header="Oops!"
            // content={error}
            style={{ marginTop: '1em' }}
          />
          <Segment>
            <Form.Input
              fluid
              icon="envelope"
              iconPosition="left"
              label="Email"
              placeholder="Email"
              name="email"
              type="email"
              // value={user.email}
              // onChange={handleChange}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              label="Password"
              placeholder="Password"
              name="password"
              type="password"
              // value={user.password}
              // onChange={handleChange}
            />
            <Button
              // disabled={disabled || loading}
              icon="signup"
              type="submit"
              color="black"
              content="Signup"
            />
          </Segment>
        </Form>
        <Message attached="bottom" style={{ marginTop: '1em' }}>
          <Icon name="help" />
          New user? <Link to="/login">Sign up here!</Link>
        </Message>
      </Container>
    </Fragment>
  )
}

export default Login
