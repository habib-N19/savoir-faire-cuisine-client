import React from 'react'

const Blog = () => {
  return (
    <div>
      <p>
        Question-1: What are the differences between uncontrolled and controlled
        components?
      </p>
      <p>
        Controlled components are handled with states. This are the components
        that are controlled by codes. Like when we use state to save a state of
        a change on the ui . This controlled component DOM does not have any
        controll over the change.
      </p>
      <p>
        On the other hand Uncontrolled components are handled with DOM. This is
        like traditional HTML form inputs. Here it uses ref to save the values.
      </p>
      {/* q-2 */}
      <p>Question -2: How to validate React props using PropTypes?</p>
      <p>
        PropType is a react based library that can be used to validate any data.
        It can be installed as a common node package using npm. Then we can
        import it to the component where we need to validate the inputs
      </p>
      <p>
        First we have to write the component and data that need to validate.
        Let's say we have name and age type two data that need to validate.
      </p>
      <p>
        Then using .propTypes with the component name we need to create an
        object that will have the key value pair system to validate the data.
        Example: <code>PropTypes.string.isRequired,</code>
        This can be used to validate the name . If it is not a string then it
        will give an error
        <p>
          Similarly to check if an input data is a number we can use
          <code>PropTypes.number.isRequired,</code>
        </p>
        This way we can use propsType to validate data in react component.
      </p>
      {/* q-3 */}
      <p>difference between nodejs and express js.</p>
      <p>
        The key difference between node and express is node is a js extention
        that can be used in server side while express is a framework based on
        node js.
      </p>
      <p>
        Using express is helpful in many ways. Such as coding time is less in
        express than node.
      </p>
      <p>
        Easy to setup an api in express and testing is comparetively easy on
        express that node.
      </p>
      <p>Express is faster than node js.</p>
      <p>
        Node lacks on various database implimentation but using express we can
        use this on relational db too.
      </p>
      {/* q4 */}
      <p>Q-4:What is a custom hook, and why will you create a custom hook?</p>
      <p>
        There are a various benefits of creating and using a custom hook. Custom
        hook is nothing but a js function that is written in separate file and
        can be used in any component as required.{' '}
      </p>
      <p>Reasons of using a custom hook:</p>
      <p>
        First and foremost the main reason of creating a custom hook is
        reusability. We can use a hook (a js function) to desired component.
        <p>
          Another use case of custom hook is it's simplification. Custom hooks
          make codes more readable and easy to read for others.
        </p>
        <p>Custom hooks makes the codes more easy to test.</p>
      </p>
    </div>
  )
}

export default Blog
