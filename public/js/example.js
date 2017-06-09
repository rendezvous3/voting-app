React.createElement('div', {className: 'ui items'},
  'Hello, friend! I am a basic React component.'
)


<div className='ui items'>
  Hello, friend! I am a basic React component.
</div>


React.createElement('div', {className: 'ui items'},
React.createElement('p', null, 'Hello, friend! I am a basic React component.')
)



<div className='ui items'>
  <p>
    Hello, friend! I am a basic React component.
  </p>
</div>


ReactDOM.render([what], [where]);


// Using Props