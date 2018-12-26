import React from 'react'
import { Input, Button, Form } from 'semantic-ui-react'

const TimeLineForm = (props) => {
  return (
    <Form>
        <Form.Group inline>
          <Form.Field>
            <label>Start Date</label>
            <Input placeholder='month' name="startMonth"/>
          </Form.Field>
          <Form.Field>
            <Input placeholder='day' name="startDay"/>
          </Form.Field>
          <Form.Field>
            <Input placeholder='year' name="startYear"/>
          </Form.Field>
        </Form.Group>
        <Form.Group inline>
          <Form.Field>
            <label>End Date</label>
            <Input placeholder='month' name="endMonth" />
          </Form.Field>
          <Form.Field>
            <Input placeholder='day'  name="endDay"/>
          </Form.Field>
          <Form.Field>
            <Input placeholder='year' name="endYear"/>
          </Form.Field>
        </Form.Group>
        <Button type='submit'>Submit</Button>
      </Form>
  )
}

export default TimeLineForm