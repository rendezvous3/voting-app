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

// When the up-vote button on each one of the Product components is clicked, 
// we expect it to update the votes attribute for that Product, increasing it by one.
// But the Product component can’t modify its votes. this.props is immutable.
// While the child can read its props, it can’t modify them. A child does not own its props.
// In our app, the parent component ProductList owns the props given to Product. 
// React favors the idea of one-way data flow. This means that data changes come from the “top” of 
// the app and are propagated “downwards” through its various components.
