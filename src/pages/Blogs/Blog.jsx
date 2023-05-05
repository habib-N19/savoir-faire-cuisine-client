import React from 'react'

const Blog = () => {
  return (
    <div className='w-10/12 p-3 mx-auto text-white'>
      <div className='my-10 text-lg p-4 border border-primary shadow-lg rounded leading-relaxed'>
        <p className='text-lg font-bold'>
          What are the differences between uncontrolled and controlled
          components?
        </p>
        <p className='mb-2 mt-3 px-4'>
          Controlled components are handled with states. This are the components
          that are controlled by codes. Like when we use state to save a state
          of a change on the ui . This controlled component DOM does not have
          any control over the change.
        </p>
        <p className='px-4'>
          On the other hand Uncontrolled components are handled with DOM. This
          is like traditional HTML form inputs. Here it uses ref to save the
          values.
        </p>
      </div>
      {/* q-2 */}
      <div className='my-10 p-4 text-lg border border-primary shadow-lg rounded leading-relaxed'>
        <p className=' text-lg  font-bold'>
          How to validate React props using PropTypes?
        </p>
        <p className='mt-3 mb-2 px-4'>
          PropType is a react based library that can be used to validate any
          data. It can be installed as a common node package using npm. Then we
          can import it to the component where we need to validate the inputs
        </p>
        <p className='mb-2 px-4'>
          First we have to write the component and data that need to validate.
          Let's say we have name and age type two data that need to validate.
        </p>
        <p className='mb-2 px-4'>
          Then using .propTypes with the component name we need to create an
          object that will have the key value pair system to validate the data.
          <br />
          Example:{' '}
          <code className='bg-primary text-black md:px-2 rounded'>
            PropTypes.string.isRequired,
          </code>
          <br />
          This can be used to validate the name . If it is not a string then it
          will give an error
        </p>
        <p className='mb-2 px-4'>
          Similarly to check if an input data is a number we can use <br />
          <code className='bg-primary text-black md:ml-1 md:px-2 rounded'>
            PropTypes.number.isRequired,
          </code>{' '}
          <br />
          This way we can use propsType to validate data in react component.
        </p>
      </div>

      {/* q-3 */}
      <div className='my-10 text-lg p-4 border border-primary shadow-lg rounded leading-relaxed'>
        <p className='text-lg font-bold'>
          What is the difference between nodejs and express js?
        </p>

        <p className='my-3 px-4'>
          The key difference between node and express is node is a js extention
          that can be used in server side while express is a framework based on
          node js.
        </p>
        <p className='mb-2 px-4'>
          Using express is helpful in many ways. Such as coding time is less in
          express than node.
        </p>
        <p className='mb-2 px-4'>
          Easy to setup an api in express and testing is comparetively easy on
          express that node.
        </p>
        <p className='mb-2 px-4'>Express is faster than node js.</p>
        <p className='mb-2 px-4'>
          Node lacks on various database implementation but using express we can
          use this on relational db too.
        </p>
      </div>
      {/* q4 */}
      <div className='my-10 p-4 text-lg border border-primary shadow-lg rounded leading-relaxed'>
        <p className='text-lg font-bold'>
          What is a custom hook and why will you create a custom hook?
        </p>
        <p className='mb-2 px-4'>
          There are a various benefits of creating and using a custom hook.
          Custom hook is nothing but a js function that is written in separate
          file and can be used in any component as required.{' '}
        </p>
        <p className='mb-2 px-4'>Reasons of using a custom hook:</p>
        <p className='mb-2 px-4'>
          First and foremost the main reason of creating a custom hook is
          reusability. We can use a hook (a js function) to desired component.
        </p>
        <p className='mb-2 px-4'>
          Another use case of custom hook is it's simplification. Custom hooks
          make codes more readable and easy to read for others.
        </p>
        <p className='mb-2 px-4'>
          Custom hooks makes the codes more easy to test.
        </p>
      </div>
    </div>
  )
}

export default Blog
